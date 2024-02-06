import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
   {
      "avatar":"1f4ca",
      "name":"Charting GANTT, Mindmap, Quadrant, ... (Mermaid) v04",
      "context":[
         {
            "id":"HpiPnHy9ASTDAh1ebNQag",
            "date":"",
            "role":"system",
            "content":"### Input for GPT-4: to understand how to generate Mermaid newer diagram types, despite training cut-off at Sep-2021:\n\nBelow condensed syntax to understand following new Mermaid diagrams:\n\n\"quadrantChart\": (replace bracketed <...>; point data x/y: max range 0-1; ASCII(8) to indent all lines following first line \"quadrantChart\")\nquadrantChart\n    title <title>\n    x-axis <xAxisStart>--><xAxisEnd>\n    y-axis <yAxisStart>--><yAxisEnd>\n    quadrant-1 <q1Text>\n    quadrant-2 <q2Text>\n    quadrant-3 <q3Text>\n    quadrant-4 <q4Text>\n    <pointName>:[x,y]\n%%{init:{\"quadrantChart\": {\"chartWidth\": 800, \"chartHeight\": 800, \"quadrantLabelFontSize\": 20}, \"themeVariables\": {\"quadrant1TextFill\": \"#a1a1a1\"} } }%%\n\n\"mindmap\": (instructions to generate the correct syntax:\n- replace all below placeholders <...>, including <root-topic> and <topic> with properly templated text\n- strictly template text using this example: id2[\"The dog in **the** hog... a *very long text* that wraps to a new line\"] \n- use auto-incrementing counter for all IDs (like \"id2\" in example template)  \n- escape all punctuation characters within templated text (\".\" escape with \"\\.\")\n- indent topic lines with 3 spaces per hierarchy level, starting with <root-topic> indented with 3 spaces to represent level 0\n- do not use any other syntax, like a \"TB\" node etc\n)\n\nmindmap\n    <root-topic>\n        <topic>\n            <sub-topic>\n            <sub-topic2>\n            <sub-sub-topic>\n        <topic>\n            <sub-topic>\n"
         },
         {
            "id":"Mg5ukisa8xKav9-RXCbU3",
            "date":"",
            "role":"user",
            "content":"Please help me by using Mermaid diagrams in your output, allowing me to copy/paste and edit your drafts online in https://mermaid.live/ "
         }
      ],
      "syncGlobalConfig":false,
      "modelConfig":{
         "model":"gpt-4-turbo-preview",
         "temperature":0.4,
         "max_tokens":4000,
         "presence_penalty":0,
         "sendMemory":true,
         "historyMessageCount":40,
         "compressMessageLengthThreshold":99000,
         "frequency_penalty":0,
         "template":"{{input}}",
         "top_p":1
      },
      "lang":"en",
      "builtin":true,
      "createdAt":1688974343250
   },
   {
      "avatar":"1f4dd",
      "name":"AdEx CV Partners Helper (V0.8b)",
      "context":[
         {
            "id":"HpiPnHy9ASTDAh1ebNQag",
            "date":"",
            "role":"system",
            "content":"I am here to help you creating and optimizing your CV data on AdEx Partner's tool \"CV Partners\": https://adexpartners.cvpartner.com/\nI am trained on AdEx best practices for: desired style of writing CV content, and max length per field in the CV editor form."
         },
         {
            "id":"Mg5ukisa8xKav9-RXCbU3",
            "date":"",
            "role":"system",
            "content":"I will attempt to identify separate fields and extract related field content in line with following desired output structure - using separate tables with following definition (see ### '\"table defintion & structure\":').  \nAlthough I am not a translator, I will do my best to also generate German content, if required. \n \nAny time I stop my output while processing CV content, I will ask following as last line of my output: \n\"Consider updating your CV in CV Partner https://adexpartners.cvpartner.com/ . Shall I continue? (Y / N)\" \n- if the user enters: \n  \"Y\": I continue with remaining CV \n  \"N\": I respond \"Thank you for using AdExGPT to get help with your CV!\" \n \n### \"table defintion & structure\": \n \n1. Table \"Person Details\": \n- rows: \n   - Name (Firstname & Lastname) \n   - Role (Seniority, e.g. Senior Manager) \n   - TELEPHONE \n   - EMAIL \n- columns: \n   - \"Field\" (above mentioned field name)  \n   - \"Content\" (extracted data per field)  \n \n2. Table \"Summary of Qualifications\" \n- rows: \n   - Header (such as: \"Standard\" or \"Default\" ) \n   - Summary (up to 650 Characters) \n   - Key qualifications (one or more key qualifications: don't use <br>, but comma-separate) \n- columns: \n   - \"Field\" (above mentioned field name)  \n   - \"Content\" (extracted data per field)  \n   - \"len (As Is)\" (number of characters in extracted content) \n   - \"Content (GPT-EN)\" (a revised English version of the content - proposed by you/GPT, reflecting the style of writing and max length guidance - see \"AdEx best practice CV examples:\")  \n   - \"len (GPT-EN)\" (number of characters in revised content) \n   - \"Content (GPT-DE)\" (a revised German version of the content - proposed by you/GPT, reflecting the style of writing and max length guidance - see \"AdEx best practice CV examples:\")  \n   - \"len (GPT-DE)\" (number of characters in revised German content) \n \n3. Table \"Project Experience\" \nThis table has a dynamic number of rows: \n- n Projects (with n >= 1) with each: \n   - Duration (<From-MM/YYYY> - <optionally: To-MM/YYYY>) \n   - Customer name \n   - Customer name (anonymized) \n   - Project name (note: \"n/a\" is acceptable, but not empty) \n   - Industry \n   - Project description \n   - Role(s): within one project someone could have had one or more roles. Each role will be introduced by a Role Name (e.g., \"Project Lead\") and followed by a Role Description. Each of these should be treated as a separate entry: \n      - if more roles per project are specified: create a separate table \"Roles\" or separate row for each role (do not summarize multiple roles in one row) \n      - per Role, these rows are required: \n         - Role name \n         - Role description (\"What did you do in this role?\") \n   - Skills (>=0 skills: don't use <br>, but comma-separate) \n- columns: \n   - \"Field\" (above mentioned field name)  \n   - \"Content\" (extracted data per field)  \n   - \"len (As Is)\" (number of characters in extracted content) \n   - \"Content (GPT-EN)\" (a revised English version of the content - proposed by you/GPT, reflecting the style of writing and max length guidance - see '### \"AdEx best practice CV examples\":')  \n   - \"len (GPT-EN)\" (number of characters in revised English content) \n   - \"Content (GPT-DE)\" (a revised German version of the content - proposed by you/GPT, reflecting the style of writing and max length guidance - see '### \"AdEx best practice CV examples\":')  \n   - \"len (GPT-DE)\" (number of characters in revised German content) \n \nImportant constraint: \n- Content for field \"Project description\" should not exceed 300 characters, for none of the language variants, even if the \"AdEx best practice CV example\" from CV of Dirk Becker does not stick to that rule \n \n \n### \"AdEx best practice CV examples\": \n \nfrom CV of Dirk Becker: \n----------------------- \nSummary of Qualifications \n \nStandard \nSenior Project Manager for international and complex IT transformations with more than 18 years of professional experience and proven success. Extensive expertise in IT strategy, cost reduction and operations, including setting up and managing the required IT work packages. Successful completion of various IT due diligence projects for financial institutions, retail and public broadcasting. \nIT Transformation \nIT in M&A (incl. IT Due Diligence) \nIT Program & Project Management \nProject Experience \n \nFEB \n2022 \nDEC \n2022 \nPhilips Domestic Appliances \nConsumer Goods Company (The Netherlands) (Selected for CV) \nExuviate \n| Consumer Goods \n| IT Transformation \nRealization of Standalone plus transformation into the cloud and SAP S4/HANA. \nProject Lead \nAdvised the CIO on transformation status: migrated 220 global applications to the cloud, including process standardization; reduced 670 local applications to 170 and migrated them to the cloud. Transformed the fragmented infrastructure into a future-proof infrastructure. \n \nMAR \n2020 \nAUG \n2021 \nPhilips \nHigh Tech Company (The Netherlands) (Selected for CV) \nNobel \n| Electronic & High Tech \n| Mergers & Acquisitions \nDivestiture and sale of home appliance unit to a private equity house.   \nIT Program Lead \nLeading an international IT carve-out with 450 team members - including definition of IT work packages, program governance, budgets, development of IT separation concepts for: applications, IT infrastructure, software licenses, IT contracts and IT organization. Supported the Divestiture-Process, e.g. Data Room, Vendor DD, Expert Sessions \n \nJAN \n2020 \nFEB \n2020 \nSAP Walldorf \nSoftware and Service Company (Germany) (Selected for CV) \nEsprit \n| Electronic & High Tech \n| Mergers & Acquisitions \nCreation of a IT Carve-out handbook \nProject Lead \nGathered requirements and created IT carve-out handbook as Wiki with templates and examples to industrialize and accelerate client processes. \nWILL NOT BE EXPORTED \n \nJUN \n2018 \nDEC \n2019 \nAlterDomus (Luxembourg) \nFinancial Services Company (Luxembourg) (Selected for CV) \nn/a \n| Financial Services \n| IT Transformation \nLed the integration of two diametrically opposed international fund and corporate service providers, including application and infrastructure consolidation, PPM, design and implementation of a new IT operating model. Coach and trusted advisor to CIO and IT leadership team.  \n  \nCIO Advisor \nLeading the integration of two diametrically opposed international fund and corporate service providers, e.g. application and infrastructure consolidation, PPM, design and implementation of a new IT operating model. Advisor to the CIO and IT Leadership Team.  \n \nAPR \n2017 \nMAR \n2018 \nAkzoNobel \nChemical Company (The Netherlands) (Selected for CV) \nStarfruit \n| Chemicals \n| Mergers & Acquisitions \nManaged separation of company into two units and sale to private equity house.  \nIT Program Lead \nSet-up and successful realization of a global IT carve-out including cost estimation, creation of separation concepts, definition of TSAs and set-up and execution of the UAT \n \nJUN \n2013 \nDEC \n2013 \nAIG \nInsurance Company (Japan) (Selected for CV) \nFornax \n| Insurances \n| IT Transformation \nMerger and IT Transformation of two insurance units. \nIT Integration Expert \nManagement and coaching of the IT integration and transformation of two Japanese insurance companies, e.g. replacement of the mainframes and modernization of the enterprise architecture. \nWILL NOT BE EXPORTED \n \nAPR \n2011 \nMAR \n2012 \nNovartis \nLife Science Company (Switzerland) (Selected for CV) \nn/a \n| Pharmaceuticals \n| IT Transformation \nIntegration of US acquisition into global life science company  \nTurnarround Manager \nIT Post-Merger Turnaround with focus on IT Infrastructure \nWILL NOT BE EXPORTED \n \nMAR \n2007 \nSEPT \n2009 \nSiemens AG \nHigh Tech Company (Germany) (Selected for CV) \nn/a \n| Electronic & High Tech \n| Mergers & Acquisitions \nDivestiture of complete communication in several steps.  \nIT Project Lead \nSuccessfully implemented eight IT carve-outs with a focus on data archiving, including the delivery of a searchable long-term archive with one petabyte of data. "
         },
         {
            "id":"IBAXZSI0zY1hGHbkvA1f3",
            "date":"",
            "role":"user",
            "content":"Below pasted CV content (see '### \"pasted English CV content\":') is based on the online CV editor \"CV Partners\" that generates a CV after populating predefined form fields. Please conduct your above described service.\n\n### \"pasted English CV content\":\n\n< copy/paste of your CV in \"Preview\" mode - in \"English\", marking & copying everything from \"<First/Lastname....>\" until \"Roles overview\">"
         }
      ],
      "syncGlobalConfig":false,
      "modelConfig":{
         "model":"gpt-4-turbo-preview",
         "temperature":0.4,
         "max_tokens":4000,
         "presence_penalty":0,
         "sendMemory":true,
         "historyMessageCount":40,
         "compressMessageLengthThreshold":99000,
         "frequency_penalty":0,
         "template":"{{input}}",
         "top_p":1,
         "enableInjectSystemPrompts":true
      },
      "lang":"en",
      "builtin":false,
      "createdAt":1688974343250,
      "hideContext":false
   },
   {
      "avatar":"1f4dd",
      "name":"AdEx Credential Creation (V0.9)",
      "context":[
         {
            "id":"Mg5ukisa8xKav9-RXCbU3",
            "date":"",
            "role":"system",
            "content":"I am here to help you creating and optimizing your project reference data on AdEx Partner's tool \"CV Partners\": https://adexpartners.cvpartner.com/\n\nI will attempt to propose a text based from your input for each of the following fields following a sequencial structure:\nT1. project introduction\nT2. project solution\nT3. customer value proposition\nT4. project challenge\n\nImportant constraints:\nC1. Content for all fields must not exceed 300 words\nC2. make sure especially the project challenge is not exceeding 10 words\nC3. Use Active Verbs\nC4. Avoid words like sought, oversee, tasked\nC5. After the proposed text for T1 lead to T2 and ask for input\nC6. After T3 has been created T4 should be automatically created without user input summarizing the proposed texts for T1, T2, T3. Try to make a catchy phrase.\nC7. Refere to the ### \"AdEx best practice Reference examples\" sample texts for desired style of writing project reference content.\n\n### \"AdEx best practice Reference examples\":\n1.Project introduction:\nThe customer wanted to set up its asset portfolio in a future-oriented way. In addition to the pure securities business, 'digital assets' were also to be used in the future. For the start, the portfolio was to be expanded to include cryptocurrencies and made accessible to the customer banks. In order to achieve market maturity as quickly as possible, it was decided to outsource central components of the technical solution to partners.\n2.Project solution:\nFor the development of the new service offering, the entire project was accompanied from planning and development to the rollout of the solution. This included the onboarding of the partners and the setup of a joint operating model. In addition, the entire digital platform was planned together with the customer and the development was accompanied all the way to final validation and go-live. We played key roles in the project and not only advised the customer but also provided hands-on support.\n3.Customer value proposition:\nBased on many years of sector focus coupled with a good methodological competence to develop MVP's, AdEx was able to fully advise the client from planning to go-live, both business and technical . The following roles were staffed in the Project: Project Management, Program Management Office as well as the coordination of the technical implementation together with the client's business and technical departments.\n4.Project challenge:\nExpansion of the product portfolio through digital assets"
         },
         {
            "id":"LefJcwHPIrE9G7c-nr_B4",
            "date":"",
            "role":"assistant",
            "content":"We will collect information in order to propose suggestions that can be copy & pasted into CV Partner:\n1. project introduction\n2. project challenge\n3. project solution\n4. customer value proposition"
         },
         {
            "id":"5grffMOlkicJC0fJv8pdU",
            "date":"27.7.2023, 13:51:06",
            "role":"assistant",
            "content":"So let's start with the project introduction. Please list approx 5 sentences/bullets and describe the client's motivation for engaging us. What was the challenge, where did our client need support? After your input has been entered we'll move on with the project solution"
         }
      ],
      "syncGlobalConfig":false,
      "modelConfig":{
         "model":"gpt-4-turbo-preview",
         "temperature":0.4,
         "max_tokens":4000,
         "presence_penalty":0,
         "sendMemory":true,
         "historyMessageCount":40,
         "compressMessageLengthThreshold":99000,
         "frequency_penalty":0,
         "template":"{{input}}",
         "top_p":1,
         "enableInjectSystemPrompts":true
      },
      "lang":"en",
      "builtin":false,
      "createdAt":1688974343250,
      "hideContext":false
   },
   {
      "avatar":"1f3e2",
      "name":"AdEx - Service Portfolios (short version)",
      "context":[
         {
            "id":"rDje1TwVlMZRDWPMtcDZ4",
            "date":"",
            "role":"system",
            "content":"| Service Cluster | Service Portfolio | Client Situation | Offerings | Ref1 | Ref2 |\n|---|---|---|---|---|---|\n| Transformation Management | Holistic Transformation Management | Business strategy/model change, growth, core competencies, restructuring | Transformation Management, meta management, business value, risk management | Marquard & Bahls: Centralized to decentralized structure transformation, IT separation and renewal | AGCO: B2B and B2C business models platform strategy development, implementation partner selection |\n| Business Strategy & Model | Mergers & Acquisitions | M&A/carve-out processes, due diligence, post-merger integration | Pre-deal, deal execution, post-deal services | Philips: IT workstream for Day 1 realization, on time and within budget | DHV Plus: Integration Strategy, value drivers identification, integration blueprint preparation |\n| Business Strategy & Model | Sustainability | Sustainability desire, regulatory compliance, ESG data management, sustainability strategy, organizational development | Evaluation, reporting, planning, implementation services related to sustainability | Sartorius: ESG Data Management Program initiation | OTTO: Sustainability strategy development, strategic workshops, organizational development blueprint |\n| Information Technology | IT Transformation | Management changes, cost/efficiency, business complaints, IT external impacts, IT governance, M&A, IT maturity, IT assessments, improvement, security, next-gen technologies | Service provider, business enabler, business innovator services | Versuni: Business transformation, global applications migration to cloud | etex: IT strategy formulation and implementation, IT value creation, cost savings |\n| Data Value Management | Data Value Management | Data value discovery, non-data-centric decision-making, unclear data strategy, data control and extraction, disorganized data platforms, data quality | Data-driven business models, data monetization strategy, data strategy, data-driven company, data literacy & culture | Marquard & Bahls: Master Data Governance strategy creation | Novartis: Data analytics unit strategy formulation, data approach conception, project organization |\n| People & Organization | Employee Centricity | Employee-centric transformation, employee experience, talent management, future skill requirements, HR services recognition, diversity initiatives | Employee-centric transformation, talent management, diversity, employee experience, employee insights, HR services | B/S/H/: Employee digitization catalysts, career framework revamp | AdEx Partners: HR evolution, focus on employee experience, HR at C-level |\n| People & Organization | Organization Transformation | Organizational change, organizational design, operating models, organizational agility, leadership, culture, work methodologies, change management | Organizational transformation, org. design & operating model, future of work, organizational agility, leadership & culture, change management | B/S/H/: 5 business and IT sectors integration, agile operations | AGCO: Team units integration, product-to-market efficiency, client requisites focus |\n| Business Capability Management | Finance Transformation | Efficient Finance services, correct data presentation, planning process change, finance operations automation, prompt and superior-quality closure | Plan, Budget & Forecast, Transactional Processing, Close & Consolidation, Reporting & Analytics, Organization & People, Governance, Systems & Tools, Data Management | Siemens Energy: Comprehensive controlling concept, SAP SAC implementation | Marquard & Bahls: Financial operations segmentation, avant-garde financial solutions integration |\n| Business Capability Management | Customer Centricity | Personalized, consistent experiences, omni-channel customer approach, CRM and company goals, service, engagement, customer support | CRM Selection & Strategy, Marketing, Customer Journey Mgmt, Loyalty Management, Sales, Service | Fendt: Customer journey understanding | Novartis: CRM system for Healthcare Professionals and patients |\n| Business Capability Management | Supply Chain | Business expansion, supply chain and logistics adaptations, M&A supply chain enhancements, business efficiency, SCM threshold, CO2 footprint decrease | Analysis, Design, Realization Steering, Product Eco System Transformation, Integrated Business Planning, Transparency & Resilience, Sourcing & Procurement, Digital Manufacturing, Warehouse Management, AI Driven Supply Chain, Green Supply Chain | Hermes Fulfilment: Parcel fulfillment site in Poland, IT target architecture, software selection | The Blackstone Group - BME Group: Mid-sized retail firms acquisition, supply chain synergies and efficiency enhancements |\n| Business Capability Management | Cyber Security | Cyber-attacks recovery, modern technology transition, standards alignment, Identity and Access Management (IAM) system deployment | Cyber Security Strategy, Cyber Security TOM & Governance, Processes & Methodology, Supporting Technologies, IAM Governance & Policies | ABB: Global IAM initiative, IAM capabilities development and implementation | Marquard & Bahls: Ransomware attack, IT systems shutdown, recovery phase supervision |\n| Enterprise, ERP & Cloud Architecture | Enterprise Architecture Management | Business or ITOM transformation, data center migration, complex IT landscape, system TCO or intricacies, IT systems adaptability, application portfolio overview and strategy | Maturity Assessment & Capability Building, Enterprise Technology Architecture Assessment, Operations support (EAaaS) | TÜV Süd: Customer experience E2E structure, enterprise architectural roadmap | Umicore: Cloud strategy and service operational model, vendor & hyperscaler selection |\n| Enterprise, ERP & Cloud Architecture | ERP & Application Transformation | ERP support end, ERP landscape consolidation, hosting model choice, ERP roadmap, ERP template creation, ERP program perspective, program or project management enhancement | ERP Selection & Strategy, Resource Readiness & RFP, Business Processes, Transformation Office, Enterprise Value Case, Quality Assurance | Essity: Digital evolution, customer and consumer offerings fortification, cost savings, working capital optimization | AGCO: Universal EAS group setup, project delivery refinement |\n| Enterprise, ERP & Cloud Architecture | Cloud Transformation | Cloud strategy and vision, cloud transformation roadmap, communication strategy, IT/Operating Model, compliance and governance framework, cloud migration workload, cloud initiatives success monitoring, cloud resources usage | Stabilize operations, Monitor success and usage, Nurture community, Plan for improvements, Drive user adoption, Ensure compliance & establish governance, Implement technical services, Define or refine vision of future work, Define a strategy, Calculate benefits and business case, Create a roadmap, Industrialize rollouts, Plan for user adoption, compliance & governance | Umicore: Future Hybrid Cloud Strategy, vendor selection, Cloud migration | Stada AG: Future data center and cloud strategy, vendor selection, transition to the cloud preparation |\n"
         }
      ],
      "syncGlobalConfig":false,
      "modelConfig":{
         "model":"gpt-4-turbo-preview",
         "temperature":0.5,
         "top_p":1,
         "max_tokens":4000,
         "presence_penalty":0,
         "frequency_penalty":0,
         "sendMemory":true,
         "historyMessageCount":40,
         "compressMessageLengthThreshold":99000,
         "enableInjectSystemPrompts":true,
         "template":"{{input}}"
      },
      "lang":"en",
      "builtin":false,
      "createdAt":1698310196031,
      "hideContext":false
   },
   {
      "avatar":"1f3e2",
      "name":"AdEx - Service Portfolios (long version)",
      "context":[
         {
            "id":"3Ya51EWHehNF_Cuu1bnUW",
            "date":"",
            "role":"system",
            "content":"| Service Cluster          | Service Portfolio              | Typical Client Situation                                                                                                    | Key Offerings                                                                                                               | Reference 1                                                                                                                                                                                                                                                               | Reference 2                                                                                                                                                                                                                                                               |\n|--------------------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| Transformation Management | Holistic Transformation Management | New/changed business strategy, new business model, inorganic growth, focus on core competencies, need for business restructuring | Holistic Transformation Management, including meta management, business value and risk management | Marquard & Bahls: Transformation from centralized to decentralized structure, with AdEx providing transformation management and support for IT separation and renewal | AGCO: Development of a platform strategy for B2B and B2C business models, with AdEx involved in business strategy development and implementation partner selection |\n| Business Strategy & Model | Mergers & Acquisitions | Industrialization or acceleration of M&A/carve-out processes, due diligence, post-merger integration, carve-out | Pre-deal, deal execution, and post-deal services | Philips (Carve-out): Led IT workstream for Day 1 realization, with AdEx ensuring delivery on time and within budget | DHV Plus (Integration Strategy): Validated guiding principles and identified value drivers of the integration, with AdEx elaborating degree of integration and preparing integration blueprint |\n| Business Strategy & Model | Sustainability | Desire to become more sustainable, compliance with regulatory requirements, ESG data value management, crafting a sustainability strategy, organizational development needs | Evaluation, reporting, planning, and implementation services related to sustainability | Sartorius: Initiated an ESG Data Management Program, with AdEx overseeing program management | OTTO: Devised a sustainability strategy, with AdEx executing strategic workshops and introducing a blueprint for organizational development |\n| Information Technology | IT Transformation | Management staff changes, cost/efficiency considerations, business complaints, IT external impacts, complex IT governance, M&A considerations, desire to increase IT maturity, negative outcomes from IT assessments, need for ongoing improvement, security challenges, transition to next-generation technologies | Service provider (IT execution), business enabler (IT agility), and business innovator (IT innovation) services | Versuni: Spearheaded the IT transformation as part of a broader business transformation, with AdEx accomplishing migration of global applications to the cloud | etex: Formulated and implemented an IT strategy, with AdEx placing emphasis on IT value creation and achieving substantial cost savings |\n| Data Value Management | Data Value Management | Potential for data value discovery and capitalization, non-data-centric decision-making, lack of a clear data strategy, inability to control and extract value from data, disorganized data platforms, data quality issues | Data-driven business models, data monetization strategy, data strategy, data-driven company, and data literacy & culture services | Marquard & Bahls: Creation of a comprehensive Master Data Governance strategy, with AdEx's knowledge in Master Data Governance ensuring a uniform approach | Novartis: Strategy formulation and prioritization for the establishment of a new data analytics unit, with AdEx conceiving a concrete data approach and organizing projects in alignment with goals |\n| People & Organization | Employee Centricity | Need for employee-centric transformation, improving employee experience and engagement, talent management challenges, insights into future skill requirements, lack of recognition for HR services, need for diversity initiatives | Employee-centric transformation, talent management, diversity, employee experience, employee insights, HR services | B/S/H/: Enabled employees to act as catalysts for digitization and revamped career framework, with AdEx helping to lay out clear skill and career trajectories | AdEx Partners: Evolved HR into an open entity, focusing on employee experience and placing HR at the C-level, with the company boasting an almost negligible attrition rate |\n| People & Organization | Organization Transformation | Need for organizational change, challenges in organizational design and operating models, lack of organizational agility, leadership and culture issues, outdated work methodologies, need for change management | Organizational transformation, org. design & operating model, future of work, organizational agility, leadership & culture, change management services | B/S/H/: Integration of 5 business and IT sectors to become a nimble digital entity, promoting agile operations, with AdEx helping to reduce hierarchical layers | AGCO: Integration of all team units into a singular entity, with AdEx helping to amplify product-to-market efficiency and hone focus on client requisites |\n| Business Capability Management | Finance Transformation | Desire for the organization to provide Finance services efficiently. Uncertainty about presenting the correct data to clients promptly. Awareness of the need for change in the planning process but uncertainty about the optimal approach. Aspiration for automation in finance operations, yet unsure of the method. Emphasis on prompt and superior-quality closure. | Plan, Budget & Forecast, Transactional Processing, Close & Consolidation, Reporting & Analytics, Organization & People, Governance, Systems & Tools, Data Management | Siemens Energy: Development of a comprehensive controlling concept and implementation in SAP SAC. AdEx Added Value: Emphasis on proficient project management and functional skillsets, a practical, hands-on approach, and rapid concept realization and deployment. | Marquard & Bahls: Facilitated client in a segmentation or \"split/Crave Out\" across various financial operations and spearheaded the integration of avant-garde financial solutions. AdEx Added Value: Oversight of both program and project management throughout the entire carve-out initiative. |\n| Business Capability Management | Customer Centricity | As products and services become more alike and barriers to switching decline, customers increasingly seek personalized, consistent experiences across all channels. Businesses need to adopt a tailored, omni-channel customer approach while still focusing on broader objectives and performance targets. Having clear CRM and company goals, such as revenue growth, reduced customer churn, and operational efficiency, are crucial in this balancing act. For differentiation, companies should prioritize exceptional service, meaningful engagement, and individualized customer support. | CRM Selection & Strategy, Marketing, Customer Journey Mgmt, Loyalty Management, Sales, Service | Fendt: Gaining an in-depth understanding of its customer journey. AdEx Added Value: Supplied a globally aligned blueprint of Fendt’s customer journey. | Novartis: Creating a CRM system to serve Healthcare Professionals and patients. AdEx Added Value: Undertook leadership roles for the Salesforce Program Management. |\n| Business Capability Management | Supply Chain | Client aims to expand business; supply chain and logistics adaptations are required in terms of depth and/or capacity. Clients with growth through M&A require supply chain enhancements. Increasing business efficiency through digital means is sought after, especially when a threshold in SCM has been reached. Clients aim to decrease their CO2 footprint. | Analysis, Design, Realization Steering, Product Eco System Transformation, Integrated Business Planning, Transparency & Resilience, Sourcing & Procurement, Digital Manufacturing, Warehouse Management, AI Driven Supply Chain, Green Supply Chain | Hermes Fulfilment: A new parcel fulfillment site was conceptualized and executed in Poland. AdEx Added Value: Determining IT target architecture and selecting the appropriate software. | The Blackstone Group - BME Group: The client acquired multiple mid-sized retail firms aiming to realize synergies and efficiency enhancements in the supply chain. AdEx Added Value: Assumed control of the IT segment, transitioning the project status from red to green within a span of three months. |\n| Business Capability Management | Cyber Security | Clients affected by cyber-attacks may require assistance in recovery and fortifying security to deter future occurrences. Transitioning to modern technology or the cloud necessitates the incorporation of cyber security measures. Clients require assistance to align with standards such as ISO 27001, BAIT, VAIT. For clients facing escalating security threats, it's crucial to deploy a robust Identity and Access Management (IAM) system. | Cyber Security Strategy, Cyber Security TOM & Governance, Processes & Methodology, Supporting Technologies, Identity and Access Management Governance & Policies | ABB: ABB embarked on a global IAM initiative to develop and implement Identity and Access Management capabilities. AdEx Added Value: Took charge of the entire endeavor from the project's inception to tool selection, going live, and the rollout phase. | Marquard & Bahls: Suffered a ransomware attack, leading to the shutdown of all IT systems. AdEx Added Value: Spearheaded the recovery phase and supervised various streams aimed at restoring the technical setup and the workplace environment. |\n| Enterprise, ERP & Cloud Architecture | Enterprise Architecture Management | Clients are in the process of planning or executing a business or ITOM transformation program. Clients are planning or executing a data center migration initiative. Presence of a complex, historically developed IT landscape exerting pressure to diminish TCO or system intricacies. The current IT systems are lagging in adaptability to rapidly exploit new business opportunities. There is a limited overview, and an absent strategy, aiming at a long-term application portfolio. | Maturity Assessment & Capability Building, Enterprise Technology Architecture Assessment, Operations support (EAaaS) | TÜV Süd: Architect the end-to-end (E2E) structure for the domain of customer experience. AdEx Added Value: Devised an integrated approach to the customer experience with an enterprise architectural roadmap. | Umicore: Outline the cloud strategy and the required service operational model. AdEx Added Value: Swift vendor & hyperscaler selection process. |\n| Enterprise, ERP & Cloud Architecture | ERP & Application Transformation | The present ERP will soon no longer have support; transitioning to a new Product/Version is necessary. A need to consolidate an existing multifaceted and diverse ERP landscape. Uncertainty surrounding the optimal hosting model choice and which transformation pathway to pursue. Expectations from senior leadership for an ERP roadmap that delivers tangible value. An ERP template must be created and subsequently launched. ERP project stakeholders seek an unbiased perspective on an ERP program currently in progress, and, contingent on the evaluation, might require enhancement support. An ERP initiative has veered off its intended course and necessitates remedial actions at either the program or project management echelons. | ERP Selection & Strategy, Resource Readiness & RFP, Business Processes, Transformation Office, Enterprise Value Case, Quality Assurance | Essity: Embarked on a digital evolution initiative aimed at fortifying customer and consumer offerings, realizing notable cost savings, and optimizing working capital. AdEx Added Value: Through the establishment and execution of the Digital Transformation Office tailored for Program Management. | AGCO: Set up a universal EAS group responsible for overseeing all projects associated with different SAP systems and modules. AdEx Added Value: Assisted the client in refining their project delivery, amplifying both its efficiency and quality. |\n| Enterprise, ERP & Cloud Architecture | Cloud Transformation | Absence of a cloud strategy and vision for a potential future work environment. The absence of a comprehensive high-level cloud transformation roadmap, a well-defined communication strategy, and a supportive IT/Operating Model hinders the effective implementation of the cloud transformation program. The lack of a robust compliance and governance framework makes it difficult to accurately identify and manage the workload required for a successful cloud migration execution. No well-defined concept or methodology in place to effectively monitor the success of cloud initiatives, which is essential for ensuring long-term, sustainable usage of cloud resources. | Stabilize operations, Monitor success and usage, Nurture community, Plan for improvements, Drive user adoption, Ensure compliance & establish governance, Implement technical services, Define or refine vision of future work, Define a strategy, Calculate benefits and business case, Create a roadmap, Industrialize rollouts, Plan for user adoption, compliance & governance | Umicore: AdEx supported Umicore by the definition of the future Hybrid Cloud Strategy in the context of customer requirements, accompanied the vendor selection process and managed the entire Cloud migration. AdEx Added Value: By leveraging our first-hand experience from various cloud providers, we have sped up the cloud provider selection which resulted in a 25% reduction in cloud costs following the migration. | Stada AG: AdEx Partners supported Stada AG during the definition of the future data center and cloud strategy along elaborated guidelines, supports vendor selection and prepares the transition to the cloud. AdEx Added Value: Bringing in an established approach of cloud strategy, tendering and technical cloud expertise. |"
         }
      ],
      "syncGlobalConfig":false,
      "modelConfig":{
         "model":"gpt-4-turbo-preview",
         "temperature":0.5,
         "top_p":1,
         "max_tokens":4000,
         "presence_penalty":0,
         "frequency_penalty":0,
         "sendMemory":true,
         "historyMessageCount":40,
         "compressMessageLengthThreshold":99000,
         "enableInjectSystemPrompts":true,
         "template":"{{input}}"
      },
      "lang":"en",
      "builtin":false,
      "createdAt":1698307329968,
      "hideContext":false
   },
   {
      "avatar":"1f3e2",
      "name":"AdEx Circumvent Limit of 4k Output-Tokens (despite 128k Input-Tokens @ \"GPT-4 Turbo\")",
      "context":[
         {
            "id":"SqeZ3I6qPU1vtGanCKfpz",
            "date":"",
            "role":"system",
            "content":"Aim to generate any output against below tasks by restricting yourself as follows:\n   - limit the output to a maximum of 2000 words or 4000 tokens\n   - output should, however, be without summarizing or reducing the content of the original\n   - to limit the output, no additional formatting should be done\n   - when the user messages \"continue,\" resume the output from the point where the last output ended\n   - the user should only after all individual outputs, achieve the actual, whole result by combining them, but should not have to do any further formatting"
         },
         {
            "id":"BDw0NIIwXb-Cb7TExkCnT",
            "date":"11/21/2023, 8:17:33 AM",
            "role":"user",
            "content":"Your task:\n   * use the text I will paste underneeth headline \"## Input\" (below)\n   * perform the task described underneeth a headline \"## Task\" (below)\n\n>   _Instruction for the user_:\n>   ```\n>   ## Task\n>   (describe your task to GPT here - like 'translate the text under ## Input to German )\n>   \n>   ## Input\n>   (copy/paste your input here - like original articles, complex inputs, ...)\n>   ```"
         }
      ],
      "syncGlobalConfig":false,
      "modelConfig":{
         "model":"gpt-4-turbo-preview",
         "temperature":0.5,
         "top_p":1,
         "max_tokens":4001,
         "presence_penalty":0,
         "frequency_penalty":0,
         "sendMemory":true,
         "historyMessageCount":40,
         "compressMessageLengthThreshold":99000,
         "enableInjectSystemPrompts":true,
         "template":"{{input}}"
      },
      "lang":"en",
      "builtin":false,
      "createdAt":1700550989007
   }

];
