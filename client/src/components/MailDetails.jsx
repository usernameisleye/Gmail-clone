import MailHeader from "./utils/MailHeader";

const MailDetails = () => {
    return ( 
        <div className="bg-White w-[calc(67%+10rem)] mx-4 rounded-xl">
            <MailHeader/>

            <article className="">
                <header className="">
                    <div className="flex justify-between py-4 px-6 mb-4">
                        <h2 className="text-xl pl-10">PL Hall of Fame shortlist announced ⭐</h2>

                        <div className="flex items-center gap-4">
                            <img src="/assets/print.png" alt="" />
                            <img src="/assets/open_in_new.png" alt="" />
                        </div>
                    </div>

                    <div className="flex-items justify-between px-[2rem]">
                        <div className="flex items-start gap-[1rem]">
                            <img src="/assets/user.png" alt="" className="rounded-[100%]" />

                            <div className="text-sm">
                                <div className="">
                                    <span className="font-bold mr-2">Premier League</span>
                                    <span className="text-FA-Dark">(comms@premier.comms.premierleague.com)</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="">to me</span>
                                    <img src="/assets/arrow_drop_down.png" alt="" className="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-items">
                            <span className="text-xs">Mar 30, 2023, 11:32 AM (12 days ago)</span>
                            <img src="/assets/star_baseline.png" alt="" className="" />
                            <img src="/assets/reply.png" alt="" className="" />
                            <img src="/assets/more.png" alt="" className="" />
                        </div>
                    </div>
                </header>
            </article>
        </div>
     );
}
 
export default MailDetails;