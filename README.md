# Handling Forms in React

- **Vanilla HTML forms**: 
  - Form data lives in the DOM elements themselves.
  - Submitting the form usually triggers a page reload.

- **React components**: 
  - Form data is held in component state.
  - You have full control to prevent default browser behavior.
  - This led to smoother user experiences.

## Controlled elements

- **Core concept**:
  - The value of form fields is derived from your React state.

- **How it works**:
  - Set an initial state value for each input.
  - `value` attribute on input elements is bound to that state variable.
  - An `onChange` handler updates the state whenever the user types.

  ```javascript
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  <input type="text" value={inputValue} onChange={handleInputChange} />
  ```