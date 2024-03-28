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