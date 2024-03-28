import { useRef, useEffect } from "react";

export default function InputFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="flex flex-col gap-3 m-5">
            <input
                type="text"
                ref={inputRef}
                className="input input-bordered input-sm"
                placeholder="Focus Me"
            />
            <input
                type="text"
                className="input input-bordered input-sm"
                placeholder="Focus Me"
            />
        </div>
    )
}