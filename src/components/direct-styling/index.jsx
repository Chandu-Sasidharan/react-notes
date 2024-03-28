import { useRef } from "react";

function DirectStyling() {
    // Reference to the element we want to style directly
    const headerRef = useRef(null);

    // Function to change style
    const highlightHeader = () => {
        if (headerRef.current) {
            headerRef.current.style.backgroundColor = '#ffd700'; 
        }
    }

    // Function to reset the style
    const resetHeaderStyle = () => {
        if (headerRef.current) {
            headerRef.current.style.backgroundColor = '';
        }
    }

    return (
        <div>
            <h1 
                className="p-2"
                ref={headerRef}
            >
                Hover Over the Button to Highklight me!
            </h1>
            <button
                className="btn btn-primary btn-sm m-2"
                onMouseEnter={highlightHeader}
                onMouseLeave={resetHeaderStyle}
            >
                Hover Me
            </button>
        </div>
    )
}

export default DirectStyling