# Today's Topic:-

## Hooks

## useState

# Topic from Last week:-

## React + vite app

## tailwind css installation

## components

---

## Hooks:-

are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. We’ll look at the built-in Hooks first.

## react useState

-- The React useState Hook allows us to track state in a function component.

-- State generally refers to data or properties that need to be tracking in an application.

```python

import { useState } from "react";

```

## Initialize useState

-- We initialize our state by calling useState in our function component.

-- useState accepts an initial state and returns two values:

-- The current state.
-- A function that updates the state.

## Example

```python

import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}

```

## explaination:-

Notice that again, we are destructuring the returned values from useState.

The first value, color, is our current state.

The second value, setColor, is the function that is used to update our state.
