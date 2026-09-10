# ETP Changelog — v3.5.0

Organized by brief number.

## Brief 1 — Batch text removals and naming fix

**Task 1 — Remove "EcoTipping Points in Action" label** (removed the `EcoTipping Points in Action: ` prefix from the `<strong>` lead-in, keeping the question + description)

- `systems-thinking-understand.html` — "What are EcoTipping Points?"
- `systems-thinking-map.html` — "How do vicious cycles cause collapse?"
- `systems-thinking-reverse.html` — "How can the right set of actions become a positive tipping point lever?"

**Task 2 — Remove misplaced Foundations video 3**

- `systems-thinking-understand.html` — deleted `<div class="placeholder">Foundations video #3 goes here.</div>` above the "Environmental losses…" paragraph; closed up the stray blank line.

**Task 3 — "Gopalpura, Rajasthan" on first mention**

- Clean `, Rajasthan` inserts: `ingredient-harmony-ecosystem.html`, `ingredient-outside-stimulation.html`, `ingredient-social-ecological-memory.html`, `ingredient-social-ecological-diversity.html`, `community-sessions-reverse-it.html`, `systems-thinking-reverse-practice.html`
- Reworded first mention (possessive/adjectival cases): `ingredient-mobilizing-commitment.html`, `ingredient-building-resilience.html`, `ingredient-shared-awareness.html`, `ingredient-enduring-commitment.html`
- Left untouched by decision: `index.html`, `story-gopalpura.html` (follow the site's "Place, Country" convention)

**LLM tells pass fixes**

- `ingredient-harmony-ecosystem.html` — participial tail removed: "came back, adding labor for further restoration" → "came back and added labor for further restoration"
- `ingredient-building-resilience.html` — two length-clustered sentences joined with "while" (kept "protected against erosion")

## Footer version bump (additional task)

- `nav.js` — version string `v0.6.6.0 · 8/27/26` → `v0.6.7.0 · 9/8/26`; added `v0.6.6.0` archive link (`Archive/v0.6.6.0/index.html`) ahead of `v0.6.5.2` and `v0.6.4.1`.

## Brief 2 — Reverse It content cleanup

- `systems-thinking-reverse.html` — removed the Apo Island positive-tip step-by-step:
  - Deleted the "In the case of Apo Island, they devised a positive tipping point lever by creating a marine sanctuary on 10%…" paragraph
  - Deleted the three Apo images (`image31`, `image30`, `image29`) and the Apo figcaption from the following figure
  - Kept `image18`, `image33`, `image32` as their own figure (now caption-less — caption handled separately)
  - Kept the generic `<ol class="mi-flow">` list and the generic `image6/5/20` figure
- Task 2 ("Apo Find a Lever" section) — no-op; that content never reached HTML. Tasks 1 and 2 collapsed into the single removal.
- LLM tells pass — flagged a pre-existing em dash in retained `image18` alt text; left unchanged by decision (consistent alt-text style across the sequence).

## Brief 3 — Glossary and Resources

**Task 1 — New glossary definition**

- `glossary.html` — added `Positive spin-offs` (`<dt>`/`<dd>`, verbatim approved text) after `Virtuous cycle`, before `Ingredients for Success`. Glossary is ordered conceptually, not alphabetically; placement chosen for conceptual fit with the neighboring cycle terms.

**Task 2 — Link glossary from Resources**

- `resources.html` — added `EcoTipping Points Glossary` → `glossary.html` link (`<h4>` + `<p>` subhead "Definitions of key terms used throughout the toolkit."), matching the existing EcoTippingPoints.org link formatting. Glossary previously had no inbound links anywhere on the site.
- Resources is real content (not placeholder), so nothing flagged.

**Additional edits (Ryan-directed, same pass)**

- `resources.html` — moved the EcoTippingPoints.org `<h4>` link above its descriptive paragraph.
- `resources.html` — replaced that paragraph with: "The EcoTipping Points website documents 38 in-depth case studies and 89 shorter narratives of communities that reversed environmental decline, covering agriculture, fisheries, forestry, water, energy, public health, and urban ecosystems across the globe. The site also hosts "How Success Works" instructional materials developed for K-12, university, and midcareer courses."

**LLM tells pass** — no issues; glossary text is verbatim approved, and the resources subhead/paragraph are Ryan-supplied wording.

## Brief 6 — Reverse It: pair each diagram with its description

`systems-thinking-reverse.html`, "This process can be described in the following way:" block (inside the "Devising a Positive Tipping Point Lever" step).

- Replaced the `<ol class="mi-flow">` (5 descriptions listed together) + two multi-image `<figure>` blocks with a single `<ol class="mi-mapseq">`, one `<li>` per step, each holding its description `<p>` and its `<figure>` — matching the Map It page pattern.
- Image-to-description mapping (per Ryan): 1 → image6, 2 → image5, 3 → image20, 4 → image18, 5 → image33 + image32 (item 5's figure carries both community-enterprise diagrams).
- Item 4 description reworded per Ryan: "A healthier ecosystem…" → "And a healthier ecosystem…" (only text change; all other descriptions verbatim).
- Figure A's shared figcaption ("The reversal process: a recognised vicious cycle…") dropped per Ryan's decision; Figure B was already caption-less (caption pending separately). No mi-mapseq item has a figcaption.
- CSS: copied the `.mi-mapseq` rules verbatim from `systems-thinking-map.html` into this page's inline `<style>` block (`.mi-mapseq figure` near the figure rules; the counter/`> li` block after `.mi-flow`). No new classes invented.
- `.mi-flow` CSS left in place though now unused on the page (smallest-change; no refactor).
- LLM tells pass — no issues. Pre-existing em dashes remain in two moved `alt` strings (image6, image18) and "leveraging action" is retained domain wording; both left per standing decisions.

## Brief 7 — "Community Reversal Session" rename

- `systems-thinking-reverse.html` (line 145, `.mi-practice` div) — "How to run a community reversal session:" → "How to run a community session for Reverse It:". Rest of the sentence unchanged.
- Repo-wide grep for "community reversal session" (case-insensitive): only one other hit, in `Archive/v0.6.6.0/systems-thinking-reverse.html` — left untouched (frozen release snapshot).
- LLM tells pass — no issues.

## Brief 10 — Homepage hero updates

`index.html` (hero + the two card sections below it).

- **Task 1 — hero text swap** (verbatim approved text; structure kept: `<h1>` tagline + `<p class="hp-lead">` intro):
  - `<h1>` "Powerful, achievable actions that tip the balance from decline to restoration." → "A practical guide for organizations facilitating ecological restoration at community scale."
  - `<p class="hp-lead">` "A practical toolkit for facilitating organizations working on community-scale ecological restoration, grounded in systems thinking and field experience across the rural Global South." → "The toolkit details a structured process for using systems thinking methods with local communities to find durable solutions for environmental decline that are most likely to succeed. Our approach has been validated by decades of field work across the rural global south." (note: approved text lowercases "global south".)
- **Task 2 — heading size** (per Ryan): `.hp-eyebrow` ("The EcoTipping Points Toolkit") font-size `12px` → `30px`, matching the `.hp-num` box numbers. Note: in the markup this string is the eyebrow above the `<h1>`, not the `<h1>` itself; enlarging it puts a 30px gold line above the 46px white tagline. Ryan chose this over also shrinking the `<h1>`.
- **Task 3 — remove box numbers and count labels:**
  - Deleted `<div class="hp-num">01/02/03</div>` from the Foundations, Systems Thinking, and Ingredients cards.
  - Deleted `<span class="hp-note">Three connected tools</span>` and `<span class="hp-note">Four documented cases</span>` from the two `.hp-head` blocks.
  - Kept card titles, card body text, and the "Four flagship stories from a growing archive of more than 100 documented cases." line. Cards and section headers still render correctly (no layout breakage).
  - `.hp-num` / `.hp-note` CSS rules left in place though now unused (smallest-change; no refactor).
- **Follow-up (Ryan):** `.hp-cards` grid `repeat(4, 1fr)` → `repeat(3, 1fr)`. With only three cards, the 4-column grid left them ~a quarter short of the container's right edge; three columns fill the full `.hp-wrap`, matching the "From the field" (`.hp-field`) width below.
- LLM tells pass — no issues. Hero text is approved verbatim.

## Brief 9 — "For context:" story links

Inserted (plain `<p>` in `mi-step-body`; "For context:" and "(N min)" plain, descriptive clause linked):

- `systems-thinking-recognize.html` — after the "men leaving Rajasthan villages" paragraph → `story-gopalpura.html`
- `systems-thinking-map.html` — end of "Seeing the System in Action" step → `story-apo-island.html`
- `systems-thinking-map.html` — after the complex Rajasthan diagram → `story-gopalpura.html`
- `systems-thinking-reverse.html` — end of "Solutions as Sets of Actions", before "Seeing the System in Action" → `story-apo-island.html`
- `systems-thinking-reverse.html` — after the "ancient forests had been clear cut" paragraph → `story-gopalpura.html`

Not done:

- **Link 6 (Lock It In)** — skipped; `systems-thinking-lock.html` has no Gopalpura content yet. Add when that content is built.
- "leverage points" (`systems-thinking-reverse.html`) — left as-is; domain term.

## Brief 11 — Ingredient sidebar story photos + "See It In Action" layout

All 10 ingredient pages (`ingredient-shared-awareness.html` first as the approved test, then the other nine).

**Photo assets:** `images/Ingredients_sidebar_photos/` — 10 numbered subfolders (`1_`–`10_`), 4 photos each, `<Place>_<ingredient>` naming with inconsistent case on both the place and the extension. During rollout Ryan (a) renamed `1_Outside Stimulation ` to drop its trailing space — refs updated to `1_Outside%20Stimulation/…`; (b) replaced `9_Memory/Gopalpura_memory.key` with `Gopalpura_memory.png` — that slide's `<img>` added.

**Per page:**
- Inline `<style>` block added after the `styles.css` link (kept page-scoped, not moved to `styles.css`, because `.sidebar-box.highlight` also appears on 4 non-ingredient pages that must not change):
  - `.sidebar-box.highlight h3` ("See It In Action"): global `h3` (`--text-2xl`) → `--text-base` (matches "↓ Download as PDF")
  - `.sidebar-box.highlight .carousel-slide h4` (story title): was `--text-xs` via `.sidebar-box h4` → `--text-xl` (matches "Ingredients for Success Tool")
  - `.sidebar-box.highlight .carousel-slide img`: `display:block; width:100%; height:auto; margin-bottom:var(--space-md)` — fills sidebar width, no crop, variable height
- Each carousel slide: removed the commented `<!-- carousel-slide-fpo -->` placeholder, inserted `<img … alt="">` **after** the `<h4>` (title → photo → text), matched by place (Apo/Khao Din/Punukula/Gopalpura → story-apo-island/khao-din/punukula/gopalpura).
- Story titles: em dash → colon on all four ("Marine Sanctuary: Philippines", "Agroforestry: Thailand", "Pesticide Trap: India", "Rainwater Harvesting: India").
- "Related Ingredients" `.sidebar-box` moved from the top of the main column (under the PDF-download box) to the bottom, after the last content block and before the "Learn More" callout. Markup/links unchanged.

**`styles.css`:** `.carousel-btn` height `40px` → `27px` (≈ 2/3; width kept at `40px`). Only the 10 ingredient pages use `.carousel-btn`.

**Carousel height:** the flexbox track takes the height of the tallest slide, so a portrait photo makes every slide that tall. Reviewed and kept as-is per Ryan.

**LLM tells pass:** title colons remove four em dashes (improvement); no new prose (images are `alt=""`). Pre-existing "navigating" in the lead paragraph of `ingredient-enduring-commitment.html` and `ingredient-overcoming-obstacles.html` was flagged and then fixed in Brief 11b.

## Brief 11b — "navigating" fixes from Brief 11 tells pass

- `ingredient-enduring-commitment.html` lead — "navigating early skepticism" → "working through early skepticism".
- `ingredient-overcoming-obstacles.html` lead — "strategies for navigating them" → "strategies for working through them".

## Brief 12 — "In the Field" callout: move into a real sidebar (Map It + Reverse It)

**Finding:** `systems-thinking-map.html` and `systems-thinking-reverse.html` had no sidebar at all. Their body was a single `<div class="mi-body">` column with the `.mi-practice` "In the field" box as its first child, styled `float: right; width: 300px` — so it sat beside "Your Goal" by design, not because of a broken tag. The only two pages with this callout pattern. The `*-practice` pages have their own `<aside class="sidebar">` (a "Previous/Next in Practice" box) and render fine.

**Fix (per Ryan — build the real sidebar):** on both pages,
- Wrapped the content in `<div class="two-col"><div class="mi-body main-content"> … </div>` and added `<aside class="sidebar">` after it, matching the `.two-col` layout the practice/ingredient pages use.
- Moved the `<div class="mi-practice">` block verbatim (label, `<h4><a>`, `<p>` — no copy changes) from the top of the column into the `<aside>`.
- Inline `<style>`: `.mi-body` padding `44px 52px 64px` → removed (`.two-col` now supplies outer padding + max-width + centering; `font-family` kept). `.mi-practice` `float: right; width: 300px; margin: 4px 0 18px 32px` → `margin: 0` (fills the 280px sidebar column). Removed the now-dead `@media (max-width: 48rem)` block (its two rules — `.mi-body` padding and `.mi-practice` float reset — no longer apply). `.mi-ingredients { clear: both }` left in place (harmless no-op now).

**Responsive note (flagged, not changed):** at ≤64rem `.two-col` collapses to one column, so the "In the Field" box now stacks at the **bottom** of the page on tablet/mobile. Previously it stacked at the top (full-width, above "Your Goal"). Standard sidebar-below-content behavior, but it is a position change on narrow screens — say if you want it kept near the top there.

## Files touched

| File | Briefs |
|------|--------|
| `systems-thinking-understand.html` | 1 |
| `systems-thinking-map.html` | 1, 9, 12 |
| `systems-thinking-reverse.html` | 1, 2, 6, 7, 9, 12 |
| `systems-thinking-recognize.html` | 9 |
| `systems-thinking-reverse-practice.html` | 1 |
| `ingredient-harmony-ecosystem.html` | 1, 11 |
| `ingredient-outside-stimulation.html` | 1, 11 |
| `ingredient-social-ecological-memory.html` | 1, 11 |
| `ingredient-social-ecological-diversity.html` | 1, 11 |
| `ingredient-mobilizing-commitment.html` | 1, 11 |
| `ingredient-building-resilience.html` | 1, 11 |
| `ingredient-shared-awareness.html` | 1, 11 |
| `ingredient-enduring-commitment.html` | 1, 11, 11b |
| `ingredient-letting-nature-work.html` | 11 |
| `ingredient-overcoming-obstacles.html` | 11, 11b |
| `community-sessions-reverse-it.html` | 1 |
| `glossary.html` | 3 |
| `resources.html` | 3 |
| `index.html` | 10 |
| `styles.css` | 11 |
| `nav.js` | footer bump |
