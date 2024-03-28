import useHover from "../../hooks/useHover";
import { createPortal } from "react-dom";

const HoverItem = () => {
    const { hover, nodeRef } = useHover()
    const coord = nodeRef?.current?.getBoundingClientRect();
    console.log(coord);
    return (
        <>
            {
                hover &&
                <DesHover coord={coord}></DesHover>
            }
            <div className="flex items-center justify-center">
                <div ref={nodeRef} className=" w-[150px] mt-96">
                    Hover Em đi
                </div>
            </div>
        </>
    );
};

const DesHover = ({ coord }) => {
    return createPortal(
        <div className="text-white bg-black rounded-md p-5 absolute -translate-y-full transition-all" style={{
            top: coord.top - coord.height + window.scrollY,
            left: coord.left - coord.width / 2,
        }}>
            lorem cc casd cas casd
        </div>, document.getElementById('root')
    )
}

export default HoverItem;