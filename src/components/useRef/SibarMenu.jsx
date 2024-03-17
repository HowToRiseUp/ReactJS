/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const SibarMenu = forwardRef(({ show }, ref) => {
    return (
        <div ref={ref} className={`fixed top-0 left-0 bottom-0 w-[300px] bg-gray-400 transition-all ${show ? "-translate-x-full" : ""}`}>
            {/* Sidebar content goes here */}
        </div>
    );
});

export default SibarMenu;
