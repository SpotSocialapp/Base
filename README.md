# BASEmd Codex Handoff Package

This package contains the implementation handoff for BASEmd.

## Final deployment target

`https://strategic500.com/BASEmd/`

## Main files

- `presentation/BASEmd_Reality_Roadmap.pptx`
- `financial_model/BASEmd_Proforma_GTM.xlsx`
- `website/index.html`
- `website/README_DEPLOY.md`
- `docs/CODEX_HANDOFF.md`
- `docs/HANDOFF_PROMPT_FOR_CODEX.md`

## Workbook driver

Change:

`Inputs!B5 = Monthly Paid Media Budget`

The revenue model and dashboard update from that input.

## Website note

The prior homepage mockup rendered as unstyled HTML. The current website package includes a corrected `index.html`, `styles.css`, `script.js`, and local assets. Deploy the contents of `website/` to `/BASEmd/`.
