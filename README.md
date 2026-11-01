# Superior Networks Company Website (شركة سوبيريور نتوركس)

Official, fully mobile-responsive, bilingual (English & Arabic with full RTL/LTR support) corporate website for **Superior Networks Company**, a premier General Contracting, Heavy Machinery Fleet, Trenching, Optical Fiber, and Infrastructure company based on Makkah Mukarma Road, Riyadh, Saudi Arabia.

Built directly from the official **Superior Networks Company Profile PDF**, extracting authentic high-resolution project photography, client logos, equipment specifications, and manpower metrics.

---

## 🌟 Key Features

1. **Dual Language Support (English & Arabic RTL/LTR)**
   - Instant toggle between English and Arabic (`العربية`).
   - Dynamic `dir="ltr"` / `dir="rtl"` attribute transitions, swapping text alignment, icons, and typography.
   - Tailored Arabic typography with **Cairo** Google Font and English with **Plus Jakarta Sans**.

2. **Full Heavy Machinery Fleet Catalog (37 Equipment Types, 75+ Units)**
   - Extracted directly from Pages 8 & 9 of the official profile.
   - Filter by categories: Bulldozers & Rippers, Hydraulic Excavators, Trenchers & Mole Ploughs, Haulage & Tankers, Asphalt & Milling, Power & Splicing.
   - Interactive live search by keyword (e.g. *CAT 320, D-9, Volvo, Trencher, Splicing*).
   - Switchable **Cards View** and **Full Data Table View** (matching the PDF).
   - Direct "Request This Unit" button that pre-populates the inquiry form.

3. **Core Services & Capabilities (12 Detailed Disciplines)**
   - Heavy Machinery Services
   - Trenching & Underground Utilities
   - Optical Fiber & Telecommunications Infrastructure
   - Asphalt Paving & Road Maintenance
   - Integrated CCTV & TV Surveillance Solutions
   - Electrical & Sewerage Works
   - Water Excavation & Utilities
   - Residential, Commercial & Industrial Construction
   - Project-Based Manpower Solutions & Turnkey Material Supply
   - Dedicated modal inspection for each service with key technical capabilities.

4. **Field Workforce & Manpower Deployment (18 Specialized Roles)**
   - Exact headcount allocation from Page 25 of the PDF (115+ direct personnel).
   - Filterable categories: Heavy Equipment Operators, Technical & Fiber Specialists, Supervisory & Engineering, Logistics & Site Labor.

5. **Proven Track Record & Project Photo Gallery**
   - Authentic on-site project photos from real Saudi infrastructure projects.
   - Filterable by project domain (Trenching, Fiber, Asphalt, Earthmoving, Electrical).
   - Full-screen accessible Lightbox modal with next/prev navigation and descriptive captions.

6. **Valued Clients & Strategic Partners**
   - High-resolution logos and scope descriptions for:
     - **STC** (Saudi Telecom Company)
     - **TAWAL** (Telecommunications Towers Company)
     - **Tahakom** (Saudi Technology & Security Comprehensive Control)
     - **Elm Company** (علم)
     - **Prime Emar Contracting**
     - **Wadi Swat Al-Sharq Contracting Co.**
   - Official alignment with **Saudi Vision 2030** and **Riyadh Expo 2030**.

7. **Interactive RFQ & Contact Hub**
   - Official contact details: Phone `(+966) 57 942 1490`, Email `info@superiorksa.com`, Address `Makkah Mukarma Road, Riyadh`.
   - Interactive RFQ form with service selector, equipment selector, and instant client feedback.
   - **One-click WhatsApp Dispatch**: generates a pre-formatted WhatsApp message ready to send to `+966579421490`.
   - Embedded Google Maps location for Riyadh.
   - **One-Click Download**: original PDF company profile is bundled and directly downloadable.

8. **Mobile First & Responsive**
   - Dynamic viewport sizing (`dvh`), fluid layouts, touch-friendly tap targets.
   - Sticky bottom action bar on mobile devices for instant calling, WhatsApp chat, and quotation requests.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
# Clone or navigate to the directory
cd SuperiorNetworks

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build & Preview
```bash
# Build optimized static distribution
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
SuperiorNetworks/
├── index.html                  # HTML entry with SEO, fonts & meta tags
├── package.json                # Dependencies (React 19, Vite, Tailwind CSS v4, Lucide)
├── vite.config.ts              # Vite configuration with Tailwind CSS v4
├── tsconfig.json               # TypeScript compiler config
├── public/
│   └── assets/                 # Extracted high-res assets & PDF
│       ├── branding/           # Logo, Vision 2030, Expo 2030
│       ├── clients/            # STC, Tawal, Tahakom, Elm, Prime Emar, Wadi Swat
│       ├── services/           # Service background and hero images
│       ├── projects/           # Real project portfolio photographs
│       └── Superior_Networks_Company_Profile.pdf # Original PDF profile
└── src/
    ├── types.ts                # TypeScript interfaces
    ├── index.css               # Base CSS, fonts, and custom styles
    ├── main.tsx                # React root mount
    ├── App.tsx                 # Main application orchestrator
    ├── data/
    │   ├── translations.ts     # Complete bilingual English & Arabic texts
    │   ├── fleet.ts            # 37 machinery categories & quantities
    │   ├── services.ts         # 12 core services with specs
    │   ├── manpower.ts         # 18 workforce roles & counts
    │   ├── projects.ts         # Gallery projects data
    │   └── clients.ts          # Client and partner data
    └── components/
        ├── Header.tsx          # Responsive navbar with drawer & language switch
        ├── Hero.tsx            # Hero with stats counter & badges
        ├── About.tsx           # Mission, Vision & Core Values
        ├── ServicesSection.tsx # Interactive capabilities & modal details
        ├── FleetSection.tsx    # Fleet catalog with search, filter & table toggle
        ├── ManpowerSection.tsx # Workforce breakdown & material supply
        ├── GallerySection.tsx  # Project gallery with accessible lightbox
        ├── ClientsSection.tsx  # Client and partner showcase
        ├── ContactSection.tsx  # RFQ form, WhatsApp link, map & PDF download
        ├── Footer.tsx          # Corporate footer with site links
        ├── MobileQuickBar.tsx  # Mobile sticky call/WhatsApp/quote bar
        └── QuoteModal.tsx      # Quotation popup modal
```

---

## 🇸🇦 Localization & Saudi Market Alignment

The site is crafted specifically for the Saudi construction and telecom ecosystem, adhering to local terminology:
- **ترنشر (Trenching)**
- **محراث كابلات (Mole Plough)**
- **لحام ألياف ضوئية (Fusion Splicing & OTDR)**
- **فينشر وفرادة أسفلت (Asphalt Pavers & Mini Rollers)**
- **كود البناء السعودي واشتراطات أمانة الرياض**
- **رؤية السعودية 2030 وإكسبو 2030 بالرياض**

