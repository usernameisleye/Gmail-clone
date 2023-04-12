const Menu = () => {
    // Menu array containing title and FA classes
    const menu =[
        [1, "Inbox", "inbox_fill", "bg-Active-Blue text-Active-Text font-bold", 3],
        [2, "Starred", "star_baseline"],
        [3, "Snoozed", "schedule_baseline"],
        [4, "Sent", "send_baseline"],
        [5, "Drafts", "draft_baseline"],
        [6, "More", "expand_more_baseline"],
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
            <button  className="compose text-Base-Text bg-Light-Blue text-md font-medium py-4 px-5 m-2 w-fit rounded-2xl cursor-pointer hover:shadow-xl transition">
                <i className="fa-solid fa-pen mr-4"></i> Compose
            </button>

            {/* Rendering menu section from "menu" array */}
            <div className="flex flex-col gap-1">
                {menu.map(([id,title, className, active, num]) =>(
                    <div key={id} className={`flex items-center gap-4 text-sm py-1 pr-4 pl-8 cursor-pointer ${active ? active : "text-Light-Text-Black"} ${active ? "" : "hover:bg-FA-Hover"} rounded-tr-full rounded-br-full`} onClick={e => changeActive(e.target)}>
                        <img src={`/assets/${className}.png`}></img>
                        <span>{ title }</span>
                        <span className="ml-auto">{ num }</span>
                    </div>
                ))}
            </div>

            {/* Label & Backup section */}
            <div className="text-Light-Text-Black mt-4">
                <div className="flex justify-between px-8">
                    <span className="text-lg font-semibold">Labels</span>
                    <i className="fa-sharp fa-solid fa-plus"></i>
                </div>

                <div className="group flex items-center justify-between mt-4 py-1 pl-8 pr-4 cursor-pointer rounded-tr-full rounded-br-full hover:bg-FA-Hover">
                    <div className="flex items-center gap-2">
                        <img src="/assets/label.png" className="" alt="" />
                        <span>Backup</span>
                    </div>

                    <img src="/assets/more.png" className="invisible group-hover:visible" alt="" />
                </div>
            </div>
        </aside>
     );
}
 
export default Menu;