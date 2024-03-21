import Header from './components/header/Header';
import MyComponent from './components/my-new-component/MyComponent';
import Greetings from './components/greetings/Greetings';

import reactLogo from './assets/react.svg';

export default function App() {
    return (
        <>
            <Header />
            <h1 className="text-xl">Hello world!</h1>
            <img src={reactLogo} alt="react logo" />
            
            {/* Stuffs in the public folder can be accessed from the root of the website */}
            <img src="/vite.svg" alt="vite logo" />

            <MyComponent />
            <Greetings name='Mickey' age='20' />
        </>
    )
}
