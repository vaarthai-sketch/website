# Grace Fellowship Church Website

A polished, modern, responsive, and production-ready website built for **Grace Fellowship Church** using Next.js (App Router), TypeScript, and Tailwind CSS. The website prioritizes premium typography, warm organic aesthetics, WCAG accessibility compliance, and search engine optimization.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation
1. Navigate to the project directory:
   ```bash
   cd church-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

---

## 🛠️ Production Build & Verification

To verify or package the application for production delivery:

1. Compile and compile types check:
   ```bash
   npm run build
   ```
   All pages will be statically pre-rendered to HTML for immediate LCP load times.

2. Start the optimized production server locally:
   ```bash
   npm run start
   ```

---

## 📐 Project Structure

- `src/app/`: Next.js App Router folders representing individual pages and layouts:
  - `page.tsx`: Home Page (Hero, Sunday schedules, Featured sermon, Events list, Newsletter).
  - `about/page.tsx`: About (Story, mission, values, beliefs, staff profiles grid).
  - `plan-your-visit/page.tsx`: Guest guide, interactive RSVP form, and FAQ accordion.
  - `sermons/`: Sermon Library supporting searching, sorting, and filtering.
  - `ministries/`: Grid listing of 10 ministries with detailed inquiry cards.
  - `events/`: Upcoming events with grid/list toggling and categories chips.
  - `give/page.tsx`: Generosity callouts and mock financial portals.
  - `prayer/page.tsx`: Private prayer requests and urgent crisis warnings.
  - `contact/page.tsx`: Office hours, contact forms, and map embedding.
  - `privacy/`, `terms/`, `accessibility/`: Core legal and accessibility statements.
- `src/components/`: Reusable, fully accessible components (Button, cards, custom form inputs, schema generators, and custom social icons).
- `src/data/`: Centralized databases for easy management.

---

## 📝 Administrator Handoff (Replacements Guide)

Before final public launch, the church administrator must update the following details:

### 1. Church Details & Theme Settings
Open `src/data/config.ts` to adjust:
- Church name, address, services schedules, telephone, and email coordinates.
- Social media page links (YouTube, Instagram, Facebook).
- Primary and accent color parameters matching your church brand colors.

### 2. Media & Databases
- **Sermons:** Edit `src/data/sermons.ts` to add recent messages. Add a YouTube video ID to load actual sermon recordings.
- **Events:** Add upcoming calendar events in `src/data/events.ts`.
- **Leadership Team:** Update staff names, roles, bios, and image directories in `src/data/staff.ts`.
- **FAQ details:** Update visitor FAQs in `src/data/faqs.ts`.

---

## ☁️ Deployment to Vercel

The application is fully compatible with Vercel and can be deployed instantly:

1. Install the Vercel CLI locally (or connect your GitHub repository directly to the Vercel Dashboard):
   ```bash
   npm install -g vercel
   ```

2. Run the deployment setup from your project directory:
   ```bash
   vercel
   ```

3. Deploy to production:
   ```bash
   vercel --prod
   ```

---

## 🔗 Recommended Production Integrations

To make the website fully functional:
- **Giving Portal:** Replace the mock donor interface in `src/app/give/page.tsx` with code from Subsplash, Planning Center, or Stripe.
- **Form Endpoints:** Connect the Contact, Prayer, and guest RSVP form handlers to email endpoints (such as Formspree or AWS Gateway) to receive guest submissions in your inbox.
- **Media Files:** Replace the mock gradient cover illustrations with actual photographs of your sanctuary, congregation, and events.
