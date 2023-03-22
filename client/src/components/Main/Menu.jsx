const Menu = () => {
    return ( 
        <div className="flex flex-col gap-4 text-Mail-White w-1/5 text-sm">
            <div className="text-Base-Text bg-Mail-White p-4 w-fit rounded-md cursor-pointer">
                <i class="fa-solid fa-pen mr-4"></i>
                <span>Compose</span>
            </div>

            <div className="flex flex-col gap-2">
                <div className="bg-Read-Bg flex items-center gap-4 py-1 px-2 rounded-full cursor-pointer">
                    <i class="fa-solid fa-inbox"></i>
                    <span>Inbox</span>
                </div>
                <div className="flex items-center gap-4 py-2 px-4 rounded-full cursor-pointer">
                    <i class="fa-regular fa-star"></i>
                    <span>Starred</span>
                </div>
                <div className="flex items-center gap-4 py-2 px-4 rounded-full cursor-pointer">
                    <i class="fa-regular fa-clock"></i>
                    <span>Snoozed</span>
                </div>
                <div className="flex items-center gap-4 py-2 px-4 rounded-full cursor-pointer">
                <i class="fa-regular fa-paper-plane"></i>
                    <span>Sent</span>
                </div>
                <div className="flex items-center gap-4 py-2 px-4 rounded-full cursor-pointer">
                    <i class="fa-regular fa-file"></i>
                    <span>Drafts</span>
                </div>
            </div>

            <div className="">
                <div className="">
                    <span>Label</span>
                    <span>+</span>
                </div>

                <div className="">
                    <i class="fa-solid fa-tag"></i>
                    <span>Backup</span>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;