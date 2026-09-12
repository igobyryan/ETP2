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

**Follow-up (Ryan):** removed the `<div class="placeholder">Diagram placeholder: Apo Island map — completed map of the vicious cycles driving decline.</div>` box from the last step of the `.mi-mapseq` list on `systems-thinking-map.html`. Its step text (the `<li>`'s `<p>`) is kept; only the FPO box is gone. `.placeholder` CSS left in place (unused now, still referenced by the shared border-radius rule).

**Responsive note (flagged, not changed):** at ≤64rem `.two-col` collapses to one column, so the "In the Field" box now stacks at the **bottom** of the page on tablet/mobile. Previously it stacked at the top (full-width, above "Your Goal"). Standard sidebar-below-content behavior, but it is a position change on narrow screens — say if you want it kept near the top there.

## Brief 9 follow-up — "For context:" links restyled

The 5 "For context:" story links (Brief 9) reformatted to a two-line layout: an eyebrow label on its own line, the link on the next.

- New CSS rule `.mi-context-label` added to the inline `<style>` of `systems-thinking-map.html`, `systems-thinking-reverse.html`, `systems-thinking-recognize.html` — same declaration as `.mi-practice-label` ("IN THE FIELD" style: 11px, 700, `letter-spacing: 0.06em`, `#9c5a2b`, `text-transform: uppercase`) plus `display: block; margin-bottom: 3px`.
- Each `<p>For context: <a …>…</a> (N min)</p>` → `<p><span class="mi-context-label">For context</span><a …>…</a> (N min)</p>`. The "(N min)" stays inline after the link on the second line. Locations: map (×2), reverse (×2), recognize (×1).

## Brief — Replace Map It step-by-step images

`systems-thinking-map.html`, "Step by Step: Mapping a Negative Tipping Point on Apo Island" step + the "A More Complex Case in Rajasthan" figure.

- 9 new PNGs added to `images/systems-thinking/`: `map_it_workshop_1.png` … `map_it_workshop_9.png` (already in place).
- Swapped the `src` on the 9 `<figure><img>` in order: `image22 → workshop_1`, `image2 → 2`, `image1 → 3`, `image3 → 4`, `image4 → 5`, `image12 → 6`, `image11 → 7`, `image10 → 8`, `image9 → 9` (the last is the Rajasthan diagram). `alt` text unchanged; `<figure>`/`<img>` wrappers unchanged.
- Deleted the `<figcaption>` from all 9 of those figures.
- Left untouched: the video figure `image19.png` ("Seeing the System in Action"), the `image16.png` foundations-video embed box, all step `<p>` text, section headings/intros, and the Rajasthan "For context" link.
- The old files `image1.png`–`image4.png`, `image9.png`–`image12.png`, `image22.png` are now unreferenced anywhere in the live site (still present on disk and in `Archive/` — left in place, not deleted).

## Brief — Understand It: swap "generic diagram" for a YouTube video

`systems-thinking-understand.html`, "Seeing the System in Action" step.

- Replaced the `<figure>`'s `<img src="images/systems-thinking/image15.png">` + `<figcaption>GENERIC DIAGRAM</figcaption>` with a responsive YouTube embed: `<div class="video-embed"><iframe src="https://www.youtube.com/embed/dAwzXLs2GLo?rel=0" …></iframe></div>` (video "What are ecotipping points?", `@iamryanh`). `<figure>` wrapper kept; `.video-embed` styling comes from `styles.css` (16:9 responsive).
- `image15.png` now unreferenced in the live site (left on disk).

## Brief — Map It: de-indent and resize the numbered mapping steps

`systems-thinking-map.html` inline `<style>`, `.mi-mapseq` (the "Step by Step" numbered list).

- Root cause of the indent: `.mi-body ul, .mi-body ol { padding-left: 20px }` (specificity 0,1,1) was overriding `.mi-mapseq { padding: 0 }` (0,1,0). Bumped the selector to `.mi-body ol.mi-mapseq` (0,2,1) so `padding: 0` wins — the numbered items now sit flush-left with the "Step by Step" intro paragraph and the first (un-numbered) image above them.
- `.mi-mapseq` `max-width` `820px` → `760px`, matching `.mi-step-body` and the first image.
- Step number (`.mi-mapseq > li::before`) `font-size` `18px` → `16px`; added explicit `font-size: 16px` to `.mi-mapseq > li p` — both now match the intro paragraph's body size.

## Brief — Reverse It: replace the last Rajasthan diagram + drop its caption

`systems-thinking-reverse.html`, last `<figure>` on the page ("Finding Powerful Actions for Strategic Points in the System" step).

- Swapped only the **last** `<img>` in that figure: `image25.png` → `reverse_it_rajasthan_6.png` (alt kept). The five images above it (`image7`, `image8`, `image21`, `image23`, `image24`) are untouched.
- Deleted the `<figcaption>` ("Rajasthan, Reverse It: the negative lever — logging the forest…").
- `image25.png` now unreferenced in the live site (left on disk / in `Archive/`).

## Brief — About page: replace placeholder copy

`about.html`, the `.content-block`.

- Removed all placeholder content: 4 `<div class="placeholder-box">Content pending…</div>` blocks, the `<h2>Gerry Marten</h2>`, the "Fieldwork researcher / Writer / Professor / Awards" `<h3>`s, and the interim "Writer" paragraph.
- Replaced with the approved copy: `<h2>About EcoTipping Points</h2>` + 4 `<p>` paragraphs. Markdown links converted to `<a … target="_blank" rel="noopener">` (repo's external-link convention): ecotippingpoints.org, gerrymarten.com/experience, gerrymarten.com/articles-chapters, the two book URLs (title text wrapped in `<em>` inside the link). `content-block` `max-width: 680px` kept. (Final paragraph revised once by Ryan: "distills lessons from those cases … study of relationships between people and their environments … decades of fieldwork".)
- `.placeholder-box` no longer used on this page (CSS left in `styles.css`).
- LLM tells pass — clean; copy is approved verbatim.

## Brief — Reverse It: "Seeing the System in Action" video swap

`systems-thinking-reverse.html`, "Seeing the System in Action" step.

- Removed the trailing parenthetical " (Apo positive tip, Part 1.)" from the intro `<p>` (now ends "…with a few well chosen actions.").
- Replaced `<img src="images/systems-thinking/image28.png">` with a YouTube embed (`<div class="video-embed"><iframe src="https://www.youtube.com/embed/OHgXMIKKOrY?rel=0" …></iframe></div>`), `<figure>` wrapper kept.
- Deleted the `<figcaption>` ("Video: Apo Island Fisheries — a virtuous cycle towards restoration.").
- `image28.png` now unreferenced in the live site (left on disk). Note: could not verify the new video ID via oembed (403) — worth a quick check that it plays/embeds.

## Brief — Map It: "Seeing the System in Action" video swap

`systems-thinking-map.html`, "Seeing the System in Action" step.

- Replaced `<img src="images/systems-thinking/image19.png">` with a YouTube embed (`<div class="video-embed"><iframe src="https://www.youtube.com/embed/oiodLWrhS_8?rel=0" …></iframe></div>`), `<figure>` wrapper kept.
- Deleted the `<figcaption>` ("Video: Apo Island Fisheries — a vicious cycle towards collapse."). No figcaptions remain on the page.
- Intro `<p>` and the "For context" link below are unchanged. `image19.png` now unreferenced in the live site (left on disk). Supersedes the earlier "leave image19 alone" note in the step-by-step image-swap brief.

## Brief — Glossary: "human/environment" → "human-environment"

`glossary.html` was the only live page using the slash form. Changed all 8 occurrences to the hyphen to match the systems-thinking pages: the `<dt>Human-environment system</dt>` term plus 7 `<dd>` uses (EcoTipping Points, Negative/Positive tipping point lever, Negative/Positive tip, Vicious cycle, Virtuous cycle). No other text changed. `Archive/` copies left as-is.

## Brief 13 — Lock It In: full page rebuild on the V3.5 content

`systems-thinking-lock.html` — replaced wholesale, structured on the `systems-thinking-reverse.html` template.

- **Head/style:** copied reverse's inline `<style>` block; removed the `.mi-practice` rule and its entry in the "squared corners" list (no sidebar). Other unused rules (`.mi-mapseq`, `.mi-flow`, `.mi-btn`, `.placeholder`, `.mi-embed`) kept verbatim per the brief's "copy exactly". Title set to "Lock It In - Systems Thinking - EcoTipping Points".
- **Layout:** subnav with `Lock It In` active; `page-header` (label / h1 "Lock It In" / `p.intro`); `two-col` > `mi-body main-content` with **no `<aside>`** and **no "Next Steps"** step (terminal page).
- **Content (verbatim from brief):** `mi-intro` "Your Goal" + 8 `mi-step` sections — How Gains Get Locked In (with an `mi-apo` "ON APO ISLAND" callout: three `<h4>` + `<p>` arrow-chain cycles using `→` / `↺` verbatim, then "The Result:" paragraph); Seeing the System in Action (YouTube `video-embed` iframe); a standalone `mi-reflect` Key Concept box; a standalone `mi-ingredients` box; Planning for Positive Spin-Offs (bulleted list, `ingredients-overview.html` link on "Our Ingredients for Success tool", `mi-context-label` "For context" link to `story-gopalpura.html`); Mobilizing Community Commitment; Enduring Commitment of Local Leadership; Ecological and Social Diversity; Overcoming Social Obstacles; Building Resilience (7 separate `<p>`, not a list).
- **Filename fixes:** brief's `ingredient-enduring-leadership.html` doesn't exist → linked `ingredient-enduring-commitment.html` (link text unchanged). All other links verified.
- **Gopalpura naming:** first mention reads "Gopalpura, Rajasthan" (Section 3 transition line); all later mentions "Gopalpura". No "Golpapura" in the output.
- Old `Videos/LOCK IT IN_Apo.mp4` (~49 MB) + poster now unreferenced (page uses the YouTube embed).

Section 2 video corrected by Ryan after the rebuild: `dAwzXLs2GLo` (which is the Understand It video) → `1E76zoe6buw`.

Section 6 "Gram Sabah" → "Gram Sabha" (typo fix, matches rest of site) — per Ryan.

Section 8 spaced en dashes converted to parentheses (per Ryan, matching the site's prose-dash cleanup):
- "adaptive capacity – its openness … learned – plays a major role" → "adaptive capacity (its openness … learned) plays a major role".
- "positive change – more water … aquifer – and the related social benefits (e.g., men returning to the village) ensured…" → "positive change (more water … aquifer) and the related social benefits, such as men returning to the village, ensured…" (the inner "(e.g., …)" recast to a comma clause to avoid nested parentheses).
No en dashes remain in the page's prose.
- `two-col` with only `main-content` renders fine, but leaves the 280px sidebar column empty — content sits in a ~900px column with blank space on the right. Not broken; flag if you want it to use full width.

## Brief 14 — Multi-page text swaps and structural fixes

**Item 1 — Understand It video intro swap**

- `systems-thinking-understand.html` — "Seeing the System in Action": `<strong>What are EcoTipping Points?</strong> This video illustrates how EcoTipping Points occur through chains of cause and effect." → `<strong>How Feedback Diagrams Reveal Root Causes and Solutions.</strong> This video uses 'boxes and arrows' diagrams to show how circular chains of cause and effect drive both environmental decline and the success of interventions that tip a human-environment system toward restoration and sustainability."

**Item 2 — Homepage hero text swap**

- `index.html` (`.hp-lead`) — "find durable solutions for environmental decline that are most likely to succeed" → "devise effective and durable solutions for reversing environmental decline"; "field work" → "field experience"; "global south" → "global South".

**Item 3 — Lock It In: new "Ingredients for Success" closing section**

- `systems-thinking-lock.html` — added a `mi-step` section after Building Resilience, matching the Reverse It page's "Next Steps" pattern exactly (`<h3 style="margin:0;">`, `mi-step-body` paragraph, `mi-btn` link) → `ingredients-overview.html`.

**Item 4 — Ingredients Overview: removed bottom callout**

- `ingredients-overview.html` — deleted the `callout callout-light` box ("Using Ingredients with Systems Thinking" + two paragraphs + "Explore Systems Thinking Tool" button). Containing `<section>` kept (holds other content); no empty wrapper left behind.

**Item 5 — Homepage: "flagship" → "success"**

- `index.html` — "Four flagship stories from a growing archive of more than 100 documented cases." → "Four success stories…".

**Item 6 — Story pages: repositioned "One of many stories" line**

- `story-apo-island.html`, `story-khao-din.html`, `story-punukula.html`, `story-gopalpura.html` — moved the small/muted/italic "One of many stories…" `<p>` from between the first and second `.lead` paragraphs (inside `.story-lede`) to right after `<div class="story-main">` opens, before `<div class="story-video">`. Text and inline styling unchanged.

## Brief 15 — Delete FPO video box from Systems Thinking Overview

- `systems-thinking-overview.html` — deleted the `<div class="placeholder">Video players: the two case-study story narratives.</div>` box, after the "we suggest watching these two videos…" paragraph. Containing `<div>` kept (holds the intro list/paragraphs above it); no empty wrapper left behind.

## Brief 16 — Glossary term tooltips (site-wide)

Built a `<dfn>` pattern for the 16 glossary terms: dotted underline on first mention per page, definition popover on hover (desktop) / tap (mobile), definitions carried in `data-definition` attributes.

**Shared CSS** (`styles.css`, appended at end) — `dfn` styling (dotted underline, `font-style: normal` override, `cursor: help`); `.dfn-popover` (fixed position, callout-style border/shadow, hidden by default via `.is-open`); `@media (max-width: 48rem)` block spanning near-full width with a `.dfn-popover-close` × button.

**Shared JS** (`nav.js`, new `initDfnPopovers()` function, called alongside the existing `initNav()/initSectionRail()/initFooter()`) — single reusable popover element appended to `<body>`; `window.matchMedia('(hover: none)')` branches desktop (mouseenter/mouseleave) vs touch (tap to open, tap-outside to dismiss); position computed from `getBoundingClientRect()`. No new `<script>` tag needed anywhere since `nav.js` already loads on every page.

**Automated find-and-wrap:** wrote a Python/BeautifulSoup script to scan `<p>` tags in main content only (excluding `<nav>`, `<footer>`, `<aside>`, `<figcaption>`, and boxes classed `callout`/`sidebar-box`/`sidebar-link-card`/`mi-reflect`/`mi-apo`/`mi-practice`/`mi-ingredients`/`page-header`/`page-header-content`), skipping text already inside `<a>/<strong>/<em>/<dfn>`, matching whole words/phrases (case-insensitive, natural plural allowed on the term's final word) with longest-term-first span-claiming so e.g. "Human-environment system" isn't double-claimed by bare "System." Wrapped the first surviving match per term per page; 121 `<dfn>` tags inserted across 27 pages.

**Decisions confirmed with Ryan before wrapping:**
- Hero/page-header `<p class="intro">` subtitles excluded from "main content" (they sit structurally outside the article/body container on every page type).
- `.mi-reflect` ("Key Concept") and `.mi-apo` ("ON APO ISLAND") boxes treated as callout boxes and excluded, despite not using the literal `callout` class.
- Plural matching allowed (e.g. "vicious cycle" also matches "vicious cycles") rather than exact-singular-only.
- `about.html` — manual override: skipped "System" (only candidate was "**Systems** ecologist Gerry Marten," a job title, not the glossary concept); no other candidate exists on that page.

**Terms with zero occurrences anywhere on the live site** (skipped on every page, definitions never used): `Negative tip`, `Positive tip`, `EcoTipping Point success story`. Only ever appear inside `glossary.html`'s own `<dd>` text.

**Pages with zero eligible matches** (untouched): `ingredient-enduring-commitment.html`, `ingredient-overcoming-obstacles.html` — every term mention on both is inside a nav link, a heading, or the "Learn More" `callout` box.

`glossary.html` itself excluded from scanning (its own definitions aren't self-referential).

## Files touched

| File | Briefs |
|------|--------|
| `systems-thinking-understand.html` | 1, video-swap, 14, 16 |
| `systems-thinking-map.html` | 1, 9, 9-fu, 12, img-swap, mapseq-style, video-swap, 16 |
| `systems-thinking-reverse.html` | 1, 2, 6, 7, 9, 9-fu, 12, img-swap, video-swap, 16 |
| `systems-thinking-recognize.html` | 9, 9-fu, 16 |
| `systems-thinking-lock.html` | 13, 14, 16 |
| `systems-thinking-reverse-practice.html` | 1, 16 |
| `systems-thinking-map-practice.html` | 16 |
| `ingredient-harmony-ecosystem.html` | 1, 11, 16 |
| `ingredient-outside-stimulation.html` | 1, 11, 16 |
| `ingredient-social-ecological-memory.html` | 1, 11, 16 |
| `ingredient-social-ecological-diversity.html` | 1, 11, 16 |
| `ingredient-mobilizing-commitment.html` | 1, 11, 16 |
| `ingredient-building-resilience.html` | 1, 11, 16 |
| `ingredient-shared-awareness.html` | 1, 11, 16 |
| `ingredient-enduring-commitment.html` | 1, 11, 11b |
| `ingredient-letting-nature-work.html` | 11, 16 |
| `ingredient-overcoming-obstacles.html` | 11, 11b |
| `community-sessions-reverse-it.html` | 1, 16 |
| `community-sessions.html` | 16 |
| `community-sessions-map-it.html` | 16 |
| `foundations.html` | 16 |
| `glossary.html` | 3, term-hyphen |
| `resources.html` | 3, 16 |
| `index.html` | 10, 14, 16 |
| `about.html` | about-copy, 16 |
| `styles.css` | 11, 16 |
| `nav.js` | footer bump, 16 |
| `ingredients-overview.html` | 14, 16 |
| `story-apo-island.html` | 14, 16 |
| `story-khao-din.html` | 14, 16 |
| `story-punukula.html` | 14, 16 |
| `story-gopalpura.html` | 14, 16 |
| `systems-thinking-overview.html` | 15, 16 |
