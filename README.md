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
