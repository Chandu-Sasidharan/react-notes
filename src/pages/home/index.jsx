import { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../App";
import Counter from "../../components/counter.jsx";

export default function Home() {
    const { isDarkMode } = useContext(ThemeContext);

    const classnames = classNames({
        "h-screen": true,
        "bg-slate-900 text-slate-100": isDarkMode,
        "bg-slate-100 text-slate-900": !isDarkMode

    })

    console.log(classnames);
    return (
        <div className={classnames}>
            <h1>Home Page</h1>
            <Counter />
        </div>
    )
}