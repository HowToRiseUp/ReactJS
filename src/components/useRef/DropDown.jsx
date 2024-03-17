import useClickOutSide from "../../hooks/useClickOutSide";

const DropDown = () => {
    const { click, setClick, domRef: divRef } = useClickOutSide();
    return (
        <div className="m-5">
            <div className="relative max-w-[400px]" ref={divRef}>
                <div className="p-5 w-full rounded-md border border-gray-400 cursor-pointer select-none" onClick={() => {
                    setClick(click => !click)
                }}>Selete</div>
                {
                    click && (

                        <div className="rounded-md border absolute w-full top-full border-gray-400 mt-5 before:content-[''] before:absolute before:text-red-500 before:top-[-20px] before:w-full before:h-5">
                            <div className="rounded-md w-full p-5 ">cccc</div>
                            <div className="rounded-md w-full p-5 ">cccc</div>
                            <div className="rounded-md w-full p-5">cccc</div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default DropDown;