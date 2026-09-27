# Going live on eindata.nl (GoDaddy cPanel hosting)

The site is built as plain HTML files (`npm run build` writes them to the `out/` folder).
GoDaddy's cPanel hosting serves these files. The contact form uses `contact.php`,
which sends email through the hosting's built-in mail, so no extra services are needed.

## 1. Create the mailbox info@eindata.nl (cPanel)

1. GoDaddy → **My Products → Web Hosting → Manage → cPanel Admin**.
2. **Email Accounts → + Create**, username `info`, domain `eindata.nl`, choose a password.
3. Read the mail in **Webmail**, or forward it to Gmail:
   **Forwarders → Add Forwarder** → `info@eindata.nl` → `shihab.masri@gmail.com`.
4. Optional: **Email Accounts → info → Connect Devices** shows the IMAP/SMTP settings
   to add the mailbox to Gmail, Outlook or your phone.
5. In cPanel, open **Email Deliverability** and click **Repair** on any records it flags (SPF/DKIM).
   This keeps the form emails out of spam.

The contact form sends messages from `website@eindata.nl` to `info@eindata.nl`.
Pressing **Reply** answers the visitor directly. To use different addresses,
edit `$to` / `$from` at the top of `public/contact.php`.

## 2. Automatic deploy from GitHub (recommended)

Every push to `master` then builds the site and uploads it to GoDaddy.

1. In cPanel, open **FTP Accounts** and create an account (or use the main cPanel account).
   Note the **FTP server** name shown under "Configure FTP Client" (usually `ftp.eindata.nl`).
2. In GitHub, go to **Shehab89/eindata-website → Settings → Secrets and variables → Actions →
   New repository secret** and add:
   - `FTP_SERVER`: e.g. `ftp.eindata.nl`
   - `FTP_USERNAME`: the FTP username
   - `FTP_PASSWORD`: the FTP password
   - `FTP_DIR` (optional): only if the FTP account does not start one level above
     `public_html`. For an FTP account whose home *is* `public_html`, set `./`.
3. Merge the changes into `master` (or open **Actions → Deploy to eindata.nl → Run workflow**).
   The **Actions** tab shows progress; after about 2 minutes the new site is live.

If the upload fails with a TLS error, change `protocol: ftps` to `protocol: ftp` in
`.github/workflows/deploy.yml`.

## 3. Manual upload (alternative)

1. On your computer: `npm install` then `npm run build`.
2. Zip the **contents** of the `out/` folder, not the folder itself.
3. In cPanel, open **File Manager → public_html**. Delete or back up the old site files,
   **Upload** the zip, then right-click → **Extract**.
4. Make sure hidden files are uploaded too (`.htaccess`). In File Manager:
   **Settings → Show Hidden Files**.

## 4. SSL

In cPanel, open **SSL/TLS Status** and run **AutoSSL** if eindata.nl is not yet covered.
`.htaccess` redirects everything to `https://eindata.nl`.

## 5. Get found on Google and in AI assistants

1. **Google Search Console** (https://search.google.com/search-console): add the domain
   `eindata.nl` (verify it with a TXT record in GoDaddy DNS), then submit `https://eindata.nl/sitemap.xml`.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters): import your site from Search Console.
   ChatGPT search and Copilot use Bing's index, so this matters for AI chatbots.
3. **Google Business Profile** (https://business.google.com): create a profile for EinData
   as a service-area business in Eindhoven (your home address can stay hidden). This does the most
   for searches such as "data analyst Eindhoven".
4. **LinkedIn**: add `https://eindata.nl` to the website field on your profile and create an EinData
   company page that links to it. Links from other sites help Google and AI assistants trust the site.
5. Check the structured data at https://search.google.com/test/rich-results.

The site already includes:

- English (`/`) and Dutch (`/nl/`) pages with hreflang and canonical URLs
- Open Graph tags
- JSON-LD (ProfessionalService, Person, FAQPage)
- `sitemap.xml`
- `robots.txt` (AI crawlers allowed)
- `/llms.txt` (a plain-text summary for AI assistants)
