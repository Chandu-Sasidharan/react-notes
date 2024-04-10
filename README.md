---
lastdays:
    - you leart react-bootstrap and styled components
today:
    - we will talk about routing in react
---

# Router

## SPAs vs Traditional website

- **Traditioanl website**: 
  - Full page reloads on navigation. 
  - Each page is a separate HTML file from the server.

- **Single Page Application(SPA)**:
  - Initial load, then JavaScript dynamically updates the content.
  - That gives an app-like smooth feel.

## JavaScript & the History API

- With Javascript you can interact with the browser's history.
- The browser's history is more than just the back/forward buttons.
- JavaScript can manipulate it with methods like,
  - `history.pushState()`: Adds a new history entry.
  - `history.go()`: Moves back or forward in the history stack.

- **What this Means**:
  - We changed the URL using Javascript.
  - Added data to the browser's history.
  - All without reloading the page.
  - This is the foundation of client-side routing in SPAs!

## React Router

- React Router is a third-party library.
- It's not included in React's core.
- Powerful library to manage routing within your React projects.
- You can install it with the command: `npm install react-router-dom`
- Contains different kinds of routing, we will focus on `BrowserRouter`

### Core components

- **BrowserRouter**:
  - A router that uses the HTML5 history API.
  - Wraps your top-level React app.

- **Routes and Route**: 
  - Defines rules (which path should render which component).
  - Routes is a container for multiple Route elements.
  - Each Route specifies a component to render when the URL matches its path.

- **Link**: 
  - Replaces <a> tags for navigation within your SPA.
