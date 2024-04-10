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

