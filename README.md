---
yesterday:
    - we talked about spa, react and learned to setup a new project.
today:
    - we will talk about components and props.
---

## Thinking in Components

- React is centered around building interfaces using components.
- Components are reusable, isolated, and composable pieces of UI.
- It can be small; like buttons, form fields etc.
- Or it can be a big section or even a page.

- This helps in,
    - better code organization, maintainability, 
    - and the ability to reason about your app in smaller units. 

- **Historical Note**: 
    - Older React relied heavily on class-based components.
    - The modern approach is to use functional components.

### Project Organization

- By convention a `components` directory is used to place all components.
- It is important to name components clearly (e.g., `UserProfile.jsx`).
- This help keeps things tidy, and easy to understand.

### Building and Using Components

-  A React component is usually a function returning JSX.

- Example of a basic component:
```javascript
function MyComponent() {
    return <div> This is my component! </div>;  
}
```
### Exporting and Importing Components

- Components are exported from their module files.
- And imported where needed.

- Example:
```javascript
// Exporting
export default Greeting;

// Importing
import Greeting from './components/Greeting';
```

### When to Create Components

- Consider creating a new component when a part of your UI is,
    - repeated in multiple places.
    - is too complex to manage within a single component.
    - are conceptually independent.

## Props

- **Props** 
    - Props allows component to recieve data from their parents.
    - They make components dynamic and reusable.
    - Think of props as function arguments.
    - Props are read only, a child component cannot rewrite it.

- Example:
```js
// Greeting.js
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}
```