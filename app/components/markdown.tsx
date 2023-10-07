import ReactMarkdown from "react-markdown";
import "katex/dist/katex.min.css";
import RemarkMath from "remark-math";
import RemarkBreaks from "remark-breaks";
import RehypeKatex from "rehype-katex";
import RemarkGfm from "remark-gfm";
import RehypeHighlight from "rehype-highlight";
import { useRef, useState, RefObject, useEffect } from "react";
import { copyToClipboard } from "../utils";
import mermaid from "mermaid";

import LoadingIcon from "../icons/three-dots.svg";
import React from "react";
import { useDebouncedCallback, useThrottledCallback } from "use-debounce";
import { showImageModal } from "./ui-lib";



export interface GPTFunctionProperty {
  type: string;
  description: string;
  enum?: string[]; // Optional enum field
}

export interface GPTFunctionParameters {
  type: string;
  properties: { [key: string]: GPTFunctionProperty }; 
  required: string[];
}

export interface GPTFunction {
  name: string;
  description: string;
  parameters: GPTFunctionParameters; 
}

export function Mermaid(props: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (props.code && ref.current) {
      mermaid
        .run({
          nodes: [ref.current],
          suppressErrors: true,
        })
        .catch((e) => {
          setHasError(true);
          console.error("[Mermaid] ", e.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.code]);

  function viewSvgInNewWindow() {
    const svg = ref.current?.querySelector("svg");
    if (!svg) return;
    const text = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([text], { type: "image/svg+xml" });
    showImageModal(URL.createObjectURL(blob));
  }

  if (hasError) {
    return null;
  }

  return (
    <div
      className="no-dark mermaid"
      style={{
        cursor: "pointer",
        overflow: "auto",
      }}
      ref={ref}
      onClick={() => viewSvgInNewWindow()}
    >
      {props.code}
    </div>
  );
}


export interface GPTFunctionCall {
  name: string;
  arguments: string;
}

export interface GPTChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string | null;
      function_call?: GPTFunctionCall;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}


interface RenderFunctionObjProps {
  functionObj: GPTFunction;
}

const RenderFunctionObj: React.FC<RenderFunctionObjProps> = ({ functionObj }) => {
  console.log("     functionObj: ",    functionObj);

  
  // Your rendering logic for GPTFunction
  return (
    <>
      {functionObj && 'name' in functionObj && (
        <div style={{ background: "yellow", padding: "1em", marginBottom: "1em" }}>
          <h2>Function: {functionObj.name}</h2>
          <p>Description: {functionObj.description}</p>
          <div style={{ background: "orange", padding: "1em", marginBottom: "1em" }}>
            <h3>Parameters:</h3>
            {Object.entries(functionObj.parameters.properties).map(([key, value]) => (
              <div style={{ background: "silver", padding: "1em", marginBottom: "1em" }} key={key}>
                <strong>{key}</strong> ({value.type}) 
                <p>Description: {value.description}</p>
                {value.enum && (
                  <div style={{ background: "lightblue", padding: "1em", marginBottom: "1em" }}>
                    Enum: {value.enum.join(", ")}
                  </div>
                )}
              </div>
            ))}
            <div>
              <strong>Required:</strong> {functionObj.parameters.required.join(", ")}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
interface RenderChatCompletionProps {
  chatCompletionObj: GPTChatCompletion;
}

const RenderChatCompletion: React.FC<RenderChatCompletionProps> = ({ chatCompletionObj }) => {
  console.log("     chatCompletionObj: ",    chatCompletionObj);

  // Your rendering logic for GPTChatCompletion
  return (
    <>
      {chatCompletionObj && 'name' in chatCompletionObj && chatCompletionObj.choices && chatCompletionObj.choices[0].message.function_call && (
        <div style={{ border: "1px solid blue", padding: "1em", marginBottom: "1em" }}>
          <h2>Function Call: {chatCompletionObj.choices[0].message.function_call.name}</h2>
          <div>
            <h3>Arguments:</h3>
            {Object.entries(JSON.parse(chatCompletionObj.choices[0].message.function_call.arguments as string)).map(([key, value]) => (
                <div style={{ border: "1px solid green", padding: "1em", marginBottom: "1em" }} key={key}>
                  {key}: {typeof value === 'string' || typeof value === 'number' ? value : 'Unknown value type'}
                </div>
            ))}

          </div>
        </div>
      )}
    </>
  );
};


export function PreCode(props: { children: any }) {
  const ref = useRef<HTMLPreElement>(null);
  const refText = ref.current?.innerText;
  const [mermaidCode, setMermaidCode] = useState("");
  const [jsonObj, setJsonObj] = useState<GPTFunction | GPTChatCompletion | null>(null);
 
  const [gptFunctionObj, setGptFunctionObj] = useState<GPTFunction | null>(null);
  const [gptChatCompletionObj, setGptChatCompletionObj] = useState<GPTChatCompletion | null>(null);

  
  const renderMermaid = useDebouncedCallback(() => {
    if (!ref.current) return;
    const mermaidDom = ref.current.querySelector("code.language-mermaid");
    if (mermaidDom) {
      setMermaidCode((mermaidDom as HTMLElement).innerText);
    }
  }, 600);

  const renderJSON = () => {
    if (!ref.current) return;
    const jsonDom = ref.current.querySelector("code.language-json");
    if (jsonDom) {
      try {

//console.log("     if (jsonDom): ",    jsonDom);
        
        const json = JSON.parse((jsonDom as HTMLElement).innerText);

console.log("     json: ",    json);

        if (json.choices) {
          setGptChatCompletionObj({ ...json });
          setJsonObj({ ...json });
        const chatCompletionObj = jsonObj as GPTChatCompletion;
        renderChatCompletion(chatCompletionObj);
console.log("     setGptChatCompletionObj: ",    { ...json });
        } else {
          setGptFunctionObj({ ...json });
          setJsonObj({ ...json });
        const functionObj = jsonObj as GPTFunction;    
        renderFunctionObj(functionObj);          
console.log("     setGptFunctionObj: ",    { ...json });
        }
        
      } catch (error) {
        console.error("Invalid JSON");
      }
    }
  };

  useEffect(() => {
    console.log("jsonObj has changed: ", jsonObj);
  }, [jsonObj]);

  useEffect(() => {
    setTimeout(() => {
      renderMermaid();
      renderJSON();
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refText]);

  
  return (
    <>
      {
        const chatCompletionObj = jsonObj as GPTChatCompletion;
        const functionObj = jsonObj as GPTFunction;
      }
      {console.log("Rendering with:", mermaidCode, jsonObj)}
      {console.log("functionObj with:", functionObj)}
      {console.log("chatCompletionObj with:", chatCompletionObj)}
      {mermaidCode.length > 0 && (
        <Mermaid code={mermaidCode} key={mermaidCode} />
      )}


      <pre ref={ref}>
        <span
          className="copy-code-button"
          onClick={() => {
            if (ref.current) {
              const code = ref.current.innerText;
              copyToClipboard(code);
            }
          }}
        ></span>
        {props.children}
      </pre>
    </>
  );
}




function _MarkDownContent(props: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[RemarkMath, RemarkGfm, RemarkBreaks]}
      rehypePlugins={[
        RehypeKatex,
        [
          RehypeHighlight,
          {
            detect: false,
            ignoreMissing: true,
          },
        ],
      ]}
      components={{
        pre: PreCode,
        p: (pProps) => <p {...pProps} dir="auto" />,
        a: (aProps) => {
          const href = aProps.href || "";
          const isInternal = /^\/#/i.test(href);
          const target = isInternal ? "_self" : aProps.target ?? "_blank";
          return <a {...aProps} target={target} />;
        },
      }}
    >
      {props.content}
    </ReactMarkdown>
  );
}

export const MarkdownContent = React.memo(_MarkDownContent);

export function Markdown(
  props: {
    content: string;
    loading?: boolean;
    fontSize?: number;
    parentRef?: RefObject<HTMLDivElement>;
    defaultShow?: boolean;
  } & React.DOMAttributes<HTMLDivElement>,
) {
  const mdRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="markdown-body"
      style={{
        fontSize: `${props.fontSize ?? 14}px`,
      }}
      ref={mdRef}
      onContextMenu={props.onContextMenu}
      onDoubleClickCapture={props.onDoubleClickCapture}
      dir="auto"
    >
      {props.loading ? (
        <LoadingIcon />
      ) : (
        <MarkdownContent content={props.content} />
      )}
    </div>
  );
}
