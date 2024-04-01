import { useState } from "react"

export default function useShow() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow((show => !show))
    }

    return { show, handleShow }
}