import MailHeader from "./utils/MailHeader";

const MailDetails = () => {
    return ( 
        <div className="bg-White w-[calc(67%+10rem)] mx-4 rounded-xl">
            <MailHeader/>

            <div className="flex justify-between py-4 px-6">
                <h2 className="text-xl pl-10">PL Hall of Fame shortlist announced ⭐</h2>

                <div className="flex items-center gap-4">
                    <img src="/assets/print.png" alt="" />
                    <img src="/assets/open_in_new.png" alt="" />
                </div>
            </div>
            <div className=""></div>
        </div>
     );
}
 
export default MailDetails;