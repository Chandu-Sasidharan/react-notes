---
lastdays:
  - we learnt routing with react router dom
today:
  - we will talk about route parameters
---

# Dynamic Route Paths (The Idea)

- You can capture parts of the URL to use in your components.
- Useful for things like fetching specific data.
- Let components respond to parameters passed through the route.

## Route Parameters

- Route parameters are tokens in the URL path
- Its like a variable that can be changed. 

## Creating Dynamic Route Paths with React Router Dom

-**Syntax**:
  - Use a colon followed by a parameter name in your route path.
  - This indicates to React Router that this part of the route is variable.

- Example:
```js
<Route path="/posts/:postId" element={<PostDetails />} />
```

- In this example, `:postId` is a route parameter that can be any value.
- It allows the `PostDetails` component to load data based on the `postId`.

## `useParams` Hook

- React Router provides the `useParams` hook to access route parameters.

- Example:
```js
import { useParams } from 'react-router-dom';

function PostDetails() {
    const { postId } = useParams(); 
    // Now you can use postId
}
```

## Key points

- Match the names in the route path (/:postId) and in useParams().
- Helps you fetch and display data specific to that URL section.