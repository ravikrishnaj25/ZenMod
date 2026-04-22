# ⚡ ZenMod.ai

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.5.0--beta-blue)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)

**ZenMod.ai** is a high-performance, AI-driven platform designed to accelerate web development. By combining the power of Large Language Models (LLMs) with secure, isolated execution environments, ZenMod allows developers and entrepreneurs to build, test, and deploy React applications through a simple conversational interface.

---

## 🚀 Why ZenMod?

In a world where speed-to-market is critical, ZenMod bridges the gap between idea and implementation.

-   **Instant AI App Generation**: Describe your application in natural language and watch it come to life.
-   **Secure Sandbox Execution**: Leveraging **E2B**, every generated app runs in its own isolated environment, ensuring security and stability.
-   **Full-Stack Persistence**: Built-in integration with **Supabase** and **Drizzle ORM** for user data, conversation history, and project states.
-   **Seamless GitHub Integration**: Import existing repositories or export your AI-generated masterpieces directly to GitHub.
-   **Monetization Ready**: Integrated subscription workflows via **Paystack** and **Flutterwave** out of the box.
-   **Website Cloning**: Provide a URL and use AI to re-imagine or refactor existing web designs.

---

## 🛠️ Tech Stack

-   **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion, Radix UI.
-   **AI Infrastructure**: Vercel AI SDK with support for Anthropic (Claude), OpenAI (GPT-4o), Google (Gemini), and Groq (Llama 3).
-   **Backend & DB**: Supabase (Auth/Storage/DB), Drizzle ORM (PostgreSQL).
-   **Runtime**: [E2B](https://e2b.dev/) for sandboxed code execution.
-   **Payments**: Flutterwave & Paystack.

---

## 🏁 Getting Started

### Prerequisites

-   Node.js 20+
-   `pnpm` or `npm`
-   A [Supabase](https://supabase.com/) account
-   An [E2B](https://e2b.dev/) API key

### 1. Clone & Install

```bash
git clone https://github.com/call-meRavi-SHORT-CODE/ZenMod.git
cd ZenMod/ZenMod
pnpm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory. Use `.env.example` as a template:

```env
# Core AI & Sandbox
E2B_API_KEY=your_e2b_api_key
FIRECRAWL_API_KEY=your_firecrawl_api_key

# AI Providers (At least one required)
ANTHROPIC_API_KEY=your_anthropic_api_key
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
DATABASE_URL=your_postgres_connection_string

# Payments
PAYSTACK_SECRET_KEY=your_key
FLUTTERWAVE_SECRET_KEY=your_key
```

### 3. Database Setup

Initialize your schema using Drizzle:

```bash
pnpm run db:generate
pnpm run db:migrate
```

### 4. Start Developing

```bash
pnpm run dev
```

The application will be available at `http://localhost:3000`.

---

## 📖 Usage Examples

### Building a New Component
Simply prompt the AI:
> "Create a dashboard with a sidebar, a line chart for sales, and a dark mode toggle using Lucide icons."

### Exporting to GitHub
1. Connect your GitHub account in settings.
2. Click the **Export to GitHub** button once your app is ready.
3. ZenMod will create a new repository and push the generated code.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

1. Fork the repository.
2. Create a feature branch.
3. Submit a Pull Request.

---

## 🆘 Support

If you run into any issues or have questions:
-   Check out our [Documentation](docs/PACKAGE_DETECTION_GUIDE.md)
-   Open an [Issue](https://github.com/call-meRavi-SHORT-CODE/ZenMod/issues)
-   Join our community discord (Coming Soon)

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">Built with ❤️ by the ZenMod Team</p>
