## Inked - Graphic Novel Management App

Inked is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to help users manage their graphic novels. With features like listing, creating, modifying, and deleting graphic novels, user authentication via GitHub, user-friendly feedback using Toastify, error handling, and comprehensive testing, Inked provides a robust platform for graphic novel enthusiasts.

:small_orange_diamond: Web displayed in the netlify url: https://gloria-talavera-final-project-202307.netlify.app/home

## TECHNOLOGIES USED

- TypeScript
- Redux-Toolkit for state management
- React-Router-Dom for routing
- Firebase SDK
- Eslint
- Prettier
- Vitest

:small_orange_diamond: Sonar testing validation metrics:
![sonarMetrics.png](https://media.discordapp.net/attachments/1145433728835923978/1154140839946240040/sonarMetrics.png?width=1316&height=662)

:small_orange_diamond: Lighthouse Metrics: Inked meets Lighthouse performance metrics with all metrics in the green, ensuring a fast and optimized user experience.
![lighthouseMetrics.png](https://media.discordapp.net/attachments/1145433728835923978/1154141673727721583/lighthouseMetrics.png?width=1083&height=258)

## FEATURES

## List of Graphic Novels

Inked allows users to view a list of their graphic novels, making it easy to keep track of their collection.

## Graphic Novels Details

For each graphic novel, there is a dedicated detail page providing additional information and a closer look at the selected item.

## Create Graphic Novel

Users can add new graphic novels to their collection using a separate page with a mandatory image upload along with other details.

## Modify Graphic Novel Read status

Graphic novel Read status can be changed directly from the list.

## Delete Graphic Novel

Unwanted graphic novels can be easily removed from the collection from the list view.

## User Authentication via GitHub

Inked offers secure user authentication through GitHub, ensuring a smooth and trustworthy login experience.

## Toastify Feedback

Users receive informative and user-friendly feedback using Toastify notifications, enhancing the overall user experience.

## SCRIPTS

:small_orange_diamond: npm run dev: "vite"

:small_orange_diamond: npm run build: "tsc && vite build"

:small_orange_diamond: npm run test: "vitest run"

:small_orange_diamond: npm run test:coverage: "vitest run --coverage"
