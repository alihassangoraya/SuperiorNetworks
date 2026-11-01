# Publishing Guide: Cloudflare Pages + Custom Domain & Contact Form

Since your domain is purchased from GoDaddy and its DNS is already pointed to **Cloudflare**, hosting on **Cloudflare Pages** is the fastest, most reliable, and 100% free solution. It runs on Cloudflare's global edge network (including Riyadh and Saudi edge data centers) with automatic SSL and zero bandwidth limits.

---

## Part 1: How to Publish on Cloudflare Pages

### Option A: 1-Command Deploy via Terminal (Fastest)

1. Build the production files:
   ```bash
   npm run build
   ```

2. Deploy using the Cloudflare Wrangler CLI:
   ```bash
   npx wrangler pages deploy dist --project-name superior-networks
   ```
   - On the first run, it will open your browser asking to authorize your Cloudflare account.
   - It will upload the `dist` folder and give you an instant live URL (e.g. `https://superior-networks.pages.dev`).

3. Link your Domain in Cloudflare:
   - Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Click on **Workers & Pages** in the left sidebar -> Click **superior-networks**.
   - Go to the **Custom domains** tab.
   - Click **Set up a custom domain**.
   - Enter your domain name: `superiorksa.com` (and repeat for `www.superiorksa.com`).
   - Cloudflare will recognize that your DNS is already managed by Cloudflare and will automatically configure the CNAME record and issue the SSL certificate!

---

### Option B: Connect via GitHub (Automatic Updates on Push)

1. Push this project to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/SuperiorNetworks.git
   git branch -M main
   git push -u origin main
   ```

2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Click **Workers & Pages** -> **Create application** -> **Pages** tab.
   - Click **Connect to Git** and choose your repository.
   - Configure the build settings:
     - **Framework preset**: `Vite`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click **Save and Deploy**.

3. Add Custom Domain:
   - In your newly created Pages project, go to **Custom domains** -> **Set up a custom domain**.
   - Enter `superiorksa.com` -> Cloudflare binds it instantly.

---

## Part 2: Making Contact Forms Fully Working (Direct to Your Email)

Your site has a complete Request for Quote (RFQ) form in the contact section and in the quote modal popup. To have inquiries sent directly to your inbox (`info@superiorksa.com`):

### Recommended: Free Web3Forms Setup (Takes 30 seconds)

1. Go to [https://web3forms.com](https://web3forms.com).
2. Enter your email (`info@superiorksa.com`) and click **Create Access Key**.
3. Check your email for the access key.
4. Add the key to a `.env` file in this project:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY="your-access-key-here"
   ```
   *(Or enter it into `src/config.ts`)*
5. If using Cloudflare Pages:
   - In Cloudflare Dashboard -> **superior-networks** -> **Settings** -> **Environment variables**.
   - Add variable `VITE_WEB3FORMS_ACCESS_KEY` with your key.
   - Re-run `npm run build` or trigger a deployment.

Now, every time a client submits the form on the website, you will receive a clean, branded email containing:
- Client Name & Company
- Direct Phone Number & WhatsApp
- Work Email
- Required Service & Selected Fleet Equipment
- Project Details & Scope

---

## Part 3: Instant WhatsApp Fallback

The form also features a built-in **"Send via WhatsApp"** button. If the client clicks this, it opens WhatsApp on their phone or desktop with a pre-formatted message addressed to **(+966) 57 942 1490** with all their project details already filled in.

