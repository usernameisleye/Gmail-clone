const Menu = () => {
    // Menu array containing title and FA classes
    const menu =[
        [1, "Inbox", "fa-solid fa-inbox", "bg-Active-Blue text-Active-Text font-bold", 3],
        [2, "Starred", "fa-regular fa-star"],
        [3, "Snoozed", "fa-regular fa-clock"],
        [4, "Sent", "fa-regular fa-paper-plane"],
        [5, "Drafts", "fa-regular fa-file"],
        [6, "More", "fa-solid fa-chevron-down"],
    ];


    const changeActive = (e) => {
        // e.addEventListener("click", () =>{
        //     menu.forEach(i =>{
        //         console.log(e.classList);
        //     })
        // })
        console.log(e.classList);
    }
    return ( 
        <aside className="flex flex-col gap-2 text-Mail-White w-1/6 text-md">
            {/* Compose button */}
            <div className="text-Base-Text bg-Light-Blue text-md font-bold py-4 px-6 w-fit ml-2 rounded-lg cursor-pointer hover:shadow-lg transition">
                <i className="fa-solid fa-pen mr-4"></i>
                <span>Compose</span>
            </div>

            {/* Rendering menu section from "menu" array */}
            <div className="flex flex-col gap-1">
                {menu.map(([id,title, className, active, num]) =>(
                    <div key={id} className={`flex items-center gap-4 py-1 px-4 cursor-pointer ${active ? active : "text-Light-Text-Black"} ${active ? "" : "hover:bg-FA-Hover"} rounded-tr-full rounded-br-full`} onClick={e => changeActive(e.target)}>
                        <i className={`${className}`}></i>
                        <span>{title}</span>
                        <span className="ml-auto">{num}</span>
                    </div>
                ))}
            </div>

            {/* Label & Backup section */}
            <div className="text-Light-Text-Black mt-4">
                <div className="flex justify-between px-4">
                    <span className="text-xl font-bold">Label</span>
                    <i className="fa-sharp fa-solid fa-plus"></i>
                </div>

                <div className="flex items-center gap-6 mt-4 py-1 px-4 cursor-pointer rounded-tr-full rounded-br-full hover:bg-FA-Hover">
                    <i className="fa-solid fa-tag"></i>
                    <span>Backup</span>
                </div>
            </div>
        </aside>
     );
}
 
export default Menu;