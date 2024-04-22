import { useId } from "react";

export default function TextInputField() {
    const id = useId();

    return (
        <div>
            <label 
                htmlFor={id}
                className="text-gray-500"
            >
                Name:
            </label>
            <input 
                id={id} 
                type="text" 
                name="name"
                className="input input-bordered block"
            />
        </div>
    );
}