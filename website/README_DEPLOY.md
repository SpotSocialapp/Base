# BASEmd Website Deployment Notes

Target URL: `https://strategic500.com/BASEmd/`

## Files to deploy

Upload the contents of this `website/` folder to the `/BASEmd/` directory on `strategic500.com`.

Required structure:

```text
/BASEmd/
  index.html
  styles.css
  script.js
  assets/
    basemd-logo-wide.png
    hero-performance-couple.png
    card-weight.png
    card-hormone.png
    card-peptide.png
    card-labs.png
    card-men.png
    cta-dumbbells.png
  design-reference/
    BASEmd_homepage_reference.png
```

## Deployment rules

1. Keep paths relative. Do not add a `<base>` tag unless the app is converted to a framework router.
2. Confirm that `https://strategic500.com/BASEmd/assets/basemd-logo-wide.png` returns 200 before QA.
3. Confirm the homepage loads the stylesheet and does not show unstyled HTML.
4. Final intake and sign-in URLs are placeholders. Replace `mailto:` and anchor links with the production assessment / portal links.
5. Before launch, have healthcare counsel approve:
   - landing page copy,
   - assessment questions,
   - privacy policy,
   - telehealth consent flow,
   - ad tracking setup,
   - provider/pharmacy disclaimers.

## QA checklist

- Desktop viewport: 1440px, 1280px, 1024px.
- Mobile viewport: 390px and 430px.
- Header logo visible.
- Red CTA buttons visible.
- Program cards stack correctly on mobile.
- Footer disclaimer visible.
- All image assets return 200.
- No drug-specific promises, no guaranteed outcomes, no before/after content.
