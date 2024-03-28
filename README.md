# DOM Access from React

React's Philosophy:
  - React prefers to manage the DOM for you.
  - You will work with state and props to trigger updates indirectly.

When You Need Direct Access:
  - There are certain cases where you might need direct access to DOM.
    - Focusing input fields.
    - Measuring element dimensions.
    - Playing animations.
    - Integrating with 3rd party libraries that manipulate the DOM.

## The `useRef` Hook

Creates a reference that persists throughout a component's lifecycle.

- `useRef` returns a mutable ref object.
- It's `.current` property is initialized with the passed argument.
- By default it will be `null`. 
- The object persists for the full lifetime of the component.

## How it works

1. Import `useRef` from `react`.
2. Create a ref: `const myRef = useRef(null);`
3. Attach the ref to a JSX element using the ref attribute: 
  - `<input ref={myRef} />`

- **What you get**:
  - myRef.current will point to the underlying DOM element.
  - The actual input in this example.

### Use Case 1: Controlling Focus

- One common use case for useRef is to manage focus on an input element.
- Allows developers to imperatively set focus on an element.

```javascript
import { useRef, useEffect } from 'react';

function FocusInputComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the input element when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this runs only on mount

  return <input ref={inputRef} type="text" />;
}
```

### Use Case 2: Direct Style Manipulation

- Another use case for `useRef` is direct manipulation of the `style` property.
- Useful for dynamic styling that depends on complex conditions or interactions.
- Things that cannot conveniently expressed through React state.

```javascript
import React, { useRef } from 'react';

function HighlightOnHover() {
  // Reference to the element we want to style directly
  const headerRef = useRef(null);

  // Function to change style
  const highlightHeader = () => {
    if (headerRef.current) {
      headerRef.current.style.backgroundColor = '#ffd700'; // Gold color
    }
  };

  // Function to reset style
  const resetHeaderStyle = () => {
    if (headerRef.current) {
      headerRef.current.style.backgroundColor = ''; // Reset to stylesheet value
    }
  };

  return (
    <div>
      <h1 ref={headerRef}>Hover Over the Button to Highlight Me</h1>
      <button
        onMouseEnter={highlightHeader}
        onMouseLeave={resetHeaderStyle}
      >
        Hover Me
      </button>
    </div>
  );
}
```

# DOM Access from React

React's Philosophy:
  - React prefers to manage the DOM for you.
  - You will work with state and props to trigger updates indirectly.

When You Need Direct Access:
  - There are certain cases where you might need direct access to DOM.
    - Focusing input fields.
    - Measuring element dimensions.
    - Playing animations.
    - Integrating with 3rd party libraries that manipulate the DOM.

## The `useRef` Hook

Creates a reference that persists throughout a component's lifecycle.

- `useRef` returns a mutable ref object.
- It's `.current` property is initialized with the passed argument.
- By default it will be `null`. 
- The object persists for the full lifetime of the component.

## How it works

1. Import `useRef` from `react`.
2. Create a ref: `const myRef = useRef(null);`
3. Attach the ref to a JSX element using the ref attribute: 
  - `<input ref={myRef} />`

- **What you get**:
  - myRef.current will point to the underlying DOM element.
  - The actual input in this example.

### Use Case 1: Controlling Focus

- One common use case for useRef is to manage focus on an input element.
- Allows developers to imperatively set focus on an element.

```javascript
import { useRef, useEffect } from 'react';

function FocusInputComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the input element when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this runs only on mount

  return <input ref={inputRef} type="text" />;
}
```

### Use Case 2: Direct Style Manipulation

- Another use case for `useRef` is direct manipulation of the `style` property.
- Useful for dynamic styling that depends on complex conditions or interactions.
- Things that cannot conveniently expressed through React state.

```javascript
import React, { useRef } from 'react';

function HighlightOnHover() {
  // Reference to the element we want to style directly
  const headerRef = useRef(null);

  // Function to change style
  const highlightHeader = () => {
    if (headerRef.current) {
      headerRef.current.style.backgroundColor = '#ffd700'; // Gold color
    }
  };

  // Function to reset style
  const resetHeaderStyle = () => {
    if (headerRef.current) {
      headerRef.current.style.backgroundColor = ''; // Reset to stylesheet value
    }
  };

  return (
    <div>
      <h1 ref={headerRef}>Hover Over the Button to Highlight Me</h1>
      <button
        onMouseEnter={highlightHeader}
        onMouseLeave={resetHeaderStyle}
      >
        Hover Me
      </button>
    </div>
  );
}
```

## Important Notes

- Use Sparingly: 
  - Generally, prefer to let React manage the DOM where possible.
  - Overuse of `useRef` for DOM manipulations adds complexity.
  - It is harder to understand and maintain.
  - It bypasses React's state management and lifecycle features.

- Imperative Style: 
  - Using refs is more imperative (directly commanding changes)
  - React's usual approach is declarative.