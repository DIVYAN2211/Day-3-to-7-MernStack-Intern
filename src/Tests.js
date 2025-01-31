import { useEffect, useState } from "react";

export default function Tests() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        if (count1 === 20) {
            console.log('Count1 reached 20, resetting to 0...');
            const timeout = setTimeout(() => {
                setCount1(0); 
            }, 1000); 

            // Cleanup to avoid memory leaks
            return () => clearTimeout(timeout);
        }
    }, [count1]);

    return (
        <>
            <h1>The state value is {count1}</h1>
            <h1>The state value is {count2}</h1>
            <button
                onClick={() => {
                    setCount1(count1 + 1); // Increment count1
                }}
            >
                Count1
            </button>

            <button
                onClick={() => {
                    setCount2(count2 + 1); // Increment count2
                }}
            >
                Count2
            </button>
        </>
    );
}
