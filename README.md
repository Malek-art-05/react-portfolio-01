<div align="center">

# Artem Machulenka · Portfolio

A minimal, animated personal portfolio featuring an interactive 3D ID card.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.180-000000?logo=threedotjs&logoColor=white)

</div>

---

## Overview

This is my personal portfolio: a single-page site that introduces who I am, my education, my skills and the projects I'm working on. The layout is a clean, centered single column, with a physics-driven lanyard ID card hanging beside it that visitors can grab, swing and flip.

## Features

- **Interactive 3D ID card**: a Three.js lanyard with real-time physics; drag it to swing it, click it to flip it
- **Typing intro**: the heading types and deletes its way from my full name to a nickname
- **Blur-fade animations**: sections fade in from a soft blur as they scroll into view
- **Data-driven content**: all text, projects and links live in plain JavaScript files, so no component code changes are needed to update the site
- **Responsive**: adapts from mobile to wide desktop screens, and respects the reduced-motion setting

## Tech Stack

| Area      | Tools                           |
| --------- | ------------------------------- |
| Framework | React 19                        |
| Build     | Vite 8                          |
| Styling   | Tailwind CSS 4                  |
| 3D        | Three.js                        |
| Icons     | Lucide                          |
| Linting   | ESLint (with React Hooks rules) |

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 20 or later.

```bash
git clone https://github.com/Malek-art-05/react-portfolio-01.git
cd react-portfolio-01
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

### Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
src/
├── assets/        Images (ID card faces, logos, project screenshots)
├── components/    Page sections and UI components
│   ├── Hero.jsx         Intro with the typing animation
│   ├── About.jsx, Education.jsx, Skills.jsx, Projects.jsx, Contact.jsx
│   ├── ProjectCard.jsx  Card used in the Projects section
│   ├── BlurFade.jsx     Scroll-in blur/fade animation
│   └── Lanyard.jsx      Interactive 3D ID card
├── data/          Site content (edit these to update the site)
│   ├── hero.js          Name, tagline, about text, education
│   ├── projects.js      Projects
│   ├── skills.js        Skills
│   └── contact.js       Contact links
├── hooks/         Custom React hooks
├── App.jsx        Page layout
└── main.jsx       Entry point
```

## Customization

- **Text and links**: edit the files in `src/data/`.
- **Images**: add the file to `src/assets/`, import it at the top of the data file that uses it, then reference the imported name (for example, `image: globeTrackerImage`).
- **ID card**: replace `card-front.jpg` and `card-back.jpg` in `src/assets/` (1024 × 1440 px works best). Its size, position and finish are set on the `<Lanyard />` element in `src/App.jsx`.

## Acknowledgements

- Design template by [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) by [Magic UI](https://magicui.design).
- The interactive ID card is the [Lanyard](https://reactbits.dev/components/lanyard) component from [React Bits](https://reactbits.dev), built with [Three.js](https://threejs.org).

