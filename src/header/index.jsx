import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navabar bg-slate-200 p-3">
            <ul className="flex gap-3">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    )
}