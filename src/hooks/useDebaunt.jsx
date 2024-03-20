import { useEffect, useState } from "react";

export default function useDebaunt(initialValue, time = 300) {
    const [debautValue, setDebautValue] = useState();
    useEffect(() => {
        setTimeout(() => {
            setDebautValue(initialValue)
        }, time);
    }, [initialValue, time])
    return debautValue;
}