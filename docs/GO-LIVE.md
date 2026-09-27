# Going live on eindata.nl

The domain `eindata.nl` is registered at GoDaddy. The steps below put the site online,
make `info@eindata.nl` work and get the site into Google. Everything here is free.

## 1. Host the website on Vercel (free)

1. Sign in at https://vercel.com with your GitHub account.
2. **Add New → Project**, import `Shehab89/eindata-website` and click **Deploy**.
   Vercel detects Next.js automatically. After that, every push to `master` deploys automatically.
3. In the project, open **Settings → Domains** and add `eindata.nl` and `www.eindata.nl`.
   Vercel shows the DNS records to create. They are usually:

   | Type  | Name | Value                  |
   |-------|------|------------------------|
   | A     | @    | 76.76.21.21            |
   | CNAME | www  | cname.vercel-dns.com   |

4. In GoDaddy, open **My Products → eindata.nl → DNS**. Delete the existing `@` A record
   (GoDaddy's parking page) and add the records above. The change usually works within an hour.

## 2. Receive email on info@eindata.nl (free forwarding to Gmail)

Use ImprovMX (https://improvmx.com, free plan):

1. Sign up, add the domain `eindata.nl` and set the alias `info` → `shihab.masri@gmail.com`.
2. In GoDaddy DNS, add:

   | Type | Name | Value                                     | Priority |
   |------|------|-------------------------------------------|----------|
   | MX   | @    | mx1.improvmx.com                          | 10       |
   | MX   | @    | mx2.improvmx.com                          | 20       |
   | TXT  | @    | `v=spf1 include:spf.improvmx.com ~all`    |          |

3. (Optional) To also *send* as info@eindata.nl from Gmail, go to Gmail → Settings →
   Accounts → "Send mail as" → add `info@eindata.nl` with ImprovMX's SMTP details.

If you want a real mailbox instead, Google Workspace or Microsoft 365 (about €6/month) provides one.
Follow their DNS instructions instead of adding the ImprovMX records.

## 3. Make the contact form send email (Resend, free up to 3,000 emails/month)

1. Sign up at https://resend.com and create an API key.
2. Go to **Domains → Add domain**, enter `eindata.nl` and add the DNS records Resend shows in GoDaddy.
   They sit on subdomains (for example `send.eindata.nl` and `resend._domainkey`), so they
   don't conflict with the ImprovMX records.
3. In Vercel, open **Settings → Environment Variables** and add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = `info@eindata.nl` (or your Gmail address)
   - `CONTACT_FROM_EMAIL` = `EinData website <website@eindata.nl>`
4. Redeploy (Deployments → ⋯ → Redeploy) and send yourself a test message.

Until the key is set, the form shows visitors a message asking them to email info@eindata.nl directly.
When a form message arrives, pressing **Reply** answers the visitor directly.

## 4. Get found on Google and in AI assistants

1. **Google Search Console** (https://search.google.com/search-console): add the domain
   `eindata.nl` (verify it with a TXT record in GoDaddy), then submit `https://eindata.nl/sitemap.xml`.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters): import your site from Search Console.
   ChatGPT search and Copilot use Bing's index, so this matters for AI chatbots.
3. **Google Business Profile** (https://business.google.com): create a profile for EinData
   as a service-area business in Eindhoven (your home address can stay hidden). This does the most
   for searches such as "data analyst Eindhoven".
4. **LinkedIn**: add `https://eindata.nl` to the website field on your profile and create an EinData
   company page that links to it. Links from other sites help Google and AI assistants trust the site.
5. Check the structured data at https://search.google.com/test/rich-results.

The site already includes:

- English and Dutch pages with hreflang and canonical URLs
- Open Graph tags
- JSON-LD (ProfessionalService, Person, FAQPage)
- `sitemap.xml`
- `robots.txt` (AI crawlers allowed)
- `/llms.txt` (a plain-text summary for AI assistants)
