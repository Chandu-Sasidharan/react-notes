import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Home() {
    const { isDarkMode } = useContext(ThemeContext);


    return (
        <div className={`h-screen ${ isDarkMode ? "bg-slate-900 text-slate-100" : "bg-slate-100 text-slate-900"}`}>
            <h1>Home Page</h1>
        </div>
    )
}