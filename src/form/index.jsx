import { useState } from "react"

export default function Form() {
    const [formData, setFromData] = useState({
        email: '',
        password: ''
    })
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFromData( prevValue => ({ 
            ...prevValue, 
            [name]: value 
        }))
    }


    return (
        <div className="m-5">
            <input 
                type="email"
                className="input input-bordered w-full max-w-xs"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
            />
            <input 
                type="password"
                className="input input-bordered w-full max-w-xs"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
            />
        </div>
    )
}