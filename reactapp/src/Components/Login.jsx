import React, { useState } from "react";
import Input from "./Input";
import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

    // const [username,setUsername] = useState("");
    // const [password,setPassword] = useState("");
    const [formdata,setFormdata] = useState({
        username:"",
        password:""
    })

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log("submitted data",
    //         {username:username,
    //         password:password}
    //     )
    // }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormdata((prevdata) => ({
            ...prevdata,
            [name] : value,
        }));
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(!formdata.username.trim() &&!formdata.password.trim())
        {
            toast.error("Please fill in both username and password");
            return;
        }

        if(!formdata.username.trim())
        {
            toast.error("Username is required");
            return;
        }

         if(!formdata.password.trim())
        {
            toast.error("Password is required");
            return;
        }

        toast.success("Login Successful!");
        console.log("submitted data",formdata)
    }

    const LoginFields = [ 
        // onChange:(e) => setUsername(e.target.value) , onChange:(e) => setPassword(e.target.value)
        { name :"username" , onChange:(handleChange), value : formdata.username ,className:"w-full border border-gray-300 border-b-2 border-b-yellow-600 rounded-md p-2 outline-none focus:border-yellow-500 mb-8", type : "text" , placeholder : "Enter username"},
        { name :"password" , onChange:(handleChange),  value : formdata.password ,className:"w-full border border-gray-300 border-b-2 border-b-yellow-600 rounded-md p-2 outline-none focus:border-yellow-500 mb-8",  type : "password" , placeholder : "Enter password"}
    ];
    return <>
    <ToastContainer position="top-right" autoClose={3000} />
    <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col gap-4 w-full max-w-xs p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <form onSubmit={handleClick}>
            {LoginFields.map((data,index) => 
            <Input key={index+1} {...data} />
            )}
            <button type="submit" className="bg-[#a58d00] text-white text-[12px] border rounded-lg p-3"> Submit </button>
            </form>
        </div>
    </div>
    </>
}
 {/* type={data.type} name={data.name} placeholder={data.placeholder} */}
export default Login