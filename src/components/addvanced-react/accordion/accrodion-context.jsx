import { createContext, useContext } from "react";
import useShow from "./useShow";

const AccordionContext = createContext();

// eslint-disable-next-line react/prop-types
const AccordionProvider = ({ props, children }) => {
    const { show, handleShow } = useShow();
    const values = { show, handleShow };
    return <AccordionContext.Provider value={values} {...props}>{children}</AccordionContext.Provider>
}

const useAccodion = () => {
    const context = useContext(AccordionContext)
    if (typeof context === "undefined")
        throw new Error("useAccodion must be used within AccordionProvider")
    return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAccodion, AccordionProvider }