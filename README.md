# What is a Single Page Application?

- A web app that load the HTML, CSS, and JavaScript all at once.
- Then, it interacts with the user dynamically.
- It does so by rewriting the current page rather than loading new pages.
- This approach results in a smoother user experience.

#### Why SPAs?
- After the initial load, transitions can be lightning-fast.
- Smoother interactions, less jarring full-page loads.
- Better developer experience with JavaScript libraries like React.

### What is React?

- A library for building user interfaces.
- Developed and open-sourced by Facebook (now Meta).
- It is used in many of their products.
- Widely adopted across the web development industry.
- Primary focus is UI and managing the way they change in response to data.
- Emphasizes building reusable pieces of UI.
- That makes complex applications easier to manage.
- Huge community, tons of learning resources.
- A lot of supporting lirbaries, pre-built components, and tools are available.
- Learn Once, Write Anywhere!
- React can render on the server using Node.
- React Native lets you build native mobile apps for iOS and Android.

### Rich Ecosystem

React has a vast ecosystem built around it.

- **React**: 
    - The core library. Focuses on building reusable components and managing UI state.

- **React Router**:
    - For navigation in the web app.

- **React Native**: 
    - Framework for building mobile apps using React.

- **Gatsby**:
    - A static site generator for React.
    - Great for blogs, marketing sites, where SEO and super-fast load times are key.

- **NextJS**: 
    - A framework to develop full stack applications.
    - Simplifies common web development tasks like routing.
    - Can do server-side rendering, static site generation, and client-side interactions.

### Component-Based Architecture

- React apps are composed of components. 
- Think of components as self-contained pieces of your UI.
- Each component manages its own state (data) and rendering logic. 
- This makes them modular and reusable.

- Tree-Like Structure: 
    - Components are nested within each other. 
    - Complex UIs are built from smaller components, forming a parent-child hierarchy.

- Top-Down Data Flow: 
    - Data flows from parent components down to their children through props.
        - Props means properties.

- UI as a Function of State: 
    - When a component's state changes, React re-renders the component and its children.
    - Which updates the UI to reflect the new state.

### Benefits of Component-Based Architecture

- Maintainability: 
    - Breaking down the UI into smaller components makes it,
        - Easier to understand, test, and modify.

- Reusability: 
    - Components can be used in multiple places within your app.
        - Which reduces code duplication.

- Scalability: 
    - It's easier to add new features or refactor as your app grows in complexity.

### Starting a New Project with Vite

- Create a new project: `npm create vite@latest <app name>`
- Start in an existing folder: `npm create vite@latest .`

- **Vite offers, Hot Module Replacement (HMR)**: 
    - Changes to your code often update in the browser without a full reload.
    - Can see results nearly instantly!
    - That makes development faster and improve developer experience. 

- **Project Structure**: 

    - **`src`**:
        - Your main source code (components, logic, etc.)

    - **`public`**: 
        - Static assets (images)

    - **main.jsx**: 
        - Root of your React app, connects to an element in `index.html`
        - Thus establishes the connection between the React app and the HTML DOM.

    - **`package.json`**:
        - Project info, dependencies
        - **NPM scripts**:
            -  Automate tasks (`npm run dev`,  `npm run build`)

### Entry Point

- **`App.js`**: 
    - Usually the entry point.
    - Serves as the root component from which other components are nested.

- **Styles and Assets**: 
    - CSS: 
        - `import './main.css';`
    - Images:
        - `import imageName from './path/to/image.jpg'`
        - Usage: `<img src={imageName} alt="Image Description" />`

## Understanding JSX

- **JSX**: 
    - A syntax extension for JavaScript used in React.
    - It is to describe the UI's appearance. 
    - It looks like HTML but it is not.
    - It allows JavaScript expressions `{}` within it.
        - **For Example**: `<p>Today is {new Date().toDateString()}</p>`
    - Gets transformed into regular JavaScript by tools like Vite.\

    - **Comments**:  
        - `{/* This is a JSX comment */} `

### Alternatives to Vite

- Vite is a modern, fast tool for starting a React project.
- Alternatives like "Create React App" (CRA) also exist and remain popular.