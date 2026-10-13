# Shubham Gehlot - Data Science Portfolio

A static portfolio website adapted from the **Dimension** template by HTML5 UP.

## Preview locally

No build step is required. Open `index.html` directly in a browser, or serve the folder with a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

### GitHub Pages
1. Create a repository (for example `portfolio`).
2. Upload all files from this folder to the repository root.
3. In GitHub: **Settings -> Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`.

### Netlify / Vercel
Import the repository as a static site. No build command is required; the publish directory is the project root.

## Main files
- `index.html` - portfolio content and structure
- `assets/css/portfolio.css` - custom portfolio styling
- `assets/Shubham_Gehlot_Resume.pdf` - downloadable resume
- `assets/js/` - original Dimension interactions

## Notes
- The phone number from the resume is intentionally not displayed publicly.
- LinkedIn is linked using the profile URL supplied by Shubham.
- GitHub links point to `https://github.com/0ut-lier`.

## Credits
Original template: Dimension by HTML5 UP (`html5up.net`), used under the included CCA 3.0 license.

## Visual identity upgrade

This version includes original inline SVG/CSS visuals rather than externally hosted stock artwork:
- Animated data-signal + model-network hero graphic
- Multi-agent orchestration visual
- Observed vs. forecast time-series visual
- NeRF camera-ray / radiance-field visual
- Clinical NLI evidence / entailment visual
- Micrograd computation-graph visual
- Bigram transition-matrix / token-flow visual

Motion is lightweight and respects `prefers-reduced-motion`. The site still has no build step and no external image dependency for these illustrations.
