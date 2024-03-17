import { useEffect, useRef, useState } from "react";

export default function useHover() {
    const [hover, setHover] = useState(false)
    const nodeRef = useRef(null)
    addEventListener
    useEffect(() => {
        const dom = nodeRef.current;
        const handlMouseOver = () => {
            setHover(true)
        }
        const handlMouseOut = () => {
            setHover(false)
        }
        dom.addEventListener('mouseover', handlMouseOver)
        dom.addEventListener('mouseout', handlMouseOut)
        return () => {
            dom.addEventListener('mouseover', handlMouseOver)
            dom.addEventListener('mouseout', handlMouseOut)
        }
    }, [])
    return { hover, nodeRef }
}