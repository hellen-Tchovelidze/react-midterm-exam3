import { Children } from "react";

function Button({text, onClick}) {
    return(<>
    <button onClick={onClick}  className=" flex justify-center items-center w-[336px] h-[48px] bg-white rounded-[6px] ">{text}</button>
    
    </>)
}


export default Button