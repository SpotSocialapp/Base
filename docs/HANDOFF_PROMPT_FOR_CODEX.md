# Prompt to Give Codex

You are implementing the BASEmd launch handoff package. Work from the files in `BASEmd_Codex_Handoff/`.

## Production target

Host the website at:

```text
https://strategic500.com/BASEmd/
```

## Required deliverables

1. Deploy the website in `website/` to `/BASEmd/`.
2. Verify the homepage is styled and does not render as raw/unstyled HTML.
3. Preserve the BASEmd logo and red/black/white branding.
4. Use `website/design-reference/BASEmd_homepage_reference.png` as the design starting point.
5. Keep the site close to the model-site conversion architecture: strong hero, product/program navigation, program cards, how-it-works steps, trust/quality section, CTA banner, footer disclaimers.
6. Do not copy EllieMD text, images, code, testimonials, or specific brand elements.
7. Confirm all relative assets load at `/BASEmd/assets/...`.
8. Keep CTAs wired to placeholder anchors/mailto until production intake URL is supplied.
9. Preserve compliance language: BASEmd is a brand/access platform and does not provide care, prescribe, dispense, interpret labs, or hold inventory.
10. Review `financial_model/BASEmd_Proforma_GTM.xlsx` and confirm `Inputs!B5` is the user-adjustable marketing budget driver.

## QA before completion

- Open `/BASEmd/` on desktop and mobile.
- Check browser console for 404s and JavaScript errors.
- Confirm logo, hero image, program card images, CSS, and script load.
- Confirm header nav and mobile menu work.
- Confirm footer disclaimer is visible.
- Change `Inputs!B5` in the workbook and confirm forecast outputs change.
- Do not introduce drug-specific claims, guaranteed outcomes, body-shaming, or before/after language.
