import reactLogo from './assets/react.svg';

export default function App() {
    return (
        <>
            <h1 className="text-xl">Hello world!</h1>
            <img src={reactLogo} alt="react logo" />
            
            {/* Stuffs in the public folder can be accessed from the root of the website */}
            <img src="/vite.svg" alt="vite logo" />
        </>
    )
}