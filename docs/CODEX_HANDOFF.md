# BASEmd Codex Handoff

## Objective

Build the BASEmd launch package for `https://strategic500.com/BASEmd/`.

This project has five required deliverables:

1. Branded presentation showing the steps required to make BASEmd real.
2. Formula-driven proforma workbook with startup costs, timeline, projected revenue, GTM plan, and mock ads.
3. Genuine GTM marketing plan.
4. Mock ad testing matrix.
5. Website built from the latest BASEmd homepage mockup direction and hosted at `/BASEmd/`.

BASEmd should be positioned as a **brand, marketing, education, access, and non-clinical support platform**. It must not appear to be the medical provider, pharmacy, lab, prescriber, or inventory holder.

---

## Source files in this handoff

```text
BASEmd_Codex_Handoff/
  README.md
  docs/
    CODEX_HANDOFF.md
    HANDOFF_PROMPT_FOR_CODEX.md
  presentation/
    BASEmd_Reality_Roadmap.pptx
  financial_model/
    BASEmd_Proforma_GTM.xlsx
  website/
    index.html
    styles.css
    script.js
    README_DEPLOY.md
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
      previous_blank_mockup_issue.png
```

---

## Website build requirements

Production path:

```text
https://strategic500.com/BASEmd/
```

Deploy the contents of `website/` into the `/BASEmd/` directory. Use relative asset paths so the site works in both local preview and production.

### Required page sections

1. Header with BASEmd logo, navigation, Sign In, and Get Started.
2. Hero: “Build your next baseline.”
3. Trust strip:
   - Clinical review required
   - No inventory held by BASE
   - Partner fulfillment
4. Program cards:
   - Medical Weight Management
   - Hormone Optimization
   - Peptide + Longevity Consults
   - Performance Labs
   - Men’s Health
5. Three-step process:
   - Health Assessment
   - Provider Evaluation
   - Partner Pharmacy & Fulfillment
6. Why BASEmd / quality section.
7. Education section with copy guardrails.
8. Partner model section.
9. CTA banner.
10. Footer with program links, company links, resources, account links, and compliance disclaimer.

### Important

The previous mockup rendered as unstyled HTML for the user. Fix this permanently:

- Confirm `styles.css` loads.
- Confirm `assets/basemd-logo-wide.png` loads.
- Confirm all homepage card images load.
- Confirm the homepage does not display as raw/unstyled text.
- Confirm mobile navigation works.
- Confirm the page looks professional at desktop and mobile breakpoints.

---

## Presentation requirements

Use `presentation/BASEmd_Reality_Roadmap.pptx`.

The deck must remain branded around BASEmd and should communicate:

- What BASEmd is and is not.
- Legal and operating steps to make it real.
- Partner stack.
- Website/funnel target.
- 90-day launch timeline.
- Startup cost structure.
- Proforma logic tied to marketing spend.
- GTM plan.
- Mock ads and compliance guardrails.
- Codex implementation scope.
- Risk register.
- Next 10 actions.

Update the deck if the financial model changes materially.

---

## Proforma workbook requirements

Use `financial_model/BASEmd_Proforma_GTM.xlsx`.

Workbook tabs:

- Dashboard
- Inputs
- Revenue Model
- Startup Costs
- Timeline
- GTM Plan
- Mock Ads
- Sources

Primary editable input:

```text
Inputs!B5 = Monthly Paid Media Budget
```

Changing `Inputs!B5` should update:

- monthly marketing spend,
- impressions,
- clicks,
- assessments,
- clinical starts,
- active members,
- revenue,
- CAC,
- EBITDA,
- dashboard KPIs.

Do not hardcode dashboard metrics. Preserve formulas.

---

## GTM plan requirements

The GTM plan should be real, not generic. It must include:

- channel strategy,
- audience strategy,
- budget allocation guidance,
- funnel KPI gates,
- launch testing plan,
- scale criteria,
- compliance notes.

Primary channels:

- Google Search
- Meta/Instagram
- SEO and clinician-reviewed education content
- Email/SMS nurture
- Partnerships with gyms/coaches/races/clinics
- YouTube/long-form education
- Retargeting only if privacy-approved

Scale only after CAC, assessment quality, partner capacity, and retention are visible.

---

## Mock ads requirements

The `Mock Ads` tab includes compliant ad angles. Preserve or expand with:

- channel,
- objective,
- audience,
- hook,
- primary text,
- headline,
- CTA,
- visual direction,
- compliance guardrail.

Avoid:

- guaranteed weight-loss claims,
- guaranteed prescription access,
- body-shaming,
- before/after imagery,
- diagnosis in ad copy,
- unapproved research peptide promotion,
- direct claims that testosterone improves performance,
- per-prescription partner economics.

---

## Compliance posture

BASEmd copy should state:

> BASEmd is a brand and access platform. Clinical decisions, prescribing, lab interpretation, and pharmacy fulfillment are handled by independent licensed providers, labs, and pharmacy partners.

Before public launch, healthcare counsel should approve:

- partner contracts,
- revenue model,
- landing page copy,
- program pages,
- ad copy,
- privacy policy,
- telehealth consent,
- tracking/pixel setup,
- support SOPs.

---

## Acceptance criteria

### Website

- Deployed at `https://strategic500.com/BASEmd/`.
- Loads styled layout, not raw HTML.
- Header logo visible.
- Program cards render with images.
- CTA buttons visible.
- Mobile responsive.
- Footer disclaimer visible.
- All assets return 200.
- No copied EllieMD text/images/code.

### Workbook

- `Inputs!B5` changes update the forecast.
- Dashboard formulas work.
- Revenue Model formulas have no `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, or `#N/A`.
- Startup costs and timeline are populated.
- GTM Plan and Mock Ads tabs are populated.
- Sources tab includes compliance source URLs.

### Presentation

- Branded deck opens cleanly.
- No broken images.
- Steps, cost structure, GTM, risks, and Codex scope are clear.
- Website target and host path are included.

---

## Recommended development order

1. Deploy website package locally and verify CSS/images.
2. Push website to `/BASEmd/` staging path.
3. QA desktop/mobile.
4. Validate workbook formulas after changing `Inputs!B5`.
5. Review GTM and mock ads with counsel.
6. Update presentation with any changed numbers.
7. Push final package to Strategic500 project storage.
