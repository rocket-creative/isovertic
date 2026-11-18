export type RewriteSection = { label: string; id?: string; h2: string; body?: readonly string[]; items?: readonly string[]; cards?: readonly {title:string; body:string; items?:readonly string[]; href?:string}[]; link?:string; linkText?:string };
export type RewritePage = {title:string;description:string;eyebrow:string;h1:string;lead:string;sections:readonly RewriteSection[];faqs?:readonly {q:string;a:string}[]};
export const rewrite: Record<string, RewritePage> = {
  "home": {
    "title": "Business Development and Technology | ISOVERTIC",
    "description": "ISOVERTIC helps scientific and technical businesses grow, modernize, and work more efficiently through websites, business development, and custom software.",
    "eyebrow": "Business development and technology",
    "h1": "Grow your business. Improve how it runs.",
    "lead": "Your business needs to explain complex work, reach the right buyers, and keep the work moving once they say yes. ISOVERTIC brings business development and technology together to help you do all three.",
    "sections": [
      {
        "label": "Start here",
        "h2": "A stronger website, starting at $5,000.",
        "body": [
          "Give buyers a clear picture of what you do and a practical way to take the next step. We plan and build websites around your services, your audience, and the questions that matter before someone contacts you.",
          "Website projects start at $5,000 for an agreed scope. Page count, content, integrations, and launch requirements shape the final proposal. Hosting and ongoing services are scoped separately."
        ],
        "link": "/pricing",
        "linkText": "See how projects are scoped"
      },
      {
        "label": "What we do",
        "h2": "Three ways to move the business forward.",
        "cards": [
          {
            "title": "Build your presence",
            "body": "Websites, branding, and search visibility that help people understand your business and find the right next step.",
            "items": [
              "Website strategy, copy, design, and development",
              "Brand messaging and visual identity",
              "Search and AI visibility reviews"
            ],
            "href": "/services#presence"
          },
          {
            "title": "Grow your business",
            "body": "Connect your message, campaigns, and sales follow-up so the right prospects have a reason to talk to you.",
            "items": [
              "Lead generation and targeted outreach",
              "Advertising and campaign landing pages",
              "Sales content and follow-up support"
            ],
            "href": "/services#growth"
          },
          {
            "title": "Improve your operations",
            "body": "Replace repetitive steps and disconnected tools with software and workflows built around how your team works.",
            "items": [
              "Custom software and internal tools",
              "Practical AI applications with human review",
              "Workflow automation and system integrations"
            ],
            "href": "/services#operations"
          }
        ]
      },
      {
        "label": "Who we help",
        "h2": "Scientific depth. A broader business perspective.",
        "body": [
          "Life sciences is a core strength. We understand the care needed to explain research products and technical services to people who know their subject.",
          "We also work with technical and service businesses whose challenges extend beyond marketing. You may need a clearer website, a better sales process, or a way to move information from the field to the office without entering it twice.",
          "The starting point is your business problem. We recommend the work that addresses it, whether that is one focused project or ongoing support."
        ]
      },
      {
        "label": "How we work",
        "h2": "Start with the bottleneck.",
        "cards": [
          {
            "title": "Understand",
            "body": "We look at what you sell, who buys it, how your team works, and where progress slows down."
          },
          {
            "title": "Scope",
            "body": "We agree on deliverables, responsibilities, costs, and what a useful result looks like before work begins."
          },
          {
            "title": "Build and review",
            "body": "We develop the work with your input, check it against the scope, and make the handoff clear."
          }
        ]
      },
      {
        "label": "Choose your scope",
        "h2": "Buy the help you need.",
        "body": [
          "Services are available individually. Start with a website, a campaign, a visibility review, or an internal tool. Add related work when there is a reason to do it.",
          "An ongoing engagement can connect the pieces, but you do not need to purchase every service to work with us."
        ]
      },
      {
        "label": "Next step",
        "h2": "What needs to work better?",
        "body": [
          "Send us your website and the business problem you want to solve. If the issue is inside the business, describe the task your team repeats or the handoff that keeps breaking."
        ],
        "link": "/contact",
        "linkText": "Tell us about your project"
      }
    ],
    "faqs": [
      {
        "q": "Is ISOVERTIC a marketing agency or a technology company?",
        "a": "We combine business development and technology. That includes websites, branding, visibility, lead generation, advertising, sales support, custom software, AI applications, and workflow automation. The scope depends on the problem you need to solve."
      },
      {
        "q": "Do you only work with life science companies?",
        "a": "No. Life sciences is a primary strength, and we also work with other technical and service businesses. We first check whether our experience and the proposed work fit your needs."
      },
      {
        "q": "Can we hire you for just one service?",
        "a": "Yes. Services are available individually, with a written scope. A website project does not require a full business development engagement."
      },
      {
        "q": "What does a website cost?",
        "a": "Scoped website projects start at $5,000. The final price depends on the content, pages, functionality, integrations, and launch requirements. Hosting, maintenance, advertising, and other ongoing services are scoped separately."
      },
      {
        "q": "Do you guarantee leads or AI search rankings?",
        "a": "No. We agree on what we will build, manage, and measure. We do not promise a specific number of leads, sales, rankings, or mentions in AI answers."
      }
    ]
  },
  "services": {
    "title": "Websites, Business Development and Software | ISOVERTIC",
    "description": "Choose website and branding work, business development support, or custom software and automation. Services available individually.",
    "eyebrow": "Services",
    "h1": "The work your business needs next.",
    "lead": "Build a clearer presence. Reach more of the right prospects. Make everyday work easier to manage. Choose a focused project or connect several services in one scope.",
    "sections": [
      {
        "label": "Build",
        "id": "presence",
        "h2": "Build your presence.",
        "body": [
          "A technical buyer needs to understand what you offer, why it matters, and whether it fits their problem. Your website and brand should make those decisions easier.",
          "We connect the message, the design, and the technology so your site supports a real business purpose."
        ],
        "items": [
          "Websites: audience and page planning, copy, design, development, and an agreed launch checklist.",
          "Branding: positioning, service descriptions, visual direction, and consistent language across your materials.",
          "Search visibility: review the content and technical barriers that affect how your pages can be discovered and understood.",
          "AI visibility: examine how your business is represented in selected AI answers, check the supporting sources, and identify content gaps. Findings are snapshots, not guarantees of placement."
        ],
        "link": "/pricing",
        "linkText": "Website projects start at $5,000"
      },
      {
        "label": "Grow",
        "id": "growth",
        "h2": "Grow your business.",
        "body": [
          "A list of names is only a starting point. Buyers need a relevant reason to respond, and your team needs a clear next step when they do.",
          "We help connect the audience, the offer, and the follow-up. We define the intended buyer and qualification criteria with you rather than treating every contact as a sales opportunity."
        ],
        "items": [
          "Lead generation and outreach: audience research, relevant messaging, and a defined handoff to your team.",
          "Advertising: campaign planning, ad development, landing pages, and performance review.",
          "Sales support: presentations, service explanations, outreach copy, and follow-up materials.",
          "Content: technical and scientific explanations written for the people considering your offer.",
          "Measurement: reporting tied to the agreed objective, with limits and attribution made clear."
        ]
      },
      {
        "label": "Improve",
        "id": "operations",
        "h2": "Improve your operations.",
        "body": [
          "If a process depends on copying the same information between spreadsheets, messages, and software, more sales can create more work without making the business easier to run.",
          "We map the process before recommending a tool. Sometimes the right answer is a small integration. Sometimes it is a custom application. AI is useful where it can assist a defined task and its output can be checked."
        ],
        "items": [
          "Custom software: internal tools, client portals, and applications shaped around a specific workflow.",
          "Automation: connect systems, route tasks, reduce repeated data entry, and make handoffs easier to track.",
          "AI applications: assist with document processing, information retrieval, and routine drafting, with appropriate review.",
          "Implementation planning: agree on access, data handling, exceptions, testing, and support before deployment."
        ]
      },
      {
        "label": "An example",
        "h2": "From a field visit to an office follow-up.",
        "body": [
          "Illustrative workflow, not a completed client case study.",
          "For a refrigeration service business, a technician could record equipment details, readings, photographs, and recommended work during a visit. An internal tool could organize the information into a draft service report and route a quote request to the office.",
          "The office would review the output, confirm the details, and decide what to send. The purpose is a clearer handoff, not an autonomous technical or safety decision. Any actual project would need its own requirements and testing."
        ]
      },
      {
        "label": "Working together",
        "h2": "One service or a connected plan.",
        "body": [
          "You can engage us for a specific need without purchasing a package of unrelated services. We document what is included, who provides the inputs, and which decisions stay with your team."
        ],
        "link": "/contact",
        "linkText": "Describe the work you need"
      }
    ]
  },
  "pricing": {
    "title": "Website Projects Starting at $5,000 | ISOVERTIC",
    "description": "Scoped website projects start at $5,000. Branding, visibility, business development, software, and automation are available individually by proposal.",
    "eyebrow": "Project pricing",
    "h1": "Start with the scope. Know what you are buying.",
    "lead": "Website projects start at $5,000. Choose additional services around the needs of your business, rather than a package that assumes you need everything.",
    "sections": [
      {
        "label": "Websites",
        "h2": "Website projects starting at $5,000.",
        "body": [
          "The starting price applies to a defined website scope. We agree on the pages, content responsibilities, design work, functionality, and launch requirements in your proposal.",
          "A larger content library, custom integration, migration, application feature, or other additional requirement can change the price. We identify that work before you commit."
        ],
        "items": [
          "Your proposal sets the deliverables and review process.",
          "Hosting, maintenance, and ongoing work are scoped separately.",
          "Advertising spend and third-party software costs are identified separately where applicable.",
          "No purchase or recurring payment is started from this review draft."
        ]
      },
      {
        "label": "Individual services",
        "h2": "Add the work that makes sense.",
        "cards": [
          {
            "title": "Presence and visibility",
            "body": "Branding, content, search reviews, and AI visibility work, scoped to your audience and current site."
          },
          {
            "title": "Business development",
            "body": "Lead generation, advertising, outreach, and sales support, scoped to the campaign and level of involvement."
          },
          {
            "title": "Technology and operations",
            "body": "Custom software, AI applications, and workflow automation, scoped after we understand the process and systems."
          }
        ]
      },
      {
        "label": "Before the proposal",
        "h2": "A few details make pricing useful.",
        "items": [
          "What do you want the project to change?",
          "What exists today, and what can we keep?",
          "Who will supply and approve the content?",
          "Which systems need to connect?",
          "What needs ongoing support after the project?"
        ],
        "body": [
          "Send us what you know. We will use it to define the work and identify the decisions that affect cost."
        ],
        "link": "/contact",
        "linkText": "Request a scoped proposal"
      }
    ],
    "faqs": [
      {
        "q": "Is $5,000 an all-inclusive price for any website?",
        "a": "No. It is the starting price for an agreed website scope. Your proposal identifies the included work and any additional requirements."
      },
      {
        "q": "Is hosting included?",
        "a": "Hosting and ongoing support are scoped separately. We will specify the arrangement and cost in the proposal."
      },
      {
        "q": "Do you offer services individually?",
        "a": "Yes. You can hire us for a website, branding, visibility work, business development support, or a software and automation project."
      },
      {
        "q": "Are monthly packages available?",
        "a": "Ongoing support can be discussed as part of your scope. Recurring prices and terms are not published in this draft because they have not been finalized."
      }
    ]
  },
  "about": {
    "title": "About ISOVERTIC | Business Development and Technology",
    "description": "ISOVERTIC brings scientific understanding, business development, and software engineering together for scientific, technical, and service businesses.",
    "eyebrow": "About ISOVERTIC",
    "h1": "Understand the business. Build what helps.",
    "lead": "ISOVERTIC brings business development and technology together for companies with complex offerings and practical problems to solve.",
    "sections": [
      {
        "label": "Perspective",
        "h2": "The message and the system belong in the same conversation.",
        "body": [
          "Your website shapes how a buyer understands you. Your sales process shapes what happens next. Your internal systems shape how well your team can deliver.",
          "We work across those areas so the recommendation can follow the problem. That might mean a clearer service page, a targeted campaign, or software that removes a repeated task."
        ]
      },
      {
        "label": "Scientific understanding",
        "h2": "Technical work deserves an accurate explanation.",
        "body": [
          "Our background brings together molecular biology, translational research products, and software engineering. That combination is especially useful in life sciences, where the details of an offering matter to the buyer.",
          "We carry that same care into other technical and service businesses. We ask questions, check the language, and work with your subject matter experts rather than making claims your evidence cannot support."
        ]
      },
      {
        "label": "The team",
        "h2": "George Stoff and Kristen Coughlin.",
        "cards": [
          {
            "title": "George Stoff",
            "body": "Technology and development. George connects the business problem to the website, software, or workflow needed to address it."
          },
          {
            "title": "Kristen Coughlin",
            "body": "Business development and scientific communication. Kristen brings a molecular biology background and experience with translational research products to the message and the commercial conversation."
          }
        ]
      },
      {
        "label": "Working relationship",
        "h2": "Clear responsibilities. Useful work.",
        "body": [
          "We define the work with you, involve the people who understand the subject, and keep the scope visible as decisions are made. AI can assist the work, but it does not replace responsibility for checking it.",
          "You can start with a focused project and decide what support makes sense next."
        ],
        "link": "/contact",
        "linkText": "Talk through your project"
      }
    ]
  }
};

rewrite.contact = {
  "title": "Discuss Your Project | ISOVERTIC",
  "description": "Tell ISOVERTIC what you want to build, grow, or improve.",
  "eyebrow": "Start a conversation",
  "h1": "What would you like to change?",
  "lead": "Tell us about your business and the problem you want to solve. A website link, a rough brief, or an example of a repeated task is enough to begin.",
  "sections": [
    {
      "label": "Your brief",
      "h2": "Give us the starting point.",
      "items": [
        "What does your business do, and who do you serve?",
        "Do you need help with your presence, business development, or operations?",
        "What is not working as well as it should?",
        "What systems, content, or materials do you already have?",
        "Is there a target date or budget we should understand?"
      ],
      "body": [
        "Local review: the contact form and outgoing messages are disabled. The final inquiry workflow will be connected and tested before any launch."
      ]
    }
  ]
};
