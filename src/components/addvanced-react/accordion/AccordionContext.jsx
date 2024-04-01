
// eslint-disable-next-line react/prop-types
const AccordionContext = ({ children }) => {
    return (
        <>
            <div className="transition-all p-3 border border-gray-300 mt-2 relative before:absolute before:left-0 before:-top-3 before:content-[''] before:p-3 before:w-full rounded-lg bg-gray-100" >
                {children}
            </div>
        </>
    );
};

export default AccordionContext;