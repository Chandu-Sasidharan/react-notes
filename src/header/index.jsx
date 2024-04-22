import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../App"

export default function Header() {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="bg-slate-200 h-[60px] text-sm flex justify-between items-center pl-3 pr-3">
            <nav>
                <ul className="flex gap-3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
            <button
                className="btn btn-primary btn-xs"
                onClick={toggleDarkMode}
            >
                { isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}