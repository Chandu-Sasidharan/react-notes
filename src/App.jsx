import { Routes, Route } from "react-router-dom";
import Header from "./header";
import AboutUs from "./about-us";
import ContactUs from "./contact-us";
import Home from "./home";
import NotFound from "./not-found";

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}