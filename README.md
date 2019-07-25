[![Netlify Status](https://api.netlify.com/api/v1/badges/7fe1e0f9-3ead-48ba-adb8-b3f8a3f046ac/deploy-status)](https://app.netlify.com/sites/amazing-ramanujan-bfc1bf/deploys)

# YBMS

## Your beloved movies and series

A WEB application using [The Movie DB API](https://www.themoviedb.org/documentation/api) to display a preset list of the top 15 movies and TV Series.

### Demo

Here is a working live demo: https://www.ybms.joelxr.dev/

### Features

- List the preset movies and series on a homepage.
- Switch between Movie or TV Series view.
- Order by released date.
- Add a movie or series to a favorites list.
- See quick info of a selected movie or series (poster, title, year, short description, runtime, rating).
- See more detailed view of a movie or series (poster, title, year, full description, runtime, rating, cast, reviews, videos).

### Built with

- [React](https://reactjs.org/)
- [Reach Router](https://reach.tech/router)
- [Axios](https://github.com/axios/axios)
- [SCSS](https://sass-lang.com/)
- [EVA Icons](https://akveo.github.io/eva-icons/#/)
- [Parcel](https://parceljs.org/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](http://prettier.io/)
- [Netlify](http://app.netlify.com/)
- [VSCode](https://code.visualstudio.com/)
- [The Movie DB API](https://www.themoviedb.org/documentation/api)

### To-do

- Reponsive adjustments
- Use all the data that The Movie DB provide instead of 15 movies and 15 TV series.
- Cinemas availity support
- Tests with Jest and Cypress

### Deploy

To build the application use NPM:

```
npm install
npm run build
```

To start with the development mode:

```
npm run serve
```
