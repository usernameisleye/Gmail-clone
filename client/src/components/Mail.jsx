import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HoverSection from "./utils/HoverSection";
import formatDistanceToNow  from 'date-fns/formatDistanceToNow';
import { useReadContext } from "../hooks/useReadContext";

const Mail = ({ mail, checked }) => {
    // Starred message states and function
    const [starred, setStarred] = useState(false)
    const handleStar = () =>{
        setStarred(!starred)   
    };


    const [isRead, setIsRead] = useState(false);

    const handleRead = (e) => {
    }

    return ( 
        <div className={`group relative ${ isRead ? "bg-Read-Bg" : "bg-White" } flex p-2 cursor-pointer border-b border-solid border-FA-Hover hover:shadow text-[14px]`} onClick={handleRead}>

            <div className="flex items-center gap-2 pr-4">
                {/* Mail heading and buttons */}
                <div className="flex pr-2">
                    <img src="/assets/drag_indicator.png" alt="" className="invisible group-hover:visible cursor-grab opacity-30" onClick={(e) => {e.target.classList.toggle("cursor-grabbing")}}/>
                    <input 
                     type="checkbox" 
                     className="cursor-pointer" 
                    />
                </div>

                { starred ?
                    <img src="/assets/star_fill.png" alt="" onClick={handleStar}/>
                    :
                    <img src="/assets/star_baseline.png" alt="" className="" onClick={handleStar}/>
                }
            </div>
            
            <Link to={`/mail/${ mail._id }`} className="basis-[20%]">
                <div className="flex items-center gap-2 w-fit">
                    <span className="font-medium">{ mail.from }</span>
                </div>
            </Link>

            {/* Mail heading and preview */}
            <Link to={`/mail/${ mail._id }`} className="w-3/5 basis-[65%]">
                <div className="flex flex-[1_1_auto] h-auto min-w-0">
                    <div className="inline-flex items-baseline shrink whitespace-nowrap leading-[20px]">
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                            <span className="font-medium min-w-max">{ mail.subject }</span>
                        </span>
                    </div>

                    <span className="basis-0 flex-[1] grow shrink overflow-hidden text-ellipsis whitespace-nowrap text-left">
                        <span className="float-left mx-2">-</span>
                        { mail.body }
                    </span>
                </div>
            </Link>

            {/* Extra content on hover */}
            <HoverSection mail={mail} isRead={isRead}/>

            {/* Date */}
            <div className="flex flex-[0_0_auto] items-center justify-end basis-[15%] leading-normal order-1">
                { mail.createdAt && 
                <span className="font-medium">{ formatDistanceToNow(new Date(mail.createdAt), { addSuffix: true }) }</span>        
                }
            </div>
        </div>
     );
}
 
export default Mail;