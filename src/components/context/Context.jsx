import { createContext, useContext, useState } from "react";


const CountContext = createContext();

const CountProvider = (prop) => {
    const [count, setCount] = useState(0);
    const value = [count, setCount];
    return (
        <CountContext.Provider value={value} {...prop} ></CountContext.Provider>
    )
}

const Context = () => {
    return (
        <>

            <CountProvider>
                <CountBtn></CountBtn>
                <Count></Count>
            </CountProvider>
        </>
    );
};
function useCount() {
    const context = useContext(CountContext)
    if (typeof context === "undefined")
        throw new Error('useCount must be used within a CountProvider')
    return context;
}

const CountBtn = () => {
    const [, setCount] = useCount()
    return (
        <>
            <button className="bg-red-400 rounded-lg text-white p-5 m-5" onClick={() => {
                setCount(count => count + 1)
            }}> Plus</button>
        </>)
}
const Count = () => {
    const [count,] = useCount()
    console.log("🚀 ~ Count ~ count:", count)
    return (
        <div className="m-5">{count}</div>)
}


export default Context;