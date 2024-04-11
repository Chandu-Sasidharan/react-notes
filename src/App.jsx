import { Routes, Route } from "react-router-dom";
import Header from "./header";
import AboutUs from "./about-us";
import ContactUs from "./contact-us";
import Home from "./home";
import NotFound from "./not-found";
import Dashboard from "./dashboard";
import Welcome from "./welcome";
import Profile from './profile';
import Settings from './settings';
import Success from "./success";
import Login from "./login";

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />

                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<Welcome />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/success" element={<Success />} />
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}