import { Routes, Route } from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./component/header";
import NotFound from "./pages/not-found"
import Dashboard from "./pages/dashboard";
import Welcome from "./pages/dashboard/welcome";
import Profile from "./pages/dashboard/profile";
import Settings from "./pages/dashboard/settings";
import NotFoundDashboard from "./pages/dashboard/not-found";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<Welcome />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="*" element={<NotFoundDashboard />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}