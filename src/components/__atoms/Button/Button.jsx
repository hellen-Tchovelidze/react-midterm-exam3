import { Children } from "react";

function Button({text, onClick}) {
    return(<>
    <button onClick={onClick}  className=" flex justify-center items-center w-[336px] h-[48px] bg-[#FC4747] rounded-[6px] hover:bg-white  max-sm:w-[300px]">{text}</button>
    
    </>)
}


export default Button