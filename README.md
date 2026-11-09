# Nervous System — Practice Tests

Two self-grading practice tests, switchable with the tabs at the top
(link straight to one with `#basics` or `#brain`). Built from the same
engine as the geometry practice tests.

**Nervous System Basics** (16 questions, `basics.js`): CNS vs. PNS,
somatic vs. autonomic (sympathetic/parasympathetic), the three general
functions (sensory, integrative, motor), spinal cord functions,
ascending/descending tracts, gray vs. white matter, and
sensory/motor/mixed nerves.

**Brain Anatomy & Histology** (20 questions, `brain.js`): the meninges
(dura, arachnoid, pia mater), cerebrum structures (corpus callosum,
gyrus/sulcus/fissure, brain stem), the four lobes and their functions,
Broca's & Wernicke's speech areas, neuron structure (dendrites, axon,
myelin sheath), and neuron types (multipolar, bipolar, unipolar).

No build step, no dependencies — just static HTML/CSS/JS.

## Use it locally

Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Features

- Click **Check Answer** on any question for an immediate right/wrong
  mark, the full worked explanation, and — if it's wrong — a note aimed
  at the specific misconception (e.g. mixing up CNS/PNS, somatic vs.
  autonomic, which lobe does what, etc.).
- Running score pill + progress bar at the top.
- Number strip to jump to any question; it turns green/red once that
  question has been checked.
- **Finish & Show Summary** gives a score breakdown by topic, so it's
  easy to see which topic needs more review.
- **Print / Save as PDF** uses the browser's print dialog with a
  dedicated print stylesheet — choose "Save as PDF" as the destination.
  Print it blank to practice on paper, or print it after answering to
  keep a record with every solution.

## Deploying to GitHub Pages

1. Create a new **public** GitHub repository (e.g. `anatomy-practice-test`).
2. Push these files to the `main` branch:
   ```
   git init
   git add .
   git commit -m "Nervous system practice test"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source: Deploy from a branch → Branch: main / (root)** → Save.
4. GitHub gives you a URL like
   `https://<username>.github.io/<repo>/` within a minute or two.

## Editing / adding questions

All question content lives in `basics.js` (`BASICS_QUESTIONS`) and
`brain.js` (`BRAIN_QUESTIONS`) as plain JavaScript arrays — each entry
has a prompt, answer choices, a full worked explanation, and notes for
common wrong answers. Add a new object to either array following the
same shape to extend the test; no other file needs to change.
