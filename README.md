# ViShruTa – Digital Technology Solutions
### Award-Grade Industrial Website ("Digital Twin Factory" Aesthetic)

> **"Smart Solutions. Stronger Industries."**  
> **"Engineering a Smarter Tomorrow"**  
> **ISO 27001 Certified Company** — Information Security Management System (ISMS)

---

## 📌 Executive Overview

This repository contains the complete, multi-page, pure static corporate website for **ViShruTa – Digital Technology Solutions**, an industrial automation, Industrial AI, IoT, traceability, and software engineering company based in Malleshwaram, Bangalore, India.

All information, statistical metrics, architecture diagrams, product specifications, brand rosters, and contacts have been authored using the official **24-slide company profile (`ViShruTa_Profile_v3_1.pdf`)** as the single source of truth.

---

## 🎨 Design System: "Digital Twin Factory"

The visual direction follows an award-grade (Awwwards / CSS Design Awards level) futuristic-industrial aesthetic:
- **Palette**: Deep navy/near-black space (`#030712`, `#050B18`, `#0A1428`) with electric blue (`#1E90FF`), neon cyan (`#00F0FF`), and the brand red accent (`#E10600`).
- **Product-Specific Accents**:
  - **SETU**: Electric Blue (`#1E90FF`)
  - **VarNa**: Cyber Green / Teal (`#00E676`)
  - **ChatuR**: Neon Purple / Indigo (`#A855F7`)
  - **Marga Chinh**: Industrial Orange (`#FF6B00`)
- **Atmospheric Depth**: Glassmorphism cards with multi-layered specular borders (`backdrop-filter: blur(16px)`), subtle blueprint grid overlay, and film grain.
- **Fluid Typography**: Responsive scale using CSS `clamp()` pairing **Outfit** (bold display), **Space Grotesk** (technical telemetry font), and **Inter** (ultra-legible body).
- **Interactive Cursor**: Custom fluid dual-ring cursor with magnetic hover states (auto-disabled on touch devices).

---

## 🚀 Key Interactive Features

1. **Digital Twin Connected Factory Canvas (`js/network-canvas.js`)**:
   - HTML5 Canvas particle & telemetry node network that dynamically connects nodes with digital vector lines and pulses towards mouse coordinates at 60 FPS.
2. **Animated Stat Counters (`js/main.js`)**:
   - IntersectionObserver-powered numeric counters for **50+ Years Collective Experience**, **30+ Delivered Projects**, **15+ Clients**, and **ISO 27001**.
3. **VarNa OCR Before/After Comparison Slider (`js/interactive-demos.js`)**:
   - Interactive draggable slider comparing degraded, noisy metal camera capture with VarNa's real-time AI character extraction.
4. **ChatuR Smart CCTV Detection Simulator (`js/interactive-demos.js`)**:
   - Live night-vision surveillance simulation featuring target tracking coordinates, geofenced polygon zone boundary, confidence percentage, and radar sweep.
5. **SETU OTP Security Workflow Simulator (`js/interactive-demos.js`)**:
   - Interactive 6-step desktop lock simulator: monitoring locks, stop request, dynamic QR code/OTP entry, local audit trail logging, and email notification simulation.
6. **Marga Chinh Supply Chain Explorer (`js/interactive-demos.js`)**:
   - Clickable lifecycle node explorer tracing prepackaged goods from **Raw Material ➔ Manufacturing ➔ Packaging ➔ Warehouse ➔ Distribution ➔ Retail/Consumer**.
7. **Filterable Success Stories Grid**:
   - Instant filtering across **Automotive, Food & Beverage, Engineering, and Software**.
8. **PLC Panel Wiring Lightbox Gallery**:
   - Inspect high-density modular PLC panels, VFD cabinets, and remote I/O junction enclosures.
9. **Infinite Client Marquee**:
   - Smooth continuous brand carousel (L&T, KIA, Toyota, VinFast, Aditya Birla, Daikin, Jeeni, Daifuku, Maruti Suzuki, Siemens, Amara Raja, Schneider Electric, Kushagramati) with grayscale-to-color hover state.

---

## 📂 Sitemap & Page Structure

| Page | Filename | Key Highlights |
|---|---|---|
| **Home** | `index.html` | Hero particle canvas, ISO 27001 badge, stats strip, pillars bento grid, problem cards, product preview, client marquee |
| **About** | `about.html` | Mission, philosophy, ISO 27001 ISMS standard, "Why Choose Us" 6 cards, core values |
| **Solutions** | `solutions.html` | 6 Core Solutions (IoT, Vision AI, Data Acquisition, Automation, RFID, Firmware Flashing), "What We Solve" |
| **Products Overview** | `products.html` | Purpose-built product suite overview and architectural hallmarks |
| **SETU** | `product-setu.html` | Secured Unified Tracking Portal & interactive OTP simulator |
| **VarNa** | `product-varna.html` | Smart Character Recognition OCR & interactive before/after slider |
| **ChatuR** | `product-chatur.html` | Smart Human Detection AI & night CCTV simulation |
| **Marga Chinh** | `product-marga-chinh.html` | Track & Trace Platform & interactive supply chain flow |
| **Industries** | `industries.html` | Automotive, FMCG, Food, Pharma, Engineering, and Chemical tiles |
| **Success Stories** | `success-stories.html` | Filterable case studies: KIA Motors, VinFast, L&T, Jeeni, Aditya Birla with multi-tier architectures |
| **Control & Instrumentation** | `control-instrumentation.html` | 4 service blocks & PLC Panel Wiring gallery with lightbox |
| **Technology Stack** | `technology.html` | Multi-vendor matrix: Siemens, Allen-Bradley, Delta, Schneider, Mitsubishi, Omron, LS, Yaskawa, LC |
| **Clients** | `clients.html` | All 13+ client showcase, "30+ Happy Customers", sector metadata |
| **Contact** | `contact.html` | Formspree/Web3Forms form, direct contacts (Hemanth Jayaram & Naveena N), Malleshwaram address, WhatsApp |
| **404** | `404.html` | Futuristic "Industrial Node Disconnected" radar recovery page |

---

## 🛠️ Content Editing (Single Source of Truth)

All text copy, statistical numbers, product features, client names, and contact details are organized centrally in:
```
js/data.js
```
To update phone numbers, team leads, product descriptions, or new case studies, edit `js/data.js` and the corresponding HTML elements.

---

## 🚢 Deployment Instructions

Because this site is built as clean, zero-build static HTML5, CSS3, and modern ES6 JavaScript, it can be deployed anywhere in seconds:

### Option 1: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or push to a GitHub repository.
2. In the project root, run:
   ```bash
   vercel --prod
   ```
3. Set Output Directory to `./` (current directory).

### Option 2: Netlify
1. Drag and drop the workspace folder directly onto the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. Or push to GitHub and deploy with build command `None` and publish directory `./`.

### Option 3: GitHub Pages
1. Push the repository to GitHub.
2. Go to **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` (or `master`) and directory `/ (root)`.
4. Click **Save**. The website will be live at `https://<username>.github.io/<repo-name>/`.

---

## 📞 Company Contact Details

- **Company**: Vishruta Enterprises (ViShruTa – Digital Technology Solutions)
- **Address**: Malleshwaram, Bangalore, Karnataka - 560003, India
- **Website**: [www.vishruta.co.in](https://www.vishruta.co.in)
- **Technical & Solutions Lead**: Hemanth Jayaram  
  - Phone: `+91 9663375272`  
  - Email: `hemanth@vishruta.co.in`
- **Engineering Lead**: Naveena N  
  - Phone: `+91 7892508186`  
  - Email: `naveen@vishruta.co.in`
