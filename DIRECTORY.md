aditya-and-aditya/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── chat/
│   │   │   └── route.ts              # AI chatbot endpoint
│   │   ├── generate-faq/
│   │   │   └── route.ts              # AI FAQ generation
│   │   └── analyze-fit/
│   │       └── route.ts              # Service recommendation AI
│   │
│   ├── _components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── AIGeneratedFAQ.tsx    # Dynamic FAQ section
│   │   │   ├── CaseStudies.tsx       # AI-enhanced case studies
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatWidget.tsx        # Floating chatbot widget
│   │   │   ├── ChatInterface.tsx     # Chat UI
│   │   │   ├── MessageBubble.tsx
│   │   │   ├── ServiceRecommendation.tsx  # AI suggestions
│   │   │   └── LeadCapture.tsx       # Captures info during chat
│   │   │
│   │   └── forms/
│   │       └── ContactForm.tsx
│   │
│   ├── _lib/
│   │   ├── utils.ts
│   │   ├── validations.ts
│   │   ├── constants.ts
│   │   ├── ai/
│   │   │   ├── openai.ts             # OpenAI/GPT config
│   │   │   ├── prompts.ts            # System prompts for chatbot
│   │   │   ├── faq-generator.ts      # FAQ generation logic
│   │   │   ├── lead-qualifier.ts     # Lead scoring AI
│   │   │   └── service-matcher.ts    # Matches client needs to services
│   │   │
│   │   └── data/
│   │       ├── services.ts           # Service catalog for AI
│   │       ├── case-studies.ts       # Case study data
│   │       └── pricing-tiers.ts      # Pricing info for chatbot
│   │
│   ├── _hooks/
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useChat.ts                # Chat state management
│   │   └── useLeadQualification.ts   # Track qualification score
│   │
│   ├── _types/
│   │   └── index.ts                  # Chat, Lead, Service types
│   │
│   └── _styles/
│       ├── animations.css
│       └── chatbot.css               # Chatbot-specific styles
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   ├── projects/
│   │   └── chatbot-avatar.svg        
│   └── icons/
│
├── .env.local                        
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
