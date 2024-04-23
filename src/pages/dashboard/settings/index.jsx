import { useState } from "react";
import useUser from "../../../store/use-user";

export default function Settings() {
    const { updateUser } = useUser();
    const [username, setUsername] = useState('');

    return (
        <div>
            <h1>User Profile</h1>
            <div className="flex flex-col items-start mt-10 gap-1">
                <input 
                    type="text"
                    placeholder="Enter new username"
                    className="input input-bordered input-sm w-full max-w-sm mb-2" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => updateUser(username)}
                >
                    Update Username
                </button>
            </div>
        </div>
    )
}