import { useState } from "react";
import useUser from "../../../store/use-user";
import TotalRevenue from "./total-revenue";

export default function Welcome() {
    const [quantity, setQuantity] = useState(20)
    const [count, setCount] = useState(0);
    const { userState } = useUser()

    return (
        <div>
            <h1>{`Welcome ${userState.username}`}</h1>
            <TotalRevenue quantity={quantity} pricePerItem={10} />
            <button
                className="btn btn-primary btn-sm mt-5"
                onClick={() => setCount(prev => prev + 1)}
            >
                Trigger Rerender {count}
            </button>
        </div>
    )
}