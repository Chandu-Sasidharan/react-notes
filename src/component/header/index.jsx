import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar bg-slate-200 z-10">
            <ul className="space-x-5">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    )
}