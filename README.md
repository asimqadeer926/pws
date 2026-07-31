# Pearl Window Systems — Official Web Platform

![Pearl Window Systems](/public/logo.png)

A high-performance, dark-aesthetic web application for **Pearl Window Systems** — Pakistan's premier certified uPVC window & door systems provider. Built with **React**, **Vite**, **WebGL Fluid Simulation Engine**, and custom CSS.

---

## ✨ Features & Architecture

- **WebGL Interactive Fluid Canvas**: GPU-accelerated fluid motion simulation with real-time palette morphing and interactive mouse/touch dynamics.
- **Interactive Component Showcase**: Comprehensive grid of engineered uPVC window components (fusion welds, multi-chamber profiles, CHUGN hardware, double glazing) plus a full-width embedded hero card for the **Genuine Pearl System**.
- **Technical Profile Catalog**: Interactive 2D cross-section viewer with live weight, length, and wall thickness specs across 4 series categories:
  - **60 Series**: Casement openable sashes, outer frames, mullions, and connectors.
  - **80 Series (3-Track)**: Heavy-duty 3-track sliding outer frame, sashes, interlocks, and mosquito net frames.
  - **88 Series (Coming Soon)**: Heavy-duty sliding for large-span terrace openings.
  - **Louver & Jalousie**: Adjustable and fixed ventilation vane profiles.
  - **Glazing & Auxiliary**: Single/double glass beads and 150mm door panel boards.
  - **CHUGN Hardware (Coming Soon)**: Multi-point locks, hinges, and handles.
- **Showroom & Facility Gallery**: High-resolution sequential gallery displaying the Islamabad head office, showroom displays, sample walls, container import, and godown profile stock.
- **Watermarked Certification Vault**: High-security, watermarked certificate viewer (CE EN 13245, ISO 9001:2015, ISO 45001, Brand Exclusivity, 10-Year Warranty).
- **Responsive Instant Quote Form**: Direct quote requests integrated with WhatsApp and email dispatch.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### 2. Installation
```bash
# Clone or navigate into project directory
cd web2

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

### 5. Local Preview
```bash
npm run preview
```

---

## 📦 Project Structure

```text
web2/
├── public/                    # Static assets served at root
│   ├── certificates/          # Watermarked official certification images
│   ├── pic/                   # Component showcase images (web-safe hyphenated)
│   ├── pics/                  # System profile morph images
│   ├── profile-diagrams/      # Technical 2D profile cross-section PNGs
│   ├── showroom/              # Sequential showroom & warehouse photos (1 to 7)
│   └── logo.png               # Official Pearl Window Systems brand logo
├── src/
│   ├── App.jsx                # Main application component & inline script engines
│   ├── index.css              # Modern dark-mode styling tokens & layout rules
│   └── main.jsx               # React DOM entry point
├── index.html                 # Main HTML template with SEO tags
├── package.json               # Node dependencies & build scripts
├── vite.config.js             # Vite build configuration
└── README.md                  # Project documentation
```

---

## 🌐 Deployment Guidelines

### Option 1: Vercel / Netlify / Cloudflare Pages
1. Connect this repository to your hosting provider.
2. Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy!

### Option 2: Nginx / Static Server
Copy the generated `dist/` directory directly to your web server root (e.g. `/var/www/html`).

---

## 🔒 Security & Intellectual Property Notice
All official certificates contained in `/public/certificates` carry baked-in diagonal watermarks containing the Pearl Window Systems brand mark and authorization serials to prevent unauthorized reproduction or forgery.

---

© 2026 Pearl Window Systems. All rights reserved.
