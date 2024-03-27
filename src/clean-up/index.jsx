import { useEffect, useState } from "react"

export default function CleanUpExample() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // function that updates state based on window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    // Subscribe to the window resize event when the component mounts
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup function to unsubscribe from the resize event
        // This function is returned from the useEffect hook
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <span className="text-5xl">{windowWidth}</span>
        </div>
    )
}