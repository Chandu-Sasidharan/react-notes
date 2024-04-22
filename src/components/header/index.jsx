import { Link } from "react-router-dom"

export default function Header() {

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
        </div>
    )
}