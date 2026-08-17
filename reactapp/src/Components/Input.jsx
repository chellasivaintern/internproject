import React from "react";
 function Input({...rest}) {
    return <>
    <input {...rest}/>
     {/* name={props.name} type={props.type} placeholder={props.placeholder} className={props.className} */}
    </>
 }

 export default Input;