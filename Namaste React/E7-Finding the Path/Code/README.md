## Episode 07 – Finding the Path

**Detailed Mention of Topics and its Timestamps according to Namaste React Web Series**

```sh
00:03:00 – useEffect hook explanation, Dependency Array
00:15:40 – React Router 
00:19:00 – Create Routing Configuration
00:22:00 – Create About Component
00:30:00 – Rafce
00:33:00 – error (404 not found)
00:37:00 – useRouteError Hook
00:41:55 – Error.js
00:44:20 – Children Routes
00:51:00 – Outlet Keyword
00:56:00 – Create links to Header Menu
00:58:18 – Link Component 
01:00:00 – Observe the performance
01:03:55 – Single Page Applications (SPA)
01:05:35 – 2 types of Routing: Client Side Routing & Server-side Routing
01:08:00 – Session Recap till now 
01:11:50 – Dynamic Routing
01:13:35 – JSON Viewer
01:40:30 – GraphQL Introduction
01:52:40 – Dynamic Data coding 
01:57:50 – Map function and its usage with a key 
01:59:00 – Changing Restaurant ID’s
02:00:00 – New SuperPower Hook: UseParams
02:02:30 – Move API to constants.js
02:04:00 - Dynamic Cards- to be clickable
02:08:00 – Link Component
02:13:00 – Session Recap
```
								NOTES

🚀 **Two types of Routing in web apps**
  - Client Side Routing (React, Angular, Vue uses this) - (data stays in client side, Single page apps)
  - Server Side Routing (used by Traditional web applications built using Vanilla JS) - (data comes from server whole page reloads, old method)
  -> use link component of react-router-dom, no reloads, single page application in moving to different pages.

-> useEffect takes a callback function and a dependency array, the callback function:
	- will be called when the elements of array changes.
	- if array is empty: will be called once after inital render.
	- if no array is passed, will render after each render.

- Don't create any component inside another component(before return point), rendering will be affected. Child will be created many times on every render.
- Don't create state variables inside ifelse or for loop. Always keep inside a component.

**Creating Route**:
- instal react-route-dom
- in app.js, import createBrowserRouter.
- Create appRouter,which defines the different paths to app and pages where to go.
- appRouter must be below the rendering of appLayout, the home page.
- Now, we've to provide this appRouter to our app, import RouterProvider.

**Nested Routing**:
- We want to keep our header and footer to be present always, so other pages will be rendered between them. Hence we make them child of appComponent by defining them in route config.
- Now we use something called, 'outlet' from react-router-dom, render it where we want other pages to be, it'll put them at it's place a/c to route.

**Dynamic Segments**: Routing
- Used for random routes when they can be variable.
