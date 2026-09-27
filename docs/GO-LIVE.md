# Going live on eindata.nl, for free

Total cost: **€0 per month**. You only keep paying GoDaddy for the domain name.

| What                             | Service                         | Cost |
|----------------------------------|---------------------------------|------|
| Website hosting + SSL            | Cloudflare Pages                | Free |
| info@eindata.nl → your Gmail     | Cloudflare Email Routing        | Free |
| Contact form emails              | Web3Forms (250 messages/month)  | Free |
| Domain name                      | GoDaddy (already paid)          | Yearly |

The domain stays registered at GoDaddy. You only point it to Cloudflare.

## 1. Get a free contact form key (2 minutes)

1. Go to https://web3forms.com, enter `shihab.masri@gmail.com` and click **Create Access Key**.
2. The key arrives by email. Keep it for step 3.

## 2. Add the domain to Cloudflare (10 minutes, then up to a few hours of waiting)

1. Create a free account at https://dash.cloudflare.com.
2. Click **Add a domain**, enter `eindata.nl` and choose the **Free** plan.
3. Cloudflare shows two nameservers (for example `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com`).
4. In GoDaddy, go to **My Products → eindata.nl → DNS → Nameservers → Change nameservers →
   "I'll use my own nameservers"** and enter the two Cloudflare nameservers.
5. Wait until Cloudflare emails you that the domain is active (usually within an hour).

## 3. Put the website on Cloudflare Pages

1. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git** and choose
   `Shehab89/eindata-website`.
2. Use these settings:
   - Production branch: `master`
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY` = the key from step 1
3. Click **Save and Deploy**.
4. In the Pages project, open **Custom domains → Set up a custom domain** and add `eindata.nl`, then
   `www.eindata.nl`. Cloudflare creates the DNS records and the SSL certificate itself.

From now on, every change merged into `master` goes live automatically within about a minute.

## 4. Make info@eindata.nl work

1. In Cloudflare, open eindata.nl → **Email → Email Routing → Get started**.
2. Create the address `info@eindata.nl` → destination `shihab.masri@gmail.com`,
   then confirm the verification email in Gmail.
3. Click **Add records and enable**, and Cloudflare sets up the mail records.

(Optional) To send *from* info@eindata.nl in Gmail, go to Gmail → Settings → Accounts →
"Send mail as". This needs an SMTP server, e.g. Brevo's free plan.

## 5. Get found on Google and in AI assistants (free)

1. **Google Search Console** (https://search.google.com/search-console): add `eindata.nl`
   (with the domain on Cloudflare, verification can be done automatically), then submit
   `https://eindata.nl/sitemap.xml`.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters): import your site from Search Console.
   ChatGPT search and Copilot use Bing's index, so this matters for AI chatbots.
3. **Google Business Profile** (https://business.google.com): create a profile for EinData as a
   service-area business in Eindhoven (your home address can stay hidden).
4. **LinkedIn**: add `https://eindata.nl` to your profile and create an EinData company page linking to it.
5. Check the structured data at https://search.google.com/test/rich-results.

The site already includes:

- English (`/`) and Dutch (`/nl/`) pages with hreflang and canonical URLs
- Open Graph tags
- JSON-LD (ProfessionalService, Person, FAQPage)
- `sitemap.xml`
- `robots.txt` (AI crawlers allowed)
- `/llms.txt` (a plain-text summary for AI assistants)
