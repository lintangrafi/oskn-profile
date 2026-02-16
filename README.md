# OSKN Portfolio Website

Modern developer portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and animated with Framer Motion & GSAP.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion & GSAP for animations
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🌗 Monochrome (Black & White) theme
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: React Icons
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
oskn-profile/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── lib/
│   ├── data.ts           # Portfolio data
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Customization

### Update Portfolio Data

Edit the data in `lib/data.ts` to add your own:
- Profile information
- Work experience
- Projects
- Skills
- Education
- Certifications

### Add Project Images

Place your project images in `public/projects/` and update the image paths in `lib/data.ts`.

### Update Logo

Replace the logo text in `components/Header.tsx` and `components/Footer.tsx` with your own logo or image.

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure custom domain in Vercel dashboard
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## Performance

- Lighthouse score: 90+ across all metrics
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal bundle size

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**OSKN**
- Email: hello@oskn.dev
- GitHub: [@oskn](https://github.com/oskn)
- LinkedIn: [OSKN](https://linkedin.com/in/oskn)

---

Built with ❤️ using Next.js & TypeScript
