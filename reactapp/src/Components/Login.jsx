import React from "react";
import Input from "./Input";
import Products from "./Products";

function Login() {

    const LoginFields = [ 
        { name :"username" , className:"w-full border border-gray-300 border-b-2 border-b-yellow-600 rounded-md p-2 outline-none focus:border-yellow-500", type : "text" , placeholder : "Enter username"},
        { name :"password" ,  className:"w-full border border-gray-300 border-b-2 border-b-yellow-600 rounded-md p-2 outline-none focus:border-yellow-500",  type : "password" , placeholder : "Enter password"}
    ];
    return <>
    <Products/>
    {/* <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col gap-4 w-full max-w-xs p-6 bg-white rounded-xl shadow-md border border-gray-100">
            {LoginFields.map((data,index) => 
            <Input key={index+1} {...data} />
            )}
            <button className="bg-[#a58d00] text-white text-[12px] border rounded-lg p-3"> Submit </button>
        </div>
    </div> */}
    </>
}
 {/* type={data.type} name={data.name} placeholder={data.placeholder} */}
export default Login