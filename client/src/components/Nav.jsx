const Nav = () => {
    // const hoverClass = "flex items-center justify-center p-5 h-4 hover:bg-FA-Hover rounded-full";
    return ( 
        <nav className="flex py-2 px-8 h-16 text-FA-Dark text-xl">
            {/* Logo section */}
            <div className="flex items-center gap-4">
                <i className="fa-sharp fa-solid fa-bars text-Black"></i>
                <img className="w-28 object-cover" src="/assets/logo.png" alt="" />
            </div>

            {/* Input section */}
            <div className="w-7/12 ml-20 relative text-Base-Text">
                <i className="fa-solid fa-magnifying-glass absolute top-1/4 left-4 text-base"></i>
                <input className=" text-base w-full px-12 py-3 rounded-md outline-0 border-0 bg-Input-Bg  placeholder:text-Placeholder-Text focus:bg-White focus:placeholder:text-Base-Text focus:shadow-md transition" type="text" placeholder="Search mail" />
                <i className={`fa-solid fa-sliders absolute top-1/4 right-4`}></i>
            </div>

            {/* Help, setting and profile section */}
            <div className="flex items-center gap-2 ml-auto">
                <i className="fa-regular fa-circle-question flex items-center justify-center p-5 h-4 hover:bg-FA-Hover rounded-full"></i>
                <i className="fa-sharp fa-solid fa-gear flex items-center justify-center p-5 h-4 hover:bg-FA-Hover rounded-full"></i>
                <i className="fa-solid fa-grid-4"></i>
                <img className="w-8 mx-4" src="/assets/user-img.png" alt="" />
            </div>
        </nav>
    );
}
 
export default Nav;