import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    // Closing dropdown when anywhere on the viewport is clicked
    document.addEventListener("click", e =>{
        if(e.target.tagName !== "IMG"){
            setShow(false);
        }
    });

    return ( 
        <header className="flex py-2 px-6 h-16 text-FA-Dark text-xl">
            {/* Logo section */}
            <div className="flex items-center gap-4">
                <img src="./assets/icon-hamburger.svg" className="mb-1 cursor-pointer" alt="" />
                <img className="w-22" src="/assets/logo.png" alt="" />
            </div>

            {/* Input section */}
            <div className="w-[calc(50%+4rem)] ml-20 relative">
                <img src="./assets/search.svg" alt="" className="absolute top-1/2 -translate-y-1/2 left-4 text-base" />
                <input className=" text-base w-full h-12 px-14  rounded-md outline-0 border-0 bg-Input-Bg  placeholder:text-Placeholder-Text placeholder:text-opacity-90 focus:bg-White focus:placeholder:text-Base-Text focus:shadow-md transition" type="text" placeholder="Search mail" />
                <img src="./assets/filter.svg" alt="" className="absolute top-1/2 -translate-y-1/2 right-4" />
            </div>

            {/* Help, setting and profile section */}
            <div className="flex items-center gap-4 ml-auto relative">
                <img src="./assets/help.svg" alt="" className="" onClick={() => setShow(!show)}/>
                <img src="./assets/settings.svg" alt="" className="" />
                <img src="./assets/google_apps.svg" alt="" />
                <img className="w-8 h-8 rounded-full" src="/assets/user.png" alt="" />

                <div className={`absolute top-10 right-3/4 bg-White w-52 py-2 text-center text-base z-10 shadow-xl ${show ? "" : "hidden"}`}>
                    {["Help", "Training", "Updates"].map((title) =>(
                                <div key={title} className="hover:bg-FA-Hover cursor-pointer">{ title }</div>
                            ))}
                    <p className="my-2 pt-2 cursor-pointer border-t border-solid border-FA-Hover">Send Feedback to Google</p>
                </div>
            </div>
        </header>
    );
}
 
export default Header;