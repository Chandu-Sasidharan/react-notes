import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className="space-x-5 m-5">
            <span>{count}</span>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleClick}
            >
                Default
            </button>
        </div>
    );
}