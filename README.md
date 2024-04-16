---
yesterday:
  - you learnt dynamic routes and route params
today:
  - we will talk about state management
---

# State Management

- Until now we were dealing only with local state.

- **Local State**:
  - Managed within a single component with useState hook.
  - Suitable for data needed only by that component or its direct children.
  
- **Prop Drilling**:
  - The process of passing data down through multiple layers of nested components.
  - Often times, those intermediate components don't directly need it themselves.
  - They still have to recieve it and pass it down to its children.
  - Results in lots of prop passing at each level.
  - This makes intermediate components less reusable.

![Prop Drilling](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.png&w=1920&q=75)

## Global State

- Data shared across many components in your application.
- Used for data that needs to be accessible by many parts of the application.
- Examples: User authentication status, theme settings etc.
- Tools like Redux, Zustand, or React Context can help manage global state.

## Context API

- Provides a way to share values like global data between components.
- It does so without having to explicitly pass a prop through every level.

## Steps involved

1. **Creating Context**:

  ```javascript
  const ThemeContext = createContext(false); // initial value
  ```
  - This creates a context object. 
  - The argument (`false`) is the default value for the context.

2. **Provide the value**:
  - Wrap components that need the context with a Provider.
  - Set the value you want to share.

  ```javascript
  <ThemeContext.Provider value={isDarkMode}> 
    {/* Components here can access dark mode state */}
  </ThemeContext.Provider>
  ```
3. **Consume the Value**:
  - Use the useContext hook inside a component within the Provider tree.

  ```javascript
  const isDarkModeOn = useContext(ThemeContext);
  ```

## Custom Context Provider

- For more complex state logic, create a separate context provider component.

```javascript
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // other logic
    
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};
```

- Use the provider in your main component:
```javascript
import { UserProvider } from ...
function App() {
    return (
        <UserProvider>
            {/* Components that need access to this context */}
        </UserProvider>
    );
}
```

### Best Practices
- Do not add all local states to the context, until unless a need arrives.
- Use context for application-wide state like theme or user authentication.
