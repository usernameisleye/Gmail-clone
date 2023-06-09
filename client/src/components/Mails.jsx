import Mail from "./Mail";
import MailsHeader from "./utils/MailsHeader";
import useFetch from "./useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const Mails = () => {
    const sections = [
        {id: 1, title: "Primary", src: "inbox_fill_2", active: "text-Tab-Blue border-b-2 border-solid"},
        {id: 2, title: "Promotions", src: "sell_baseline"},
        {id: 3, title: "Socials", src: "group_baseline"}
    ];

    // Fetching data, loading and error states from the "useFetch" hook
    const { data: mails, loading, error } = useFetch("http://localhost:5050/api/mails");

    // Checked state for all checkboxes
    const [checked, setChecked] = useState(false);

    const handleCheck = (e) =>{
        setChecked(e.target.checked)
    }

    return ( 
        <div className="bg-White w-[calc(67%+10rem)] h-max mx-4 rounded-xl overflow-x-hidden">
            {/* Heading on Mails section */}
            <MailsHeader checked={checked} handleCheck={handleCheck}/>

            {/* Sub heading of Mails section */}
            <section className="text-md h-max overflow-hidden overscroll-y-contain overflow-y-scroll">
                <div className="bg-White text-FA-Dark flex gap-2 text-sm border-b border-solid border-FA-Hover">
                    { sections.map(section => (
                        <div key={section.id} className={`sub-heading flex items-center gap-2 py-3 px-4 w-[calc(20%+2rem)] cursor-pointer ${section.active ? section.active : ""} hover:bg-FA-Hover`}>
                            <img src={`/assets/${section.src}.png`}></img>
                            <span className="">{section.title}</span>
                        </div>
                    )) }
                </div>

                {/* Section for all Mails */}
                <section className="grid grid-cols-1">

                    {/* Loading state */}
                    { loading && <div className="absolute top-0 left-[50%] py-1 px-4 bg-Loading-Bg border-solid border border-Loading-Border font-bold">Loading...</div> }

                    {/* Error state */}
                    { error && <div className="flex text-lg font-bold py-4 px-8">
                            { error } 
                        </div> }

                    {/* Passing "mails" value into Mail Component */}

                    { mails && mails.map((mail) => (
                        <Mail key={mail._id} mail={mail} checked={checked}/>
                    )) }

                </section>

                {/* Bottom Mail section */}
                <div className="text-sm text-FA-Dark p-4 flex justify-between">
                    <div className="">
                        <div className="relative bg-FA-Hover w-[calc(100%+5rem)] h-[.4rem] rounded-lg my-2">
                            <div className="absolute bg-FA-Dark h-[.4rem] w-1/12 rounded-lg"></div>
                        </div>

                        <div className="flex">
                            <p>0.01 GB of 15 GB used</p>
                            <img src="/assets/open_in_new.png" className="ml-2" alt=""></img>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Link to="/" className="hover:underline">Terms</Link>
                        <Link to="/" className="hover:underline">Privacy</Link>
                        <Link to="/" className="hover:underline">Program Policies</Link>
                    </div>

                    <div className="">
                        <p className="">Last account activity: -- hours ago</p>
                        <p className="">Details</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Mails;