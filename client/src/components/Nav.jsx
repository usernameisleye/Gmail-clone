const Nav = () => {
    return ( 
        <nav className="">
            <div className="flex-group">
            <i className="fa-solid fa-bars"></i>
                <div className="flex-group">
                    <img src="" alt="" />
                    <span className="logo">SwiftMail</span>
                </div>
            </div>

            <div className="input-div">
                <input className="input-box" type="text" placeholder="Search mail" />
            </div>

            <div className="flex-group">
                <i className="fa-regular fa-circle-question"></i>
                <i className="fa-solid fa-gear"></i>
                <img src="/assets/user-img.png" alt="" />
            </div>
        </nav>
    );
}
 
export default Nav;