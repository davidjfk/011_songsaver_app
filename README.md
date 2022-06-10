

# Design considerations:

* intro
    This is my plan of how to avoid major refactoring, while and after building sort, filter and categorize functionality on separate feature branches.
    I have checked upfront that my intended solutions to sort, filter and  categorize songs do not conflict in such a way that I need to do a major refactor / overhaul of a previous/ already built functionality (e.g. sort functionality ) after having finished the previous one (e.g.  filter functionality). Some refactoring might still be necessary. The features sort, filter and categorize will be implemented on separate feature branches. 



* Assignment sort: (on a separate feature branch):
    Proof of concept is  ready. 
    
    Now busy implementing the solution. 
  


* Assignment filter: (on a separate feature branch):
    use case: as a user I can filter zero, one or more options at the same time  (proof of concept ready)
    use case: as a user I can filter on genre and stars at the same time (proof of concept ready)
    use case: as a user I can sort and filter song objects from array playlist in conjunction / at the same time, inside the Playlist.js component. (95% sure I can do this  with a useEffect as well). This is not a requirement, but improves usability (only if time left to implement).




* Assignment 'categorize': (on a separate feature branch):
    
    I can only show all categories separately, or use a selectbox with 2 categories (I choose the selectbox):
    1.(selectbox option 1) category 'show 1 playlist with all genres' (this is my starting point after having finished the Winc sort- and filter-assignment).
    2.(selectbox option 2) category 'show list with a playlist for each genre'. --> this is my goal.

    Solution 1:
    Inside component Playlist.js I create the option to sort, filter and categorize the array playlist.js with songs. 
    So what you get is: array playlist.js first gets sorted and filtered and the output of this gets categorized. 
    Disadvantage: each of the  categories themselves cannot be sorted nor filtered.

    Solution 2:  (my choice)
    Inside component Songsaver.js (Songsaver.js is a direct child of App.js, App.js does the routing)  create selectbox option  1 and 2. Then conditionally render (based on what has been selected inside the "categorize selectbox") either:
    1. 1 playlist with all genres (this is how my code already works)
    2. A list of Playlist.js-components below each other, containing a playlist (Playlist.js component) for each genre, with songs belonging to that genre. 

    Benefit: within the Playlist.js component for each category, the sort and filter fn (fingers crossed) will still work.

    steps: 
    1.    Put the data (boolean 'isShowAllCategoriesInsideOnePlaylist') of the business logic of this conditional rendering in a redux-datastore slice. 
    2.    Create array with categories (I use hardcoded categories that user cannot create, update nor delete)
    3.    For each category I want an array with song objects (pertaining to that category)
    4.    Render each array with its own default Playlist.js component ) to the screen. 
    5.    Run tests: inside each of the displayed categories: add song, delete song, sort songs, filter songs
    














# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
