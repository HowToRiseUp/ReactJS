import { useAccodion } from "./accrodion-context";

// eslint-disable-next-line react/prop-types
const AccodionHeader = ({ header, children }) => {
    const { show, handleShow } = useAccodion();
    return (
        <div className="w-[300px] my-4">
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-lg" onClick={handleShow}><span>{header}</span><span>+</span></div>
            {show && children}
        </div>
    );
};

export default AccodionHeader;