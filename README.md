# Hamzify — official website

A simple, fast static website for the Hamzify Android app.
No build step, no framework, no paid services. Works on GitHub Pages, Cloudflare Pages or any static host.

## Files

| File | What it is |
|---|---|
| `index.html` | The home page (hero, features, app preview, download, install steps, about, FAQ) |
| `privacy.html` | Privacy Policy — **review before you publish** |
| `terms.html` | Terms of Use — **review before you publish** |
| `contact.html` | Contact page (shows your email from the settings) |
| `404.html` | "Page not found" page |
| `js/config.js` | **ALL SETTINGS — the only file you normally edit** |
| `js/main.js` | Site behaviour (no need to edit) |
| `css/style.css` | Design and colours (colours are at the top) |
| `assets/screens/` | App screenshots (720 x 1280, `.webp` + `.jpg`) |
| `assets/img/` | Logo, favicons, social preview image (`og-image.jpg`, 1200 x 630) |
| `assets/fonts/` | Plus Jakarta Sans font (self-hosted, SIL Open Font License) |
| `sitemap.xml`, `robots.txt` | For search engines |

## Change app details or the APK link

Open `js/config.js` and edit:

- `APK_DOWNLOAD_URL` — direct link to the `.apk` file. Leave it `""` to show "Download coming soon" (the buttons are disabled).
- `APP_VERSION`, `APK_FILE_SIZE`, `LAST_UPDATED`, `MINIMUM_ANDROID_VERSION`
- `CONTACT_EMAIL` — shown on the Contact page, FAQ, footer, Privacy and Terms pages.
- `SITE_URL` — your website address (used by the Share button).
- `FEATURES`, `SCREENSHOTS`, `ABOUT_TEXT`, `FAQ`

## Replace screenshots

1. Make your screenshot 720 x 1280 (9:16). A `.jpg` or `.png` is enough; a `.webp` copy makes it load faster.
2. Put it in `assets/screens/`.
3. In `js/config.js`, change the `src` (and `webp`, or delete the `webp` line) of an item in `SCREENSHOTS`.
4. The first screenshot is also shown in the big phone at the top of the page.
   If you change the first one, also update the two `feed.` file names in `index.html` (search for `feed.`).

## If you move to your own domain

Search all files for `hamzify-official.sites.tab.bot` and replace it with your new address
(`index.html`, the other `.html` pages, `sitemap.xml`, `robots.txt`, `js/config.js` → `SITE_URL`).

See **Hamzify_website_guide.pdf** for step-by-step GitHub, GitHub Pages, Cloudflare Pages and custom domain instructions.
