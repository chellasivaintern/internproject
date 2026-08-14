import React from "react";
 function Input(props) {
    return <>
    <input  name={props.name} type={props.type} placeholder={props.placeholder} className={props.className}/>
    </>
 }

 export default Input;