import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";

export default function App() {
    return (
        <BrowserRouter>
            <nav className="navbar bg-slate-200">
                <ul className="space-x-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}