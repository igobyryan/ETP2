# Brief 8 — Open decisions scan (read-only findings)

Read-only scan. No files were edited. Line numbers are current as of this scan.

---

## A. "Human-environment system" terminology (Row 8)

**Total: 29 occurrences across 22 lines in 5 files — all in the Systems Thinking section.**
Zero occurrences in ingredient pages, story pages, community-sessions pages, `index.html`, `about.html`, or `foundations.html`.

| File | Occurrences | Lines (count per line) |
|------|-------------|------------------------|
| `systems-thinking-map.html` | 7 | 136, 159, 160, 179, 180, 181 |
| `systems-thinking-understand.html` | 7 | 123, 131, 133 (×3), 134 (×2) |
| `systems-thinking-reverse.html` | 7 | 162 (×2), 186, 232, 233, 242, 243 |
| `systems-thinking-recognize.html` | 5 | 117, 148 (×2), 150, 151 |
| `systems-thinking-overview.html` | 3 | 50 (×2), 85 |

Formatting note: the phrase is wrapped in `<em>` on its first appearance per page and left plain on every later use (see item B).

### Surrounding sentences

**systems-thinking-overview.html**
- L50: "…Those well chosen sites of intervention are *EcoTipping Points*, or points in the *human-environment system* where a turnabout can be generated if the right changes are set in motion." …and… "Not all restorative actions carry enough force to tip conditions in the human-environment system from decline to restoration…"
- L85: "Review the history of the problem and assess the current situation to bring to light the interconnected elements perpetuating decline in the human-environment system."

**systems-thinking-understand.html**
- L123: "Positive EcoTipping Points are points in a human-environment system where carefully directed actions can set in motion changes that generate a turnabout from decline to restoration and sustainability."
- L131: "*Systems Thinking* is a framework that looks at ecological decline as a consequence of interconnected elements across the *human-environment system*."
- L133 (×3): "…the interconnected human-environment system can be in a harmonious or self-destructive state…" / "EcoTipping Points are points in a human-environment system where sets of actions have the power to propel the system from one of those states to another." / "…changes cascade through the human-environment system, spiraling it towards collapse or restoration."
- L134 (×2): "…the vicious cycles they set off become deeply integrated across the human-environment system, inseparable from the workings of the community." / "…a chain of self-reinforcing restorative impacts that cascade change through the human-environment system, creating a turnabout from decline to restoration."

**systems-thinking-recognize.html**
- L117: "Review the history of the problem and assess the current situation to bring to light the interconnected elements perpetuating decline across the human-environment system."
- L148 (×2): "Systems thinking looks at ecological decline as a set of interconnected elements across the *human-environment system*, tied together by causal relationships…" / "How elements spread across the human-environment system are connected is rarely immediately apparent…"
- L150: "A clear goal of reviewing the history of the problem and assessing the current situation can help bring to light the interconnected elements perpetuating decline in the human-environment system."
- L151: "…the interconnection of different parts of the problem spread across the human-environment system emerged from storytelling and discussion among community members."

**systems-thinking-map.html**
- L136: "Come away with a boxes-and-arrows diagram that exposes the relationships of cause and effect across the human-environment system and shows where vicious cycles are driving decline."
- L159: "They expose the relationships of cause and effect spread across the *human-environment system*, and the potential sites for intervention."
- L160: "And where are they located in the human-environment system?"
- L179: "…we use **rectangles** for actions taken by the community and **ovals** for their resulting impacts on the human-environment system."
- L180: "…the negative tipping point lever responsible for setting in motion a shift in the human-environment system." (also "connections that are currently cycling through the human-environment system" later in the same paragraph)
- L181: "These amplifying vicious cycles intensify impacts with such force that destructive changes cascade through the human-environment system and perpetuate decline."

**systems-thinking-reverse.html**
- L162 (×2): "Systems thinking looks at ecological problems as a web of cause and effect spread through the *human-environment system*." / "…replace them with *virtuous cycles* that cascade restoration through the human-environment system."
- L186: "Recognized the interconnected elements of their problem and amplifying feedback loops driving decline in the human-environment system" (bullet)
- L232: "…grounded in how ecosystems function on their own and as part of the human-environment system."
- L233: "Those human-environment systems have been sustainable because enough of the choices made about how to build the society were also good for the ecosystem they relied upon."
- L242: "A diagram of the problem is essential for devising a positive tipping point lever, because it shows where in the human-environment system the feedback loops driving decline can be reversed."
- L243: "…a transformation there could spiral change through the human-environment system."

### Related inconsistency
The **glossary** (`glossary.html`) spells the term with a slash — "Human/environment system" (heading) and "human/environment system" (7× in definitions) — never the hyphenated form used everywhere in prose.

---

## B. Defined-terms formatting (Row 9)

**No single system. Three unconnected treatments:**

1. **Prose (Systems Thinking pages only): italic `<em>` on first mention, plain thereafter.**
   Used in `systems-thinking-understand.html` (7×), `-reverse.html` (6×), `-map.html` (4×), `-overview.html` (4×), `-recognize.html` (3×). Terms seen in `<em>`: *human-environment system* (5), *vicious cycles* (5), *virtuous cycles* (3), *feedback loops* (3), *tipping point levers* / *positive tipping point lever(s)* / *negative tipping point lever* (4 total), *Systems Thinking* (1), *EcoTipping Points* (1). Casing is inconsistent ("*Vicious cycles*" capitalised once). Application is ad hoc — not every first mention is tagged, and the same terms appear untagged on pages that never introduce them in `<em>` (e.g. `systems-thinking-lock.html`, all `ingredient-*.html`).
   `<em>` is also used for non-term purposes: a foreign phrase (*bantay dagat*, `story-apo-island.html` ×2) and one fully-italicised intro paragraph (`systems-thinking-recognize.html`).

2. **Glossary (`glossary.html`): bold `<dt>`.** A `<dl class="glossary">` with `<dt>` styled `font-weight: 700; color: var(--color-forest); font-size: var(--text-lg)`. ~13 terms defined (System, Systems thinking, Social system, Ecosystem, Human/environment system, EcoTipping point, tipping point levers, vicious/virtuous cycle, etc.).

3. **No links between the two.** Nothing in any page links to `glossary.html` except the top-nav "Resources" menu item (`nav.js:157`). No `<dfn>`, no `abbr`, no `.term`/glossary-link class anywhere in `styles.css`.

`<strong>` in body copy is reserved for structural labels, not concepts — e.g. "**Community partner:**", "**Materials:**", ingredient names in lists, pitfall headings, "**rectangles**"/"**ovals**".

---

## C. Video CTA design (Row 7)

**No shared "watch video" component. Five different patterns:**

| Pattern | Where | Implementation | Opens |
|---------|-------|----------------|-------|
| Real YouTube embed | `foundations.html` (6 videos) | `<iframe>` + YouTube IFrame API script | Embedded in page |
| Real YouTube embed | `story-apo-island.html` (3), `story-gopalpura.html` (1), `story-khao-din.html` (1), `story-punukula.html` (1) | `<div class="video-embed"><iframe src="youtube.com/embed/…?rel=0">` | Embedded in page |
| Placeholder embed box | `systems-thinking-understand.html`, `-recognize.html`, `-map.html`, `-reverse.html` (one each) | `<div class="mi-embed">` with `<img>` still, `<span class="mi-embed-tag">EMBED FOUNDATIONS VIDEO #N</span>`, and `<p><a href="#">Read Script</a></p>` — the link is a dead `#` anchor | Nothing wired up |
| Intro text + static image | `systems-thinking-understand.html:141`, `-map.html:167`, `-reverse.html:171` under "Seeing the System in Action" | `<p><strong>Question?</strong> This video illustrates…</p>` + `<figure>` with placeholder `<img>` (image15/19/28) and an italic `<figcaption>` "Video: …". No link, no embed. | Nothing wired up |
| Plain inline text link | `systems-thinking-recognize.html:149`, `-map.html:172` & `:259`, `-reverse.html:164` & `:258` (the 5 "For context:" links added in Brief 9) | `<p>For context: <a href="story-….html">Watch the … story …</a> (N min)</p>` — points to the story page, not a video directly | Same tab |
| "See It In Action" (not video) | all 10 `ingredient-*.html` | `<h3>See It In Action</h3>` + `.story-carousel` with `<a href="story-….html" class="btn btn-outline">Read Full Story →</a>` | Same tab |

`systems-thinking-overview.html:72` also has a bare `<div class="placeholder">Video players: the two case-study story narratives.</div>`.

**Nothing opens in a new tab.** No `target="_blank"` on any video-related or story link. Real embeds use `?rel=0` (and Foundations adds `modestbranding=1&cc_load_policy=1`).

---

## D. Case studies — "One of many stories…" line (Row 35)

**Appears on all 4 story pages, identical text and markup:** `story-apo-island.html:41`, `story-gopalpura.html:41`, `story-khao-din.html:41`, `story-punukula.html:41`.

- **Text:** "One of many stories of communities who reversed ecological collapse, drawn on throughout the Ingredients for Success and Systems Thinking tools."
- **Position:** inside `<section class="story-lede">`, as the 2nd element — directly **between the first and second `<p class="lead">` paragraphs**, immediately below the video embed, near the top of the article body.
- **Element / styling:** a `<p>` with inline styles only, no class:
  `font-size: var(--text-sm); color: var(--text-tertiary); font-style: italic; margin: calc(-1 * var(--space-md)) 0 var(--space-lg);`
  (small, muted, italic; negative top margin pulls it up tight under the opening lead paragraph.)

---

## E. "Who Holds the Knowledge" phrasing (Row 11)

**One occurrence:** `systems-thinking-overview.html:108`, an `<h3>` inside `<div class="callout callout-light">`, positioned after the five step cards (Understand/Recognize/Map/Reverse/Lock) and just before the closing "Get Started: Understand It" button.

Full block:

> **Who Holds the Knowledge**
> The knowledge is already in the community. Elders remember what the land and water looked like before the decline began. **Women often hold detailed knowledge of how the ecosystem functions day to day.** Young people understand current conditions and pressures. The systems thinking process draws that knowledge out and organizes it into a shared picture no single person could build alone.

- **Gender/women reference:** the single sentence "Women often hold detailed knowledge of how the ecosystem functions day to day," part of a three-part parallel (Elders … / Women … / Young people …).
- No other women/gender phrasing sits near this heading. (Elsewhere, unrelated: `systems-thinking-recognize.html:148` "men leaving their failed crops in Rajasthan villages" / "the departed men," and `:151` "if one elder had not shared **his** memories from childhood.")
