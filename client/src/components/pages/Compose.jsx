import { useState } from "react";

const Compose = () => {
    const [open, setOpen] = useState(false);
    // Targetting compose btn and setting "setOpen" to true when clicked
    document.addEventListener("click", e =>{
        if(e.target.classList.contains("compose")){
            setOpen(true);
        }
    });

    return ( 
        <form className={`${ open ? "" : "hidden" } bg-White fixed right-20 bottom-0 flex flex-col w-[calc(25rem+5rem)] overflow-hidden rounded-md shadow-xl`}>
            {/* Header section of compose box */}
            <header className="flex justify-between bg-Bright-Blue p-2">
                <span className="font-semibold">New Message</span>
                <div className="flex gap-1 items-center">
                    <img src="/assets/minimize.png" alt="" />
                    <img src="/assets/maximize.png" alt="" />
                    <img src="/assets/close.png" onClick={() => setOpen(false)} alt="" />
                </div>
            </header>

            <div className="relative group">
                <input 
                 className="w-full outline-none group-focus-within:pl-6 py-2 mx-2 border-b border-solid border-b-FA-Hover placeholder:font-light focus:placeholder:text-White" 
                 type="text" 
                 placeholder="Recipients" 
                />
                <span className="absolute top-[20%] invisible group-focus-within:visible left-2">To</span>
                <span className="absolute top-[20%] invisible group-focus-within:visible right-2">Cc Bcc</span>
            </div>

            <div className="">
                <input 
                 className="w-full outline-none py-2 mx-2 border-b border-solid border-b-FA-Hover placeholder:font-light" 
                 type="text" 
                 placeholder="Subject" />
            </div>

            <div className="">
                <textarea className="resize-none w-full h-72 outline-none p-2 mx-2" name="" id="" ></textarea>
            </div>

            <footer className="flex justify-between p-4">
                <div className="flex">

                    <div className="flex items-center mr-3">
                        <button className="bg-Dark-Blue text-White rounded-tl-3xl rounded-bl-3xl h-10 py-2 px-4 border-r border-solid border-Black">Send</button>
                        <button className=""><i className="fa-solid fa-caret-down bg-Dark-Blue text-White rounded-tr-3xl rounded-br-3xl h-10 py-2 px-3 leading-normal"></i></button>
                    </div>

                    <ul className="flex items-center gap-3">
                        <img src="/assets/format_text.png" alt="" />
                        <img src="/assets/attachment.png" alt="" />
                        <img src="/assets/link.png" alt="" />
                        <img src="/assets/mood.png" alt="" />
                        <img src="/assets/drive.png" alt="" />
                        <img src="/assets/picture.png" alt="" />
                        <img src="/assets/lock.png" alt="" />
                        <img src="/assets/ink_pen.png" alt="" />
                        <img src="/assets/more.png" alt="" />
                    </ul>
                </div>

                <div className="flex items-center">
                    <img src="/assets/delete.png" alt="" />
                </div>
            </footer>
        </form>
     );
}
 
export default Compose;