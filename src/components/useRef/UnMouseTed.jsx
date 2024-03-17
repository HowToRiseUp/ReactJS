import { useState } from "react";
import Search from "../apiSearch/Search";

const UnMouseTed = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="rounded-md border p-5 m-5 w-36 bg-green-400 text-white select-none" onClick={() => {
                setShow(show => !show);
            }}>SHOW</div>
            {show && <Search></Search>}
        </div>
    );
};

export default UnMouseTed;