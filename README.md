# TWIRLYVERSE — Adrien aka Twirly

A personal portfolio built with React, Vite and Framer Motion. The visual direction is editorial: warm paper tones, expressive typography, original CSS artwork and a paired light/dark theme.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Content

Edit identity, project links, project descriptions, technology groups and setup details in `src/config.js`.

## Design and accessibility

- Light and dark themes are selectable and saved in local storage.
- The first visit follows the operating system colour preference.
- Motion uses Framer Motion and respects reduced-motion preferences.
- Layouts adapt for mobile, tablet and desktop.
- Project artwork is original CSS illustration, not presented as real product screenshots.

## Deployment

The repository includes a Render Blueprint in `render.yaml`. Review the deployment in Render after merging; this branch does not deploy automatically as part of the implementation.
