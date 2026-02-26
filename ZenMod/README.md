# ZenMod.ai

**Transform web designs and ideas into production-ready React applications through conversational AI interactions.**

---

## Overview

ZenMod.ai is an intelligent AI-powered development platform that enables users to rapidly prototype, design, and deploy React applications through natural language conversations. The platform leverages advanced large language models, cloud-based sandboxes, and real-time code execution to bridge the gap between design vision and production implementation.

---

## Technology Stack

### Frontend & UI
![Next.js](https://img.shields.io/badge/Next.js-15.4-000000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge)

### AI & Language Models
![Anthropic Claude](https://img.shields.io/badge/Claude-Sonnet-8B5CF6?style=for-the-badge)
![OpenAI GPT](https://img.shields.io/badge/OpenAI-GPT--5-412991?style=for-the-badge)
![Groq](https://img.shields.io/badge/Groq-LLM-FF6B35?style=for-the-badge)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge)
![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI-5.0-000000?style=for-the-badge)

### Backend & Runtime
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js)
![E2B Sandbox](https://img.shields.io/badge/E2B-Sandbox-FF6B35?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)

### Database & Storage
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)
![Supabase](https://img.shields.io/badge/Supabase-Auth_DB-3ECF8E?style=for-the-badge&logo=supabase)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-3ECF8E?style=for-the-badge)

### Integrations & Services
![GitHub API](https://img.shields.io/badge/GitHub-API-181717?style=for-the-badge&logo=github)
![Firecrawl](https://img.shields.io/badge/Firecrawl-Web_Scraping-000000?style=for-the-badge)
![Paystack](https://img.shields.io/badge/Paystack-Payments-1F1F1F?style=for-the-badge)
![Flutterwave](https://img.shields.io/badge/Flutterwave-Payments-0066CC?style=for-the-badge)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (Browser)                  │
│  Next.js UI + React Components + Framer Motion Animations   │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/WebSocket
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Layer (Next.js)                       │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Route Handlers & Server Actions                         ││
│  │ - /api/generate-ai-code-stream (Streaming)             ││
│  │ - /api/create-ai-sandbox (Sandbox provisioning)        ││
│  │ - /api/scrape-url-enhanced (Web scraping)              ││
│  │ - /api/apply-ai-code (Code application)                ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Middleware & Authentication                             ││
│  │ - Supabase Auth Integration                             ││
│  │ - Session Management                                    ││
│  │ - Error Handling & Development Mode                     ││
│  └─────────────────────────────────────────────────────────┘│
└────────────┬─────────────────┬──────────────┬───────────────┘
             │                 │              │
      ┌──────▼──────┐  ┌──────▼──────┐  ┌───▼──────────┐
      │ AI Services  │  │ Sandbox     │  │ External     │
      │              │  │ Runtime     │  │ Services     │
      │ - Claude     │  │             │  │              │
      │ - GPT        │  │ E2B Cloud   │  │ GitHub API   │
      │ - Groq       │  │ Environments│  │ Firecrawl    │
      │ - Gemini     │  │             │  │ Supabase     │
      └──────────────┘  │ - Vite Dev  │  │ Paystack     │
                        │ - Node.js   │  │ Flutterwave  │
                        │ - File Sys  │  └──────────────┘
                        └─────────────┘
                             │
      ┌──────────────────────▼────────────────────────┐
      │         Data & Persistence Layer              │
      │ ┌────────────────────────────────────────────┐│
      │ │ PostgreSQL via Supabase                    ││
      │ │ - User Profiles & Auth                     ││
      │ │ - Conversation History                     ││
      │ │ - Project Records                          ││
      │ │ - Subscription Data                        ││
      │ └────────────────────────────────────────────┘│
      └─────────────────────────────────────────────────┘
```

---

## Core Features

### 1. Conversational App Generation

Users interact with an advanced AI through a chat interface to describe their application requirements. The AI generates production-ready React code in real-time using streaming responses. The code is automatically applied to a live sandbox environment with instant preview updates.

**Key Components:**
- Multi-turn conversation memory
- Context-aware code generation
- Real-time streaming responses
- Architectural planning & code organization

### 2. AI-Powered Code Editing

Beyond initial generation, users can iteratively refine their applications through natural language commands. The AI performs surgical edits to existing code, understands project context, and suggests improvements.

**Capabilities:**
- Targeted code modifications
- File-aware editing with search
- Dependency management
- Style and layout adjustments

### 3. Sandbox Environment

Every project runs in an isolated, cloud-based E2B sandbox with complete filesystem access. The sandbox executes a Vite development server for React applications, enabling real-time preview and hot module reloading.

**Sandbox Features:**
- Automatic Vite React app scaffolding
- Tailwind CSS with PostCSS support
- Live development server (port 5173)
- 15-minute timeout with extension capability
- Multi-language support (Node.js, Python, etc.)

### 4. Website Cloning & Recreation

Users can provide any website URL, which the platform scrapes to understand the design and structure. The AI then recreates the website as a modern React application with improved code quality and performance.

**Process:**
- URL-based web scraping with Firecrawl
- Screenshot capture for visual analysis
- HTML/CSS extraction and analysis
- React component recreation
- Modern styling with Tailwind CSS

### 5. GitHub Integration

Seamless integration with GitHub enables users to import existing repositories for modification or export their generated projects for version control and deployment.

**Integrations:**
- OAuth authentication via GitHub
- Repository import and cloning
- Code export and push capabilities
- Collaboration features
- Version control workflow compatibility

### 6. Subscription & Monetization

Built-in payment processing with Paystack and Flutterwave enables the platform to offer tiered subscription plans with usage limits, premium features, and API access.

**Monetization Features:**
- Multiple subscription tiers
- Usage tracking and limits
- Premium feature gating
- Payment processing & webhooks
- Subscription management

---

## System Architecture Details

### Request Flow: Code Generation

```
1. User Input (Chat Message)
        ↓
2. /api/generate-ai-code-stream
        ├─ Authentication & Authorization
        ├─ Conversation History Retrieval
        ├─ Context Window Optimization
        ├─ File/Manifest Retrieval
        └─ Prompt Construction
        ↓
3. AI Model Selection & Streaming
        ├─ Model Router (Groq/OpenAI/Claude/Gemini)
        ├─ System Prompt Injection
        ├─ Token Streaming
        └─ Real-time Response Handling
        ↓
4. Code Extraction & Parsing
        ├─ File Boundary Detection (<file> tags)
        ├─ Metadata Extraction
        ├─ Validation & Security Checks
        └─ Syntax Verification
        ↓
5. Sandbox Application
        ├─ File Write Operations
        ├─ Package.json Updates
        ├─ Dependency Resolution
        └─ Browser Hot Reload Trigger
        ↓
6. Response Streaming
        ├─ SSE (Server-Sent Events)
        ├─ Progress Events
        ├─ Error Handling
        └─ Client UI Updates
```

### Sandbox Lifecycle

```
CREATE REQUEST
        ↓
PROVISION E2B SANDBOX
        ├─ API Key Authentication
        ├─ Compute Resource Allocation
        ├─ Environment Initialization
        └─ Host URL Generation: https://{port}-{sandboxId}.e2b.app
        ↓
SETUP REACT ENVIRONMENT
        ├─ Clone Base Vite Template
        ├─ Install Dependencies (npm install)
        ├─ Configure Tailwind CSS
        └─ Setup PostCSS
        ↓
START DEVELOPMENT SERVER
        ├─ Launch Vite dev server (port 5173)
        ├─ Configure HMR (Hot Module Reload)
        ├─ Health Check Verification
        └─ CSS Pipeline Initialization
        ↓
READY FOR FILE UPDATES
        ├─ Monitor for file changes
        ├─ Apply code modifications
        ├─ Trigger browser refresh
        └─ Stream console output
        ↓
CLEANUP & TIMEOUT
        ├─ 15-minute inactivity timeout
        ├─ Resource deallocation
        └─ Sandbox termination
```

---

## Project Structure

```
ZenMod.ai/
├── app/
│   ├── api/
│   │   ├── generate-ai-code-stream/      # Main code generation endpoint
│   │   ├── create-ai-sandbox/            # Sandbox provisioning
│   │   ├── scrape-url-enhanced/          # Web scraping service
│   │   ├── restart-vite/                 # Sandbox server control
│   │   ├── apply-ai-code/                # Code application
│   │   └── ...other endpoints
│   ├── auth/                              # Authentication pages
│   ├── dashboard/                         # User dashboard
│   ├── page.tsx                           # Main application UI
│   ├── layout.tsx                         # Root layout
│   └── globals.css                        # Global styles
│
├── components/
│   ├── SandboxPreview.tsx                 # Sandbox iframe viewer
│   ├── ChatInterface.tsx                  # Conversation UI
│   ├── CodeApplicationProgress.tsx        # Generation progress
│   ├── HMRErrorDetector.tsx              # Hot reload errors
│   ├── theme-provider.tsx                 # Theme management
│   └── ...other components
│
├── lib/
│   ├── context-selector.ts                # Context window management
│   ├── edit-intent-analyzer.ts           # AI edit understanding
│   ├── file-parser.ts                     # Code file parsing
│   ├── file-search-executor.ts           # File search logic
│   ├── edit-examples.ts                   # Example-based learning
│   ├── github.ts                          # GitHub API client
│   ├── utils.ts                           # Utility functions
│   ├── agent/
│   │   ├── agent-service.ts              # Agentic workflow
│   │   ├── llm-client.ts                 # LLM interaction
│   │   ├── agent-store.ts                # Agent state
│   │   └── types.ts                      # Type definitions
│   ├── supabase/                          # Supabase clients
│   └── db/                                # Database queries
│
├── config/
│   └── app.config.ts                      # Application configuration
│
├── types/
│   ├── conversation.ts                    # Conversation types
│   ├── file-manifest.ts                   # File system types
│   ├── sandbox.ts                         # Sandbox types
│   └── external-modules.d.ts             # Module declarations
│
├── middleware.ts                          # Request middleware
├── next.config.ts                         # Next.js configuration
├── tailwind.config.ts                     # Tailwind configuration
├── drizzle.config.ts                      # Database configuration
├── tsconfig.json                          # TypeScript configuration
├── package.json                           # Dependencies
└── .env.local                             # Environment variables
```

---

## Key Implementation Details

### Multi-Model AI Router

The platform supports multiple AI providers with intelligent routing:

- **Groq (Recommended):** Ultra-low latency via Groq's LPU inference
- **OpenAI:** Industry-standard GPT models for production quality
- **Anthropic Claude:** Advanced reasoning and complex tasks
- **Google Gemini:** Multimodal capabilities and cost efficiency

Model selection is configurable per request, enabling cost optimization and model-specific feature usage.

### Context Window Management

The system intelligently manages LLM context windows through:

- **Conversation History Truncation:** Maintains only relevant message pairs
- **File Content Filtering:** Includes only modified/relevant files
- **Token Counting:** Tracks input/output tokens for cost estimation
- **Manifest Caching:** Speeds up subsequent requests

### Error Recovery & Development Mode

Built-in resilience for development and production scenarios:

- **Supabase Fallback:** In-memory state when database is unreachable
- **Auth Bypass:** Development mode bypasses authentication for testing
- **Health Checks:** Automatic verification of sandbox server readiness
- **Graceful Degradation:** Continues operation with reduced functionality

### Real-Time Preview System

The sandbox preview system enables live updates through:

- **Iframe Integration:** Native browser iframe with proper sandbox attributes
- **Hot Module Reloading:** Vite's HMR keeps preview in sync with code
- **Manual Refresh:** User-triggered refresh with cache busting
- **Error Reporting:** Console output tunneling to browser

---

## Environment Configuration

### Required Variables

```env
# Sandbox & Code Execution
E2B_API_KEY=your_e2b_api_key

# Web Scraping
FIRECRAWL_API_KEY=your_firecrawl_key

# AI Providers (at least one required)
GROQ_API_KEY=your_groq_key
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
GEMINI_API_KEY=your_gemini_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
DATABASE_URL=postgresql://user:password@host/db

# Payments
PAYSTACK_SECRET_KEY=your_paystack_key
FLUTTERWAVE_SECRET_KEY=your_flutterwave_key

# GitHub
GITHUB_APP_ID=your_app_id
GITHUB_APP_SECRET=your_app_secret

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

---

## Installation & Setup

### Prerequisites

- Node.js 20+
- npm or pnpm
- PostgreSQL database (via Supabase)
- API keys for at least one AI provider

### Development Setup

```bash
# Clone repository
git clone https://github.com/ravikrishnaj25/ZenMod.git
cd ZenMod

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev

# Access application
# Navigate to http://localhost:3000
```

### Database Setup

```bash
# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate
```

### Production Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Alternative: Deploy to Vercel
vercel deploy
```

---

## Testing

The project includes comprehensive test suites:

```bash
# Run all tests
npm run test:all

# Specific test suites
npm run test:integration    # E2B sandbox integration
npm run test:api           # API endpoints
npm run test:code          # Code execution
```

---

## Performance Considerations

### Optimization Strategies

- **Turbopack:** Next.js Turbopack for 5x faster builds
- **Streaming:** SSE streaming for real-time updates
- **Edge Caching:** CloudFlare/CDN integration ready
- **Database Indexing:** Optimized Postgres queries
- **AI Provider Selection:** Cost vs. speed tradeoffs

### Scalability

- **Horizontal Scaling:** Stateless API design
- **Load Balancing:** Ready for NGINX/HAProxy
- **Database Replication:** Supabase handles read replicas
- **Sandbox Distribution:** E2B handles multi-region provisioning

---

## Security Features

- **Authentication:** OAuth 2.0 via Supabase
- **Authorization:** Role-based access control
- **Secrets Management:** Environment variable isolation
- **Sandbox Isolation:** Each environment is isolated
- **CSRF Protection:** Next.js built-in protection
- **XSS Prevention:** React sanitization

---

## Contributing

Contributions are welcome. Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Support & Documentation

- **Issues:** GitHub Issues for bug reports
- **Discussions:** GitHub Discussions for feature requests
- **Email:** support@zenmod.ai
- **Documentation:** Full API docs available in `/docs`

---

## Roadmap

- Phase 1: Core generation & editing (Current)
- Phase 2: Component library marketplace
- Phase 3: Team collaboration features
- Phase 4: Mobile app generation
- Phase 5: Advanced analytics & monitoring

---

**Version:** 0.5.0-beta | **Last Updated:** February 2026

