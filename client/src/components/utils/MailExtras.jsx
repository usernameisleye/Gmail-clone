import { useState } from "react";

const MailExtras = () => {
    const [show, setShow] = useState(false);
    
    // Closing dropdown when anywhere on the viewport is clicked
    document.addEventListener("click", e =>{
        if(e.target.tagName !== "IMG"){
            setShow(false);
        }
    });

    return ( 
        <div className="flex items-center gap-6">
            <span className="text-sm">1-3 of 3</span>

            <div className="flex items-center gap-8">
                <i className="fa-solid fa-angle-left opacity-50"></i>
                <i className="fa-solid fa-angle-right"></i>
            </div>

            <div className="relative flex items-center mr-6">
                <i className="fa-sharp fa-solid fa-keyboard"></i>
                <img src="/assets/arrow_drop_down.png" alt="" className="" onClick={() => {setShow(!show)}}/>

                <div className={`absolute top-6 right-0 bg-White w-52 py-2 text-center z-10 shadow-2xl  ${show ? "" : "hidden"}`}>
                    {[
                        ["English", "fa-solid fa-keyboard"],
                        ["English Dvorak", "fa-sharp fa-solid fa-keyboard"],
                        ["English", "fa-solid fa-e"],
                        ["English", "fa-solid fa-pen"],
                    ].map(([title, className]) => (
                        <p key={className} className="flex items-center justify-start px-8 gap-2 mt-2 hover:bg-FA-Hover cursor-pointer"><i key={title} className={`${className}`}></i> { title } </p>
                    ))}
                    <p className="my-2 pt-2 cursor-pointer border-t border-solid border-FA-Hover">Input Tools Settings</p>
                </div>
            </div>
        </div>
     );
}
 
export default MailExtras;