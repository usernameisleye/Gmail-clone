import { Link } from "react-router-dom";

const Mail = () => {
    return ( 
        <div className="group relative flex items-center gap-4 h-fit p-2 cursor-pointer border-b border-solid border-FA-Hover hover:shadow-md">
            <div className="flex items-center gap-2 w-fit">
                {/* Mail heading and buttons */}
                <div className="flex">
                    <i className="fa-solid fa-grip-vertical cursor-grab mr-1 text-FA-Dark invisible group-hover:visible"></i>
                    <input type="checkbox" className="cursor-pointer" />
                </div>

                <img src="/assets/star_baseline.png" alt="" className="" />
                
                <Link to="/mail/:id">
                    <span className="font-medium">Premier League</span>
                </Link>
            </div>

            {/* Mail heading and preview */}
            <Link to="/mail/:id" className="w-3/5">
                <div className="flex flex-col md:flex-row">
                    <span className="font-medium w-full">PL Hall of Fame shortlist announced PL</span>
                    <span className="w-full h-fit overflow-hidden text-ellipsis whitespace-nowrap">Sir Alex Ferguson and Arsène Wenger are the first two Hall of Fame inductees of 2023, with a public vote now open to decide another three PL icons to join them from a shortlist of 15 former players.</span>
                </div>
            </Link>

            {/* Extra content on hover */}
            <div className="bg-White text-FA-Dark absolute right-0 top-2/5 flex justify-evenly w-1/5 invisible group-hover:visible">
                <img src="/assets/archive.png" alt="" className="" />
                <img src="/assets/delete.png" alt="" className="" />
                <img src="/assets/mail.png" alt="" />
                <img src="/assets/schedule.png" className="" alt="" />
            </div>
            {/* Date */}
            <span className="font-bold ml-auto content-start">Mar 22</span>        
        </div>
     );
}
 
export default Mail;