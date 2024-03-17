import useHover from "../../hooks/useHover";

const TextHoverHook = () => {
    const { hover, nodeRef } = useHover();
    console.log(hover);
    return (
        <div className="m-5">
            <div className={`select-none text-white rounded-md p-5 ${hover ? "bg-green-400" : "bg-gray-600"}`} ref={nodeRef}>Co me may</div>
        </div>
    );
};

export default TextHoverHook;