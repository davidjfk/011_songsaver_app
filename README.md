

# Design / planning:

# Date: June 17
* Intro
    goal: implement winc task categorize: each genre gets its own list and the song you add ends up with the respective genre.
    
* situation
    component Playlist.js:
    1. is child component of Songsaver.js.  Songsaver.js contains components AddSong.js and Playlist.js
    2. receives playlist.js from  redux-toolkit slice.  
    3. has  sort functionality with only local state (inside component Playlist.js)
    4. has filter functionality with only local state (inside component Playlist.js)
    5. component Playlist maps over array playlist.js with the songs, with component SongInPlaylist returning for each item  in the array.

* design:
    * component Songsaver shows either:
       - a) the current situation (see above), or:
       - b) or child component 'CategorizeSong': CategorizeSong maps  over array playlist.js with the songs, with component Playlist (with SongInPlaylist still  nested inside Playlist.js) returning for each item  in the array.
       - wether it will be a) or (one of the options inside) b) will depend on what the user selects inside select box 'Categorize by Genre' (explained further below)
    To  implement this:  
    * Inside component Songsaver:

        1. create (grid-based: reuse grid code from other components) child component DisplaySongsInTheirOwnPlaylistForEachCategory. Inside this component, that only contains display logic, create selectbox 'Categorize by Genre' with options:
            
            - show all genres in 1 playlist (default option) ('M')
            - show all genres, with each genre in its own playlist ('N')
            - show 1 or more genres in a separate playlist. ('N')
            I need a boolean to switch between this option ('M') and all other options ('N') in this select box: 'isShowAllGenresInOnePlaylist'. select box 'Categorize by Genre' must set this boolean (based on which option is selected). Next, this boolean must be made available (use redux-toolkit slice with useLocator hook) in component 'Songsaver'.
            
            Save the selected genre(s) in an array (1 or more genres, depending on the nr of genres that you select). This array must be made availabe (use redux-toolkit slice with useLocator hook) in component 'categorizeSong'.

            So select box 'Categorize by Genre' provides 2 pieces of state: one piece will be used in  component Songsaver, and one piece will be used in component 'categorizeSong'. 
            
           (time: 20 min) (time so far: 1.5 hours)

        2. create (inside SongSaver) (empty) child  component 'CategorizeSong' that will only contain business logic.  (time: 15 min)


            The result (inside component Songsaver) will look roughly like this: 

                import { useSelector } from "react-redux";

                function Songsaver() {
                    const { playlist } = useSelector((state) => state.playlist); 
                    const { isShowAllGenresInOnePlaylist } = useSelector((state) => state.showGenreInSeparatePlaylist);
                    return (
                        <>
                        <AddSong />
                        <DisplaySongsInTheirOwnPlaylistForEachCategory/> 
                        // provides (in redux-toolkit-slice): isShowAllGenresInOnePlaylist and also 
                        // ("L:") 'an array with the categories to show  in their own playlist'. 
                        {isShowAllGenresInOnePlaylist ? <Playlist playlist={playlist} /> :
                        <CategorizeSong playlist={playlist} /> } 
                        // inside categorizeSong import ("L") from redux-toolkit store. Then for each item in the array, map
                        // over the array with arrays, see next step. 
                    );
                }


        3. inside component CategorizeSong:
           a) business logic: create fn 'categorizeByGenre'. Use fn 'filterByGenre' from  component Playlist as a template. 
              a few things need to happen here: 
              1) first distinguish between:
                -  ('M') show all categories together in 1 playlist 
                versus 
                - ('N') all other categories in which 1 or more categories are  shown each in their own  playlist. See 'isShowAllGenresInOnePlaylist' below. 
              2) currently in my template fn 'filterByGenre', 1 array is returned with all selected categories of songs. 
              3) For condition ('M') code  of fn 'filterByGenre' does what I need. 
              4) But for condition ('N') I need to create a separate array for each  selected category (e.g. 1 array for blues, 1 array for jazz, etc). So the output in this case needs to be an array of arrays (with each array depicting a separate category). I can refactor the code of fn 'filterByGenre' to do this (and probably use a for loop instead of a for of loop, because I will need the index to split up the playlist array into an array of arrays based on song category).
              
              Each of these created arrays (in an array of arrays) will be looped over with a .map fn:

              In component CategorizeSong:
                {arrayWithSongCategoryArrays.map((arrayWithOneSongCategory, id) => (
                        <Playlist key={id} item={arrayWithOneSongCategory} />
                ))}
                (so fn categorizeByGenre must also provide a key to each array inside this map fn).
                 const id = Math.floor(Math.random() * 100000) + 1; 


              In component Playlist:
                {arrayWithOneSongCategory.map((song, id) => (
                        <SongInPlaylist key={id} item={song} />
                ))}
              (except for the Playlist now having a prop, the component Playlist should still  work the same (as before the moment 
               I started to implement the categorize-code functionality))
              
              To work one step at a time, I will have  'M' working completely in the songsaver app, before starting with  'N'. 

            (time: 40 min)

        
        4. lift up playlist state to component Songsaver.js (now in component Playlist.js). Do this by moving  the useSelector hook that connects to the react-toolkit slice ( 10 min)
        5. put array playlist.js as a prop in component Playlist.js (inside the render-part of component Playlist.js, array playlist.js is going to map to the screen with SongInPlaylist.js)   (10 min)
        6. delete-song-button  interacts directly with  redux-toolkit slice,  so no refactoring needed. (0 min)
        7. put the state of select box 'Categorize by Genre' as a dependency in the useEffect hook of component Playlist.js (I do here exactly the same here as when I (in other winc task assignment) put the sort and filter functionality inside this component Playlist.js inside this useEffect hook.)  (10 min)
        8. give title to each playlist when displayed in their own Playlist-component, e.g. 'Playlist Blues', 'Playlist all genres', 'Playlist Jazz', etc.      (15 min)
        9. if no song in playlist, display message: 'please enter a song'. (10 min)
        10. (if time left) Component  Playlist: figure out if useCallback fn is useful on fns sortSong, filterByGenre, filterByRatingStars --> how2: the arguments to each fn, become the dependencies of the Callback fn.   (10 min)
        11. test (manually) new functionality (during and after the previous steps)  (30 min)
        12. regression test (15 min)

    * Time to make this design upfront and proof the concept (+ braindump below): 5 hours. 
    * Time: total time needed to implement: 3 hours &  5 min ( + 100% for unexpected stuff) = 6 hours & 10 min. 

    * contingency plan: inside component Playlist.js and SongInPlaylist.js I could create component 'CategorizeSong'. Disadvantage: see comment in notes  from 'Date June 8' below. 


    Braindump of stuff to do when categorize-song-functionality is ready:
    1. style select boxes (1 styling for all)
    2. onMouseOver on select boxes: press 'Ctrl' to select multiple options'.  
    2. use styled component theme provider for default styling: font size, font type, etc.
    3. media queries (in grid components) for mobile size. 



# Date June 8 (archive)
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
