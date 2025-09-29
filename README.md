# Faith Vineyard Church Website

A modern, welcoming church website built with Next.js 15, featuring organic design, community focus, and dynamic content management.

## 🌟 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, TailwindCSS
- **Organic Design**: Warm, welcoming design perfect for unchurched families
- **Dynamic Events**: Notion API integration for event management
- **Contact Forms**: Formspree integration for easy communication
- **Mobile-First**: Fully responsive design optimized for all devices
- **Accessibility**: WCAG compliant with semantic HTML and proper ARIA labels
- **SEO Optimized**: Meta tags, sitemap, and robots.txt included

## 🎨 Design Philosophy

The website features an organic, warm, and relational design approach:

- **Colors**: Primary (#305070), Accent (#79C2F2), Secondary (#8BBF8F), Background (#fdfaf6)
- **Typography**: Museo900Sketch for headlines, Inter for body text
- **Style**: Sketch-inspired, non-corporate, community-focused
- **Tone**: Welcoming to unchurched families in Comber/Ards/North Down area

## 📁 Project Structure

\`\`\`
├── app/
│   ├── about/page.tsx           # About Us page
│   ├── compassion/page.tsx      # Compassion & Care page
│   ├── contact/page.tsx         # Contact Us page
│   ├── events/page.tsx          # Events page (Notion integration)
│   ├── gatherings/page.tsx      # Gatherings/Services page
│   ├── components/              # Reusable components
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── lib/
│   └── notion.ts                # Notion API integration
├── theme/
│   └── colors.mjs               # Color theme configuration
└── components/ui/               # shadcn/ui components
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Notion account (for events)
- Formspree account (for contact forms)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd faith-vineyard-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. **Configure environment variables** (see setup sections below)

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Notion API Setup (Events Page)

The events page dynamically pulls content from a Notion database.

#### 1. Create Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "Faith Vineyard Events")
4. Select your workspace
5. Copy the **Internal Integration Token**

#### 2. Create Events Database

Create a new Notion database with these exact property names:

| Property Name | Property Type | Required | Description |
|---------------|---------------|----------|-------------|
| Title | Title | ✅ | Event name |
| Date | Date | ✅ | Event date and time |
| Description | Rich Text | ✅ | Event description |
| Image | Files | ❌ | Optional event image |

#### 3. Share Database with Integration

1. Open your events database in Notion
2. Click "Share" in the top right
3. Click "Add people, emails, groups, or integrations"
4. Find and select your integration
5. Copy the **Database ID** from the URL:
   \`\`\`
   https://notion.so/your-workspace/DATABASE_ID?v=...
   \`\`\`

#### 4. Configure Environment Variables

Add to your \`.env.local\`:

\`\`\`env
NOTION_TOKEN=your_notion_integration_token_here
NOTION_DATABASE_ID=your_notion_database_id_here
\`\`\`

### Formspree Setup (Contact Forms)

The contact form uses Formspree for form handling.

#### 1. Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your **Form ID**

#### 2. Update Contact Form

In \`app/components/contact-form.tsx\`, replace:

\`\`\`typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
\`\`\`

With your actual Form ID:

\`\`\`typescript
const response = await fetch("https://formspree.io/f/xpznvqer", {
\`\`\`

### Email Configuration

Update email addresses throughout the site:

1. **Contact information** in \`app/contact/page.tsx\`
2. **Footer links** in \`app/components/footer.tsx\`
3. **Quick contact options** in various pages

Replace placeholder emails:
- \`hello@faithvineyard.church\`
- \`prayer@faithvineyard.church\`
- \`care@faithvineyard.church\`

### Venue Information

Update venue details when confirmed:

1. **Address** in contact page and footer
2. **Map integration** (optional)
3. **Directions** and parking information

## 📱 Pages Overview

### Home Page (\`/\`)
- Hero section with church introduction
- Service information cards
- About section with values
- Events preview
- Call-to-action sections

### About Us (\`/about\`)
- Church story and vision
- Core values
- Vineyard UK affiliation
- Statement of faith
- Leadership section (placeholder)

### Gatherings (\`/gatherings\`)
- Sunday gathering details
- Midweek connect groups
- Youth ministry
- Alpha Course information
- Venue and practical details

### Events (\`/events\`)
- Dynamic events from Notion
- Event types overview
- Mobile-optimized event cards
- Fallback events system

### Compassion & Care (\`/compassion\`)
- Food support information
- Pastoral care services
- Prayer ministry
- Community partnerships
- Support contact options

### Contact Us (\`/contact\`)
- Contact form (Formspree integration)
- Church contact information
- Office hours
- Quick contact options

## 🎨 Customization

### Colors

Colors are defined in \`theme/colors.mjs\` and \`tailwind.config.ts\`:

\`\`\`javascript
export const colors = {
  primary: '#305070',      // Deep blue
  accent: '#79C2F2',       // Light blue  
  secondary: '#8BBF8F',    // Sage green
  background: '#fdfaf6',   // Warm white
  // ... extended palette
}
\`\`\`

### Typography

- **Headlines**: Museo900Sketch (sketch-inspired)
- **Body**: Inter (clean, readable)

### Components

The site uses shadcn/ui components with custom styling:
- Cards with organic rounded corners
- Buttons with gentle hover effects
- Forms with accessible styling
- Navigation with smooth transitions

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import your repository to Vercel
   - Configure environment variables in Vercel dashboard

2. **Environment Variables**
   Add these in Vercel dashboard:
   - \`NOTION_TOKEN\`
   - \`NOTION_DATABASE_ID\`

3. **Deploy**
   - Vercel will automatically deploy on push to main branch

### Other Platforms

The site is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting provider

## 🔍 SEO & Analytics

### Built-in SEO
- Meta tags on all pages
- Sitemap generation (\`/sitemap.xml\`)
- Robots.txt (\`/robots.txt\`)
- Structured data ready
- Open Graph tags

### Adding Analytics

To add Google Analytics:

1. Install \`@next/third-parties\`
2. Add Google Analytics ID to environment variables
3. Include analytics component in layout

## 🛠️ Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
\`\`\`

### Adding New Pages

1. Create page file in \`app/new-page/page.tsx\`
2. Add to navigation in \`app/components/header.tsx\`
3. Update sitemap in \`app/sitemap.ts\`

### Styling Guidelines

- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain organic, rounded design language
- Use consistent spacing (multiples of 4)
- Ensure accessibility with proper contrast

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for Faith Vineyard Church, Comber**
