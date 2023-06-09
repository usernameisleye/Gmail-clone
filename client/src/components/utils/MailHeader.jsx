import { useNavigate } from "react-router-dom";
import MailExtras from "./MailExtras";

const MailHeader = ({ mail }) => {
    const navigate = useNavigate();

    // Delete Function
    const handleDelete = async (id) =>{
        const res = await fetch(`http://localhost:5050/api/mails/${mail._id}`, {
            method: "DELETE"
        });
        const resData = await res.json();

        if(res.ok){
            navigate("/");
            console.log("Deleted");
        }
    }

    return ( 
        <nav className="flex justify-between p-4">
            <div className="flex gap-4">
                <div className="">
                    <img src="/assets/arrow_back.png" alt="" onClick={() => navigate("/")} />
                </div>

                <div className="grid grid-cols-3">
                    <div className="flex-items px-4 border-r border-solid border-FA-Hover">
                        <img src="/assets/archive.png" alt=""/>
                        <img src="/assets/report.png" alt="" />
                        <img src="/assets/delete.png" alt="" onClick={() => handleDelete(mail._id)}/>
                    </div>
                    <div className="flex-items px-4 border-r border-solid border-FA-Hover">
                        <img src="/assets/mail.png" alt="" />
                        <img src="/assets/schedule.png" alt="" />
                        <img src="/assets/add_task.png" alt="" />
                    </div>
                    <div className="flex-items px-4">
                        <img src="/assets/move_to_inbox.png" alt="" />
                        <img src="/assets/label_light.png" alt="" />
                        <img src="/assets/more.png" alt="" />
                    </div>
                </div>
            </div>

            <MailExtras />
        </nav>
    );
}
 
export default MailHeader;