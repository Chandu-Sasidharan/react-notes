---
yesterday:
    - you learnt about router, especailly react-router-dom
today:
    - we will revise everything, and learn a bit more about navigation
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

## React Router Dom

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

### Catching Unmatched Routes

- Use a <Route> with a `*` path.
- Place it at the end of your route list.

###  Nested Routes

- Create a tree-like structure for your URL paths for related sections.

- Example:
```js
<Route path="/dashboard" element={<Dashboard />}>

  <Route index element={<Welcome />} />
  <Route path="profile" element={<UserProfile />} />
  <Route path="settings" element={<UserSettings />} />

</Route>
```

- Shared layouts: 
  - Parent routes can render navigation, header, sidebar etc.

- Organization:
  - Logically groups routes together.

- Index Route:
  - Defines the default content nested within a parent route.

### Rendering nested routes

-  Child routes render into the parent route's <Outlet> component.

- **Outlet**: 
  - A component that renders the current route selected. 
  - It's used in nested routing where a route might have children routes.
  - It acts as a placeholder for the nested routes to render their components.

  - Example:
  ```js
  import { Outlet, Link } from 'react-router-dom';

  function Dashboard() {
    return (
      <>
        <nav>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        
        <Outlet />
      </>
    );
  }

  export default Dashboard;
  ```

## Navigation

- Effective navigation is crucial for any web application. 
- React Router provides several tools to help build and manage navigation.

### `<Link>`

- Replaces traditional <a> tags.
- Prevents full page reloads, essential for SPA behavior.
- Example: <Link to="/about">About Us</Link>
- It changes the URL and updates the browser's history.

### `<NavLink>` : Active styling

- Extends <Link> functionality.
- Adds a special `active` class when the current URL matches the Link's to prop.
- You can customize the classname if you want.
- Yop can even handle the styling yourself, using a callback function.
- Example: <NavLink to="/about">About</NavLink>
- Great for visually highlighting the active section in navigation.

## Redirecting Programmatically

- **useNavigate** hook:
  - `useNavigate` is a hook that allows programmatic navigation.
  - It gives you a function called navigate.
  - Use it inside event handlers, effects, etc., to change the URL.

 Example:
  ```jsx
  import { useNavigate } from 'react-router-dom';

  function Form() {
    const navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      // Form processing logic here
      navigate('/success');
    }

    return (
      <form onSubmit={handleSubmit}>
        {/* form fields */}
        <button type="submit">Submit</button>
      </form>
    );
  }
  ```

  ## Redirecting with <Navigate>

- **Declarative Approach**: 
  - Render the <Navigate> component to trigger redirection.
  - `<Navigate>` component changes the current location when rendered.

- **Common Uses**:
  - Protecting routes (redirect unauthorized users away).
  - After successful form submissions.

  - Example:
  ```jsx
  import { Navigate } from 'react-router-dom';

  function MyComponent() {
    const isLoggedIn = false; 

    if (!isLoggedIn) {
        return <Navigate to="/login" replace/> 
    }

    // ... Render content for logged in users
  }
    ```