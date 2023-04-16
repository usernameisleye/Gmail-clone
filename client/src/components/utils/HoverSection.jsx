import useFetch from "../useFetch";

const HoverSection = ({ mail }) => {
    const { data: mails, setData: setMails } = useFetch(`http://localhost:5050/api/mails`);

    // Delete Function
    const handleDelete = async (id) =>{
        const res = await fetch(`http://localhost:5050/api/mails/${mail._id}`, {
            method: "DELETE"
        });
        const resData = await res.json()

        if(res.ok){
            // setMails(mails.filter(mail => mail._id !== id ))
            location.reload();
            console.log("Deleted");
        }
    }

    // Archive Function
    const handleArchive = (e) => {
        const target = e.target.parentElement.parentElement
        target.style.display = "none";
    }

    return ( 
        <div className="text-FA-Dark absolute top-0 bottom-0 right-0 flex justify-evenly items-center w-1/5 invisible group-hover:visible">
            <img src="/assets/archive.png" alt="" className="" onClick={handleArchive}/>
            <img src="/assets/delete.png" alt="" className="" onClick={() => handleDelete(mail._id)}/>
            <img src="/assets/mail.png" alt="" />
            <img src="/assets/schedule.png" className="" alt="" />

        </div>
     );
}
 
export default HoverSection;