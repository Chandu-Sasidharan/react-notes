import { useState } from "react"

export default function SingleInput() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className="m-5">
            <input 
                type="text" 
                className="input input-bordered w-full max-w-xs"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here"
            />
        </div>
    )
}