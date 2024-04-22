import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ContactUs from "./pages/contact-us";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Dashboard from "./pages/dashboard";
import Welcome from "./pages/dashboard/welcome";
import Profile from './pages/dashboard/profile';
import Settings from './pages/dashboard/settings';
import Success from "./pages/success";
import Login from "./pages/login";
import Posts from "./pages/posts";
import PostDetails from "./pages/posts/post-details";
import { UserProvider } from "./store/user-context";

// create a theme context
export const ThemeContext = createContext(true);

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{
            isDarkMode,
            setIsDarkMode
        }}>
            <UserProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<Welcome />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:postId" element={< PostDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </UserProvider>
        </ThemeContext.Provider>
    )
}