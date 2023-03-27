import { useState } from "react";

const mailsHeader = () => {
    // Show states for both dropdowns
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    
    // Closing dropdown when anywhere on the viewport is clicked
    document.addEventListener("click", e =>{
        if(e.target.tagName !== "I"){
            setShow(false);
            setShow2(false);
        }
    });

    return ( 
        <div className="relative bg-White text-FA-Dark flex items-center justify-between gap-6 p-4">
            <div className="flex items-center gap-8">
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


            <div className="flex items-center gap-6">
                <span className="">1-3 of 3</span>

                <div className="flex items-center gap-8">
                    <i className="fa-solid fa-angle-left"></i>
                    <i className="fa-solid fa-angle-right"></i>
                </div>

                <div className="relative flex items-center gap-2 mr-6">
                    <i className="fa-sharp fa-solid fa-keyboard"></i>
                    <i className="fa-solid fa-caret-down" onClick={() => {setShow2(!show2)}}></i>

                    <div className={`absolute top-6 right-0 bg-White w-52 py-2 text-center z-10 shadow-2xl  ${show2 ? "" : "hidden"}`}>
                        {[
                            ["English", "fa-solid fa-keyboard"],
                            ["English Dvorak", "fa-sharp fa-solid fa-keyboard"],
                            ["English", "fa-solid fa-e"],
                            ["English", "fa-solid fa-pen"],
                        ].map(([title, className]) => (
                            <p key={className} className="flex items-center justify-center gap-2 mt-2 hover:bg-FA-Hover cursor-pointer"><i key={title} className={`${className}`}></i> { title } </p>
                        ))}
                        <p className="my-2 py-2 cursor-pointer border-t border-solid border-FA-Hover">Input Tools Settings</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default mailsHeader;