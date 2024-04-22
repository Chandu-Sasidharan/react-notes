import { useMemo } from "react";

export default function TotalRevenue({ quantity, pricePerItem }) {
    
    const totalRevenue = useMemo(() => {
        console.log('Calculating total...');
        return quantity * pricePerItem;
    }, [quantity, pricePerItem]);

    console.log("re-rendering");

    return (<h2>Your Total Revenue: ${totalRevenue}</h2>);
}