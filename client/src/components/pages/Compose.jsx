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
        <form className={`${ open ? "" : "hidden" } bg-White fixed right-20 bottom-0 flex flex-col w-[calc(30%+5rem)] overflow-hidden rounded-md`}>
            {/* Header section of compose box */}
            <header className="flex justify-between bg-Bright-Blue p-2">
                <span className="font-semibold">New Message</span>
                <div className="flex gap-1 items-center">
                    <img src="/assets/minimize.png" alt="" />
                    <img src="/assets/maximize.png" alt="" />
                    <img src="/assets/close.png" onClick={() => setOpen(false)} alt="" />
                </div>
            </header>

            <div className="">
                <input className="w-full outline-none py-2 mx-2 border-b border-solid border-b-FA-Hover placeholder:font-light" type="text" placeholder="Recipients" />
            </div>

            <div className="">
                <input className="w-full outline-none py-2 mx-2 border-b border-solid border-b-FA-Hover placeholder:font-light" type="text" placeholder="Subject" />
            </div>

            <div className="">
                <textarea className="resize-none w-full h-80 outline-none p-2 mx-2" name="" id="" ></textarea>
            </div>

            <footer className="flex justify-between p-4">
                <div className="flex">

                    <div className="flex items-center">
                        <button className="bg-Dark-Blue text-White  rounded-tl-3xl rounded-bl-3xl">Send</button>
                        <button className=""><i className="fa-solid fa-caret-down bg-Dark-Blue text-White rounded-tr-3xl rounded-br-3xl"></i></button>
                    </div>

                    <ul className="inline-flex items-center">
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

                <div className="">
                    <img src="/assets/delete.png" alt="" />
                </div>
            </footer>
        </form>
     );
}
 
export default Compose;