import MailHeader from "./utils/MailHeader";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import formatDistanceToNow  from 'date-fns/formatDistanceToNow'

const MailDetails = () => {
    const { id } = useParams();
    const { data: mail, loading, error } = useFetch(`http://localhost:5050/api/mails/${ id }`);

    return ( 
        <div className="bg-White w-[calc(67%+10rem)] mx-4 rounded-xl">
            <MailHeader/>

            {/* Loading state */}
            { loading && <div className="absolute top-0 left-[50%] py-1 px-4 bg-Loading-Bg border-solid border border-Loading-Border font-bold">Loading..</div> }

            {/* Error state */}
            { error && <div className="flex text-lg font-bold py-4 px-8">
                    { error } 
                </div> }

            { mail && (
                <article className="">
                    <header className="">
                        <div className="flex justify-between py-4 px-6 mb-4">
                            <h2 className="text-xl pl-10">{ mail.subject }</h2>

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
                                        <span className="font-bold mr-2">{ mail.sender }</span>
                                        <span className="text-FA-Dark">({ mail.from })</span>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="">to me</span>
                                        <img src="/assets/arrow_drop_down.png" alt="" className="" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-items">
                                <span className="text-xs">({ formatDistanceToNow(new Date(mail.createdAt), { addSuffix: true }) })</span>
                                
                                <img src="/assets/star_baseline.png" alt="" className="" />
                                <img src="/assets/reply.png" alt="" className="" />
                                <img src="/assets/more.png" alt="" className="" />
                            </div>
                        </div>
                    </header>

                    <footer className="flex gap-4 py-[4rem] px-[5rem]">
                        {
                            [
                                ["Reply", "reply"],
                                ["Foward", "forward"]
                            ].map(([title, path]) => (
                                <button className="flex items-center gap-2 h-9 min-w-[104px] px-4 text-FA-Dark text-md border-FA-Dark border border-solid rounded-full hover:bg-FA-Hover">
                                    <img src={`/assets/${ path }.png`} alt="" />
                                    { title }
                                </button>
                            ))}
                    </footer>
                </article>
            ) }
        </div>
     );
}
 
export default MailDetails;