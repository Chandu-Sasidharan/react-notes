import { useState } from "react"

export default function ObjectAsState() {
    const [number, setNumber] = useState([1, 2, 3]);

    const handleClick = () => {
        const newNum = number.length + 1;
        setNumber(prev => [ ...prev, newNum ]);
    }

    return (
        <div className="space-x-5 m-5">
            <button 
                className="btn btn-primary btn-sm mb-5"
                onClick={handleClick}
            >
                Increment
            </button>
            <ul>
                {number.map((num, i) => <li key={i}>{num}</li>)}
            </ul>
        </div>
    )
}