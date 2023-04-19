import { useState } from "react";
import ComposeError from "../utils/ComposeError";

const Compose = () => {
    // Mail values states
    const [recipient, setRecipient] = useState("");
    const [from, setFrom] = useState("");
    const [sender, setSender] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [sending, setSending] = useState(false);

    const [open, setOpen] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    // Targetting compose btn and setting "setOpen" to true when clicked
    document.addEventListener("click", e =>{
        if(e.target.classList.contains("another")){
            setOpen(true);
            setDisabled(false);
        }else if(e.target.classList.contains("current")){
            setOpen(true);
            setDisabled(true);
        }

        if(e.target.tagName !== "IMG"){
            setShowSchedule(false);
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const mail = { recipient, from , sender, subject, body }
        
        try{
            const res = await fetch(disabled ? "http://localhost:5050/api/mails":"http://localhost:5050/api/mails/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mail)
            });

            const resData = await res.json();

            if(res.ok){
                console.log("Mail sent");
                setOpen(false);
                setRecipient("");
                setSender("");
                setSubject("");
                setBody("");
                setSending(false)
            }
        }
        catch(err){
            setError(err.message);
            setSending(false);
        }
    };

    return ( 
        <form className={`${ open ? "" : "hidden" } bg-White fixed right-20 bottom-0 flex flex-col w-[calc(25rem+5rem)] overflow-hidden rounded-md shadow-xl text-sm`} onSubmit={handleSubmit}>
            {/* Header section of compose box */}
            <header className="flex justify-between bg-Bright-Blue p-2 w-[100%]">
                <span className="font-semibold">New Message</span>
                <div className="flex gap-1 items-center">
                    <img src="/assets/minimize.png" alt="" />
                    <img src="/assets/maximize.png" alt="" />
                    <img src="/assets/close.png" onClick={() => setOpen(false)} alt="" />
                </div>
            </header>

            {/* Recipient */}
            { disabled ?
                <div className="">
                    <input 
                        className="w-full outline-none py-2 mx-2 border-b border-solid border-b-FA-Hover" 
                        type="text" 
                        placeholder="From(Your Name)" 
                        value={from}
                        onChange={e => setFrom(e.target.value)}
                        required
                    />
                </div>
                :
                <div className="relative group">
                    <input 
                    className="w-full outline-none group-focus-within:pl-6 py-2 mx-2 border-b border-solid border-b-FA-Hover focus:placeholder:text-White" 
                    type="email" 
                    placeholder="Recipient(s)" 
                    value={recipient}
                    onChange={e => setRecipient(e.target.value)}
                    required
                    />
                    <span className="absolute top-[20%] invisible group-focus-within:visible left-2">To</span>
                    <span className="absolute top-[20%] invisible group-focus-within:visible right-2">Cc Bcc</span>
                </div>
             }

            {/* Sender */}
            <div className="">
                <input 
                 className="w-full outline-none py-2 mx-2 border-b border-solid border-b-FA-Hover" 
                 type="email" 
                 placeholder={ disabled ? "Sender(Your Email)" : "Sender" }
                 value={sender}
                 onChange={e => setSender(e.target.value)}
                 required
                />
            </div>

            {/* Subject */}
            <div className="">
                <input 
                 className="w-full outline-none py-2 mx-2 border-b border-solid border-b-FA-Hover" 
                 type="text" 
                 placeholder="Subject" 
                 value={subject}
                 onChange={e => setSubject(e.target.value)}
                 required
                />
            </div>

            {/* Body */}
            <div className="">
                <textarea 
                 className="resize-none w-full h-[16rem] outline-none p-2 mx-2" 
                 name="" 
                 id="" 
                 value={body}
                 onChange={e => setBody(e.target.value)}
                ></textarea>
            </div>

            {/* Footer Section */}
            <footer className="flex justify-between p-4">
                <div className="flex">

                    {/* Send Button */}
                    <div className="relative flex items-center mr-3 focus-within:brightness-110">
                        <button className="bg-Dark-Blue text-White rounded-tl-3xl rounded-bl-3xl h-10 py-2 px-4 border-r border-solid border-Black">Send</button>

                        <button className="group bg-Dark-Blue text-White rounded-tr-3xl rounded-br-3xl h-10 p-2 focus:brightness-125">
                            <img src="/assets/arrow_drop_down_white.png" className="" onClick={(e) => {setShowSchedule(!showSchedule); e.target.classList.toggle("scale-y-[-1]")}}></img>
                        </button>

                        <div className={`${ showSchedule ? "" : "hidden" } absolute bottom-[100%] bg-White flex items-center gap-3 w-[10rem] p-2 shadow-[0_2px_4px_rgba(0,0,0,.2)] cursor-pointer`}>
                            <img src="/assets/schedule_send.png" className="" alt="" />
                            Schedule send
                        </div>
                    </div>

                    {/* Options list */}
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
            { error && <ComposeError error={error} setError={setError}/> }
            {/* Sending state */}
            { sending && <div className="fixed top-0 left-[50%] py-1 px-4 bg-Loading-Bg border-solid border border-Loading-Border font-bold">Sending...</div> }
        </form>
     );
}
 
export default Compose;