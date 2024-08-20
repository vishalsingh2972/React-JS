**Detailed Mention of Topics and its Timestamps according to Namaste React Web Series**

<details>
  <summary>## Episode 14 - NetflixGPT - The Beginning</summary>
  &emsp;
<div>

```sh
  0:00 to 8:35 - Introduction
  08:36 - Part -  1
  - How to create a React Project using “Create React App”
  - 14:00 - npm start
  - Setting up the Tailwind CSS to our App
  - 19:00 - how to install Tailwind CSS
  - Netflix website features noted which are need to be cloned

  33:00 - Part -  2
  - Create a new Github Repository & push the code
  - Login & headers components created
  - Body.js component created
  - 42:18 - Setup Routing
  - 50:45 - Netflix Logo inserted
  - 55:35 - Login form
  - 01:10:10 - Create a Sign up form
  - 01:23:00 - “formik” library for forms

  01:27:10 - Part - 3
  - Form Validation
  - useRef hook
  - 01:34:00 - Regex validation
  - useRef hook usage
  - Showing error message while log in

  01:57:35 - Part - 4
  - Authentication
  - Firebase
  - 02:14:00 - Build command
  - 02:14:52 - Deploying
  - 02:16:35 - 3 commands to deploy application
  - 02:21:00 - Create Signup user account
  - Reading Firebase Documentation
  - 02:28:00 - Sign-in/ Sign-up Logic

  02:29:46 - Part - 5
  - 02:39:00 to 02:42:00 - User successfully registered
  - 02:43:20 - Sign in logic
  - 02:50:00 - Firebase error - user not found

  02:52:05 - Part - 6
  - Setup Redux store, userSlice
  - 03:12:20 - useDispatch()
  - 03:20:20 - useNavigate()
  - 03:22:35 - building signout feature
  - 03:33:30 - Manage users
  - 03:40:00 - Adding user profile pic
  - 03:42:48 - Fixing a Bug!

  03:49:30 - Part - 8
  - TMDB APIs
```
</div>
</details>

<details>
  <summary>## Episode 15 - Building the Core</summary>
  &emsp;
<div>

```sh
  0:52 - Part - 9
  - Fixing a Bug(when logged out also, any user can access browse page)
  - “Navigate”
  - 08:00 - useEffect
  - 14:00 - Sign-in redirecting to browse page & if the user is not logged in Redirect/browse
  to login page and vice-versa

  16:30 - Part -  10
  - Till 21:10 - unSubscribing onAuthState Change

  21:45 - Part -  11 (Adding constant file to the project)
  - 23:35 - Make a separate file Constants.js
  - Till 30:25 - Adding user image into the Constants.js file
  - 31:45 - Add hardcoded values to the constants file

  32:43 - Part - 12
  - 34:00 - TMDB API and how to fetch APIs
  - 45:50 - Strict Mode in React
  - Register TMDB API & Create an app and get access token
  - Get data from TMDB now playing movies list API

  49:05 - Part -  13
  - Adding movie data to the store (moviesSlice)

  56:25 - Part - 14
  - Creating your own custom Hook

  01:03:15 - Part - 15 - Building Browse Page
  - UI Plan
  - MainContainer
  - VideoBackground
  - VideoTitle
  - Secondary Container
  - MovieList * n
  - cards*n

  01:17:03 - Part - 16
  - Building Video Title & Styling it by using Tailwind CSS
  01:29:09 - Building Video Background
  02:03:15 - Creating Custom Hook for trailer video

  02:11:45 - Part - 17 - Building Video Background
  02:32:00 - Progress till now
  - Custom Hook for now playing Movies
  - Create movieSlice
  - Update store with moviesData
  - Planning for MainContainer & Secondary Container
  - Fetch Data for Trailer video
  - Update store with Trailer Video Data
  - Embedded the YouTube video & make it autoplay and mute
  - Tailwind classes to make MainContainer look awesome

  02:37:44 - Part - 18 - Creating Movie Suggestions List
  - Building Secondary Container
  - 02:56:48 - How to display 20 cards?(Map Function)

  03:20:02 - Part - 19 - Showing Popular Movies list on Browse page
  - UI Plan achieved
  - Build Secondary Component
  - Build Movie List
  - Build Movie Card
  - TMDB Image CDN URL
  - Made the browse page amazing with Tailwind CSS
  - usePopularMovies custom Hook
```
</div>
</details>

<details>
  <summary>## Episode 16 - NetflixGPT - Wrapping Up</summary>
  &emsp;
<div>

```sh
  01:13 - Part -  20
  - Introduction to GPT

  05:02 - Part - 21
  - Building GPT Search Page

  41:40 - Part - 22
  - Building Multi Language Pages

  01:23:41 - Part - 23
  - Adding GPT feature to our App
  - 02:15:00 - Promise.all() function

  02:33:33 - Part - 24
  - Buidling GPT Movie Suggestions UI

  02:59:25 - Part - 25
  - Securing our API keys

  03:08:45 - Part - 26
  - Understanding Memoization of data in our apps

  03:16:50 - Part - 27
  - OpenAI usage bill and suggestions

  03:22:16 - Part - 28
  - Making our App Mobile Responsive
  Progress Track (readme file)
  - Get OpenAI API key
  - GPT Search API call
  - Fetched gptMovieSuggestions from TMDB
  - Created gptSlice & added data
  - Reused MovieList component to make movie suggestion container
  - Memoization
  - Added .env file
  - Adding .env file to gitignore
  - Made our site responsive
  04:01:28 - NetflixGPT - Ending Note
```
</div>
</details>