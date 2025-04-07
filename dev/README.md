# Trung's personal website (version 2)
Built with React, TailwindCSS, and Vite. Hosted via GitHub Pages.

## What I've learned (that's worth mentioning)
- Routing
    - GitHub Pages does routing on the client side
    - GitHub Pages doesn't tolerate React BrowserRouter
    - Alternative is React HashRouter, redirect script, or tricking 404 page into becoming index.html
        - https://iztok.io/react-routing-on-github-pages.html
    - BrowserRouter is required to use HashLink; HashRouter not grouped with HashLink
    - HashLink extends Link by adding scrolling to hash fragment functionality; Link extends `<a href...>`
- TailwindCSS
    - is only inline styling by design
    - VScode won't recognize Tailwind directives (e.g. @theme) in CSS files but it's fine
    - TailwindCSS v4 simplifies configurations so there's no need for a tailwind.config.js file
- Environment Setup
    - https://tailwindcss.com/docs/installation/using-vite
    - https://nodejs.org/en
    - https://youtu.be/sHnG8tIYMB4?si=k8V526DGBWI_jK5o

## TODO
- fix website icon
- implement Projects and Hobbies pages