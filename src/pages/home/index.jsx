import { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../App";
import Counter from "../../components/counter.jsx";

export default function Home() {
    const { isDarkMode, setIsDarkMode} = useContext(ThemeContext);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const classnames = classNames({
        "p-10": true,
        "bg-slate-900 text-slate-100": isDarkMode,
        "bg-slate-100 text-slate-900": !isDarkMode
    })

    const btnClasses = classNames({
        "btn btn-primary btn-xs hover:bg-stone-600 border-0": true,
        "bg-slate-100 text-slate-900 hover:bg-red-200": isDarkMode
    })

    console.log(classnames);
    return (
        <div 
            className={classnames}
            style={{ minHeight: 'calc(100vh - 60px'}}
        >
            <button
                className={btnClasses}
                onClick={toggleDarkMode}
            >
                { isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <h1 className="mt-5">Home Page</h1>
            <Counter />
        </div>
    )
}