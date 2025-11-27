# Skin Technologies Institute Website

Official website for Skin Technologies Institute (STI), located in Beaconsfield, Quebec, Canada.

## Features

- 🌐 **Bilingual Support**: Full English and French language support
- 📱 **Responsive Design**: Mobile-friendly layout
- ⚡ **Fast & Modern**: Optimized for Cloudflare Pages
- 🎨 **Clean UI**: Modern, minimalist design inspired by skininstitute.ca
- 🖼️ **Image Placeholders**: Ready-to-use placeholders for all images
- 💰 **Pricing Page**: Dedicated pricing page for services

## Address

186 Sutton Pl  
Beaconsfield, QC H9W 5S3  
Canada

## Project Structure

```
stiinstitute.com/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── pricing.html            # Pricing page
├── tips.html               # Tips page
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet
│   ├── js/
│   │   ├── main.js         # Main JavaScript
│   │   └── i18n.js         # Internationalization
│   └── images/             # Image assets
│       ├── logo.png
│       ├── favicon.ico
│       └── ... (other images)
├── _redirects              # Cloudflare Pages redirects
├── wrangler.toml           # Cloudflare configuration
├── package.json            # Node.js dependencies
└── README.md               # This file
```

## Image Assets Required

Place the following images in `assets/images/`:

- `hero-image.jpg` - **REQUIRED** - Large hero image for homepage (recommended: 1920x1080px or larger)
- `favicon.ico` - Site favicon (16x16 or 32x32px)

**Note:** All other images use placeholders that will display "📷 Image Placeholder" until you add your images. The placeholders are styled and will automatically work when you replace them with actual images. Simply replace the `<div class="image-placeholder"></div>` elements with `<img src="/assets/images/your-image.jpg" alt="Description">` tags.

## Local Development

1. Install dependencies (optional):
   ```bash
   npm install
   ```

2. Run local server:
   ```bash
   npm run dev
   ```

   Or use any static file server:
   ```bash
   npx serve .
   ```

3. Open browser to `http://localhost:3000`

## Deployment to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard

1. Go to Cloudflare Dashboard → Pages
2. Create a new project
3. Connect your Git repository
4. Set build settings:
   - Build command: (leave empty or `echo "No build required"`)
   - Build output directory: `/` (root)
5. Deploy

### Option 2: Via Wrangler CLI

1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   wrangler pages deploy .
   ```

## Language Switching

The website includes a built-in language switcher that:
- Saves language preference to localStorage
- Translates all content dynamically
- Works across all pages

Languages supported:
- English (EN)
- French (FR)

## Customization

### Updating Content

1. **Text Content**: Edit the HTML files directly or update translations in `assets/js/i18n.js`
2. **Styling**: Modify `assets/css/main.css`
3. **Images**: Replace images in `assets/images/` directory

### Adding New Pages

1. Create new HTML file (e.g., `newpage.html`)
2. Copy structure from existing pages
3. Add navigation link in header (update all pages)
4. Add translations to `assets/js/i18n.js` for both English and French

### Replacing Image Placeholders

Image placeholders are used throughout the site. To replace them:

1. Add your image to `assets/images/`
2. Replace `<div class="image-placeholder"></div>` with:
   ```html
   <img src="/assets/images/your-image.jpg" alt="Description">
   ```
3. The image will automatically style to fit the container

### Contact Form

The contact form currently shows an alert on submission. To make it functional:

1. Set up a form handler (e.g., Cloudflare Workers, Formspree, etc.)
2. Update the form action in `contact.html`
3. Modify the submit handler in `assets/js/main.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Skin Technologies Institute. All rights reserved.

