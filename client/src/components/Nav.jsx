const Nav = () => {
    return ( 
        <nav className="flex justify-between p-4 text-Unread-Text-White">
            <div className="flex items-center gap-4">
                <i className="fa-solid fa-bars"></i>
                <div className="">
                    <i class="fa-solid fa-paper-plane mr-2 text-Base-Text"></i>
                    <span className="text-xl">SwiftMail</span>
                </div>
            </div>

            <div className="w-1/3">
                <input className="w-full px-6 py-2 rounded-md outline-0 border-0 bg-Read-Bg text-Base-Text placeholder:text-Mail-White focus:bg-Mail-White focus:placeholder:text-Base-Text" type="text" placeholder="Search mail" />
            </div>

            <div className="flex items-center gap-4">
                <i className="fa-regular fa-circle-question"></i>
                <i className="fa-solid fa-gear"></i>
                <img src="/assets/user-img.png" alt="" />
            </div>
        </nav>
    );
}
 
export default Nav;