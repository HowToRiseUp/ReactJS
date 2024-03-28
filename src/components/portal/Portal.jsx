import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function createPortalWrapper() {
    const element = document.createElement('div')
    element.id = 'portal-wrapper';
    return element;
}
const portalWrapperElm = createPortalWrapper();


const Portal = ({ onClose, children, bodyStyle }) => {
    useEffect(() => {
        document.body.appendChild(portalWrapperElm);
    }, [])
    const renderContent = (
        <div className={`fixed inset-0 flex items-center justify-center `}>
            <div className="overplay absolute inset-0 bg-[#9999] bg-opacity-20" onClick={onClose}></div>
            <div className="content absolute p-5 bg-white rounded-lg" style={bodyStyle}>{children}</div>

        </div>
    )
    return createPortal(renderContent, portalWrapperElm);
};
Portal.propTypes = {
    bodyStyle: PropTypes.object,
    onClose: PropTypes.func,
    children: PropTypes.node,
};
export default Portal;