# State in React

- State is data that a component manages internally.
- It can change over time.
- Changes to state trigger React to re-render that component.
- Thus reflecting the updated information in the UI.

## Why state?

- A component often need to remember things.
- Such as current value of input field.
- Current items in the shopping cart etc.
- In react, we use state for this component specific data.

## Why a regular variable isn't enough

- Changes to local variables won’t trigger renders. 
- Local variables don’t persist between renders.

## The state variable

- A state variable retain the data between renders.
- Updating the state will trigger React to re-render the component.

## Hooks (useState)

- In React a function that starts with ”use”, is called a Hook.
- Hooks, let you 'hook into' different react features.
- State is just one of those features, you will meet other Hooks later.
- By calling `useState` hook, 
   - you are telling react that the component should rememeber something!

**important**
- Hooks can only be called at the top level of your components
- You can’t call Hooks inside conditions, loops, or other nested functions.
- State is isolated and private to the component.
- In other words, state is local to a component instance on the screen.

# Component Lifecycle

- React components goes through certain phases.
- This is called a component life cycle.

- **Mounting**:
  - A component is added to the DOM for the first time.

- **Updating**:
  - Re-renders due to state or prop change.

- **Unmounting**:
  - A component is removed from the DOM.

## The `useEffect` Hook: Your Lifecycle Swiss-Army Knife

- It lets you perform side effects in functional components.

- **Basic Syntax**:
    ```javascript
    useEffect(() => {
        // Your side effect code here
    }); 
    ```
- **Runs After Render**:
  - Code inside `useEffect` runs after the component renders.

- **Conditional Execution**:
  - By providing a dependency array, you control when the effect runs again.
  - Empty array (`[]`) : Runs only on the first render.
  - Array with state/props (`[someState, someProp]`).
    - Runs when one of those values change.
