# BLOCC Church Website

A modern, dark-themed church website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd C:\Users\trium\ELGCC
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
ELGCC/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and Tailwind config
│   └── teachings/
│       ├── page.tsx        # Teachings archive page
│       └── [slug]/
│           └── page.tsx    # Individual sermon detail page
├── components/
│   ├── Navigation.tsx      # Main navigation component
│   ├── Footer.tsx          # Footer component
│   └── home/
│       ├── Hero.tsx        # Hero section
│       ├── Programmes.tsx  # Weekly programmes section
│       ├── About.tsx       # About section
│       └── Contact.tsx     # Contact form section
└── public/
    └── images/             # Image assets (to be added)
```

## 🎨 Features

### Homepage
- **Hero Section**: Full-screen hero with "A Place of Prayer, Power, and Purpose" tagline
- **Programmes Section**: Weekly service schedule (Sunday, Wednesday, First Friday)
- **About Section**: Church information and statistics
- **Contact Section**: Contact form and information

### Teachings Page
- **Sermon Grid**: Browse all teachings and songs
- **Search & Filter**: Find specific sermons by category
- **Individual Sermon Pages**: Watch sermons with embedded video player

### Design
- Dark theme with navy/black backgrounds
- Gold accent color (#D4AF37)
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and hover effects
- Modern, clean typography

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)

## 📝 Customization

### Update Church Information

1. **Church Name**: Edit `components/Navigation.tsx` and `components/Footer.tsx`
2. **Contact Details**: Edit `components/Footer.tsx` and `components/home/Contact.tsx`
3. **About Content**: Edit `components/home/About.tsx`
4. **Programme Schedule**: Edit `components/home/Programmes.tsx`

### Add Sermons

Edit the sermon data in:
- `app/teachings/page.tsx` - Sermon list
- `app/teachings/[slug]/page.tsx` - Individual sermon data

### Add Images

Place images in the `public/images/` directory and reference them in components.

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📋 Next Steps

1. **Add Real Content**:
   - Replace placeholder text with actual church information
   - Add church logo and images
   - Add real sermon videos

2. **Integrate CMS** (Optional):
   - Consider using Sanity, Contentful, or Strapi for easy content management
   - This allows non-technical staff to update sermons and content

3. **Add Features**:
   - Online giving/donations
   - Event calendar
   - Member portal
   - Live streaming integration

4. **SEO Optimization**:
   - Add meta descriptions
   - Implement structured data
   - Create sitemap

## 🐛 Known Issues

- Security vulnerabilities in Next.js 14.2.0 - Consider upgrading to latest version
- Placeholder images need to be replaced with actual church photos
- Contact form currently simulates submission - needs backend integration

## 📞 Support

For questions or issues, contact the development team.

## 📄 License

© 2024 BLOCC Church. All rights reserved.
