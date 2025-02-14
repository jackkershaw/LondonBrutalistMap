# London Brutalist Map

Map of London's brutalist buildings built in React, TypeScript, and Tailwind. Uses LibreMap and OpenFreeMap. Deployed to Netlify on [londonbrutalistmap.co.uk](https://londonbrutalistmap.co.uk)

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- React-map-gl
- MapLibre GL
- SASS

## Project Structure

The project follows a typical React application structure, held together with React Router:

- `.gitignore`: Specifies intentionally untracked files to ignore
- `CODE_OF_CONDUCT.md`: Guidelines for community behavior
- `CONTRIBUTING.md`: Instructions for contributing to the project
- `LICENSE`: Project license information
- `README.md`: Project documentation (this file)
- `index.html`: Entry point of the application
- `netlify.toml`: Netlify deployment configuration
- `package.json` & `package-lock.json`: Node.js dependencies and lock file
- `postcss.config.js`: PostCSS configuration
- `public/`: Static assets
  - `data/`: Contains GeoJSON data for the buildings
  - `favicons/`: Favicon files
  - `fonts/`: Custom fonts
  - `images/`: Image assets, including building photos
  - `mapfonts/`: Font files for map rendering
  - `mapstyles.json`: Map style configuration
- `src/`: Contains the main source code
  - `components/`: React components
  - `pages/`: Page-level components
  - `styles/`: SCSS files for styling
  - `main.tsx`: Main React entry point
  - `vite-env.d.ts`: Vite environment type declarations
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json` & `tsconfig.node.json`: TypeScript configuration files
- `vite.config.ts`: Vite build tool configuration

## Running the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/brutalist-map-2.git
   cd brutalist-map-2
   ```
2. Install packages:
   ```bash
   npm install
   ```
3. Run:

   ```bash
     npm run dev
   ```

## Contributing

We welcome all contributions, big or small! Please refer to [CONTRIBUTING](/CONTRIBUTING.md) for instructions on how to contribute. Please follow the [CODE_OF_CONDUCT](/CODE_OF_CONDUCT.md) You can also email me on [hello@jackkershaw.net](mailto:hello@jackkershaw.net) with any questions.

## Roadmap/Suggested Improvements

It would be good to have more info URL links in the GEOJSON data (/src/components/geoJSONData.tsx). At the moment if a building does not have a More info url associated with it, clicking the more info button will trigger a google search for the building.

## Resources:

### Brutalism:

- [Socialist Modernism](https://socialistmodernism.com/)
- [SOS Brutalism Map](https://www.sosbrutalism.org/cms/15802395#map)
- [Brutalist London Paper Map] (https://bluecrowmedia.com/products/brutalist-london-map)
- https://www.youtube.com/watch?v=UWhuHiL8Pug
- https://www.youtube.com/watch?v=TvKi_hsJf3c
- https://www.bloomberg.com/news/articles/2015-11-25/the-case-for-calling-brutalism-heroic-instead
- https://www.langhamhouseclose.com/
- Brutal London, Simon Phipps

### Maps:

- [Strikemap](https://strikemap.org)
- [Space Invaders Photo Map](https://pnote.eu/projects/invaders/map.html)
- [Community Maps](https://www.are.na/gemma-copeland/community-maps)
- [Pinball Map](https://pinballmap.com/)

# How I built this site initially (August 2024)

## Why

- After the success of an html copy of this site, I wanted to rebuild it in a modern framework. Seeing as much of the functionality of that project was in JavaScript, I wanted to rebuild it in React, as it was hard to navigate the codebase, something a component based architecture would solve.
- I realised that this would allow me to use the mapbox NPM package rather than the CDN method I was previously using, which would allow me to host the geojson data myself - making it much easier to edit.
- During development, it became obvious that I could make a multi-page site with the data, now that I was selfhosting it, allowing me to display it in different ways. This would allow different users to engage as they wished.

## Building

- First, I set up the app using Vite.
- Then I worked on each of the pages in the app, using Tailwind CSS to rapidly design them in a similar style to my Brutalist Map project.
- Taught myself how to use APIs in Javascript with fetch() and then applied this to React.

  - I spent a long time trying to get this to work - it was relatively simple with the Mapbox URL but I also wanted to use local geojson data where possible (easier to edit and reference).

- Added Brutalist Map into the page

  - [React-map-gl](https://github.com/visgl/react-map-gl) as an API wrapper for [mapbox-gl](https://github.com/mapbox/mapbox-gl-js), with [mapbox studio](https://www.mapbox.com/studio/) staying as the source.

- Added React Router to navigate between pages and serve a 404 page and Link elements to improve page load speed.
- Deployed to Netlify.
- Added markers to the map using a map function.
- Added controls to the map using the example [in the React-map-gl docs](https://github.com/visgl/react-map-gl/blob/7.1-release/examples/controls/src/app.tsx) as a guide.
- Added details of the buildings on hovering over them on the map. I tried using the example [in the React-map-gl docs](http://visgl.github.io/react-map-gl/examples/geojson) but unfortunately couldn't get it to work. A workaround was to create a custom marker, since React Map GL wasn't letting me add onMouseEnter events to the marker that comes with the NPM package. I then used State management, to set whether each marker was hovered over. This caused some flickering which I resolved by binding the onMouseEnter and onMouseLeave events to the div displaying the information on hover.
- Added click event on marker, similar to the hover event above. Used borrowed html and css from the index page.
- Edited map so visited buildings are highlighted green on the map.
- Transformed svg icons to React TSX components using an [online tool](https://react-svgr.com/) - to allow for easier editing.
- Updated mobile look of site after some debugging on different screen sizes.
- I noticed some issues with images not loading, so I decided to download them from the links in the geojson data. I ran a python script to do this, and then another script to compress the .webp images down to below 1mb. This would improve speed.
- Abstracting out mapcontrol and customMarker components into separate files from the map component. This improves editability.
- Fixed a build error from incorrect typing.
- Added a landing page with custom SASS, to improve usability on the site. I used local storage to set this to only display on the first visit to the site.
- Add color variables to SASS, to make them easier to edit.
- Added a typography SCSS file to extract out of globals and make it easier to edit.
- Extracted common tailwind styles to scss, to make them easier to edit.
- Moved from Mapbox maplibre-gl, using the guides on [OpenFreeMap](https://openfreemap.org/) and their tiling. This should enable people to contribute to this repository more easily (i previously used a mapbox api key tied to the local and production servers).
  - I used Maputnik to generate styles and [Map Libre Font Maker](https://github.com/maplibre/font-maker) to generate the font tiles I needed.
