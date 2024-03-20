import { useState } from "react";

const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        checkbox: false,
    })
    const [error, setError] = useState("")
    const handleChange = (e) => {
        console.log(e.target.value);
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.name.value.length <= 0 ? setError("com me may") : setError("")
        console.log(e.target.name.value.length);
    }

    return (
        <form action="#" autoComplete="off" className="flex flex-col gap-2 max-w-[300px]  mx-auto mt-5" onSubmit={handleSubmit}>
            <input type="text" name="name" className="border border-gray-400 p-3 rounded-md" placeholder="Name" onChange={handleChange} />
            <div className="text-red-500 text-sm">{error}</div>
            <input type="text" name='email' className="border border-gray-400 p-3 rounded-md" placeholder="Email" onChange={handleChange} />
            <input type="checkbox" name='checkbox' className="border border-gray-400 rounded-md " onChange={handleChange} />
            <button type="submit" className="bg-green-500 rounded-md p-5">Submit</button>
        </form>
    );
};

export default Form;