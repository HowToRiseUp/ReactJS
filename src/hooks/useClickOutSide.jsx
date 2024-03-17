import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);
    const bodyRef = useRef(document.body); // Initialize bodyRef with document.body

    useEffect(() => {
        const handleClickBody = (e) => {
            // Check if the clicked element is not the nodeRef or a descendant of the nodeRef
            if (nodeRef.current && !nodeRef.current.contains(e.target)) {
                // Click occurred outside the nodeRef
                setShow(false);
            }
        };

        // Add event listener to handle clicks on the body
        document.body.addEventListener("click", handleClickBody);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            document.body.removeEventListener("click", handleClickBody);
        };
    }, [nodeRef]); // Ensure useEffect runs when nodeRef changes

    return { show, nodeRef, setShow, bodyRef };
}
