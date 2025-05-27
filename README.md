# AI.com - Vite + React + TypeScript + MUI

A modern web application built with:
- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React** - UI library with hooks
- 🏷️ **TypeScript** - Type safety and better DX
- 🎨 **Material-UI (MUI)** - Beautiful React components

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🌐 Netlify Deployment

This project is ready for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `dist`
- Automatic SPA redirects configured

### Deploy Steps:
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Deploy automatically with the included `netlify.toml` configuration

### Manual Deployment:
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # React entry point
├── index.css        # Global styles
└── vite-env.d.ts    # Vite type definitions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
