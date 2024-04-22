---
lastday:
  - you have learnt to work with context api
today:
  - we are going to talk about consolidating state updates using useReducer hook
---

# The `useReducer` Hook

- It is an alternative to `useState` hook.
- Offers a different way to manage state.
- Helps us encapsulate all state update logic in a single function.
- Particularly useful when the new state depends on the previous one.
- Inspired from a popular state management library called Redux.
- It got its name from the array .reduce() method.

## How it works?

- It works similar to the array .reduce() method.
- The reducer function takes the current state and an action as input.
- It then returns a new state.

## How to use it?
- Can be used within a single component for complex internal logic.
- Often combined with Context API to share the state.

## When to use it?
- **Complex State Shapes**: 
  - Multiple related values that need to be updated together.

- **State Updates with Complex Logic**: 
  - Multiple ways to modify the state based on different actions or conditions.

## Basic Syntax
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- **state**: 
  - The current state managed by the reducer.

- **dispatch**: 
  - A function that you call to update the state. 
  - It sends an action to the reducer function.

- **reducer**: 
  - A function that determines how the state should change in response to actions.

- **initialState**: 
  - The initial state value of the reducer.

## Reducer Function

The reducer function defines how the state updates in response to actions:

```javascript
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            // throw new Error();
            return state;
    }
}
```

- The function receives the current state and an action object.
- The action object has a `type` field that tells the reducer how to update the state.

## Example Usage


```javascript
function Counter() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </>
    );
}
```

- This component displays a counter with increment and decrement buttons.
- Clicking the buttons dispatches actions that are handled by the reducer.
