const ComposeError = ({ error, setError }) => {
    // Setting error to null to close tab
    const closeTab = () => {
        setError(null);
    }

    return ( 
        <section className="">
            {/* Background overlay */}
            <div className="overlay fixed inset-0 h-screen w-screen -z-100 bg-[#202124] opacity-50"></div>

            {/* Main Tab */}
            <div className="bg-White w-[32rem] fixed top-[35%] right-[35%] z-10 rounded-md">
                <div className="flex items-center justify-between py-6 px-6">
                    <span className="text-2xl leading-6">Error</span>
                    <img src="/assets/close_black.png" alt="" className="" onClick={closeTab}/>
                </div>

                <div className="text-sm px-6 leading-5 opacity-70">{ error }</div>

                <div className="flex flex-row-reverse justify-start p-6">
                    <button className="inline-flex items-center justify-center border-0 outline-0 text-sm cursor-pointer h-[36px] min-w-[80px] px-4 bg-Dark-Blue text-White rounded-full font-medium" onClick={closeTab}>OK</button>
                </div>
            </div>
        </section>
     );
}
 
export default ComposeError;