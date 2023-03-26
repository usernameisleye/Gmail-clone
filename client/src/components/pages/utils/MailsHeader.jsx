import { useState } from "react";

const mailsHeader = () => {
    const [show, setShow] = useState(false);

    return ( 
        <div className="relative bg-White text-FA-Dark flex items-center justify-between gap-6 p-4">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
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

                <div className="flex items-center gap-2 mr-6">
                    <i className="fa-sharp fa-solid fa-keyboard"></i>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </div>
    );
}
 
export default mailsHeader;