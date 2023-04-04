import { useState } from "react";
import MailExtras from "./MailExtras";

const mailsHeader = () => {
    // Show states for both dropdowns
    const [show, setShow] = useState(false);
        
    // Closing dropdown when anywhere on the viewport is clicked
    document.addEventListener("click", e =>{
        if(e.target.tagName !== "I"){
            setShow(false);
        }
    });

    return ( 
        <div className="relative bg-White text-FA-Dark flex items-center justify-between gap-6 p-4">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                    {/* Open and close "show" options */}
                    <i className="fa-solid fa-caret-down" onClick={() => {setShow(!show)}}></i>

                    <div className={`absolute top-10 bg-White w-32 py-2 text-center z-10 shadow-xl ${show ? "" : "hidden"}`}>
                        {["All", "None", "Read", "Unread", "Starred", "Unstarred"].map((title) =>(
                            <div key={title} className="hover:bg-FA-Hover cursor-pointer">{ title }</div>
                        ))}
                    </div>
                </div>

                <i className="fa-solid fa-rotate-right" onClick={() => location.reload()}></i>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>


           <MailExtras />
        </div>
    );
}
 
export default mailsHeader;