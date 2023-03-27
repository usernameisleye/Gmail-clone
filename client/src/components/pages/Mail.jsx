const Mail = () => {
    return ( 
        <div className="group relative flex items-center gap-4 h-10 p-4 cursor-pointer border-b border-solid border-FA-Hover hover:shadow-md">
            <div className="flex items-center gap-2">
                {/* Mail heading and buttons */}
                <div className="flex w-1/3">
                    <i className="fa-solid fa-grip-vertical cursor-grab mr-1 text-FA-Dark invisible group-hover:visible"></i>
                    <input type="checkbox" className="cursor-pointer" />
                </div>

                <i className="fa-sharp fa-regular fa-star text-FA-Dark"></i>
                <span className="font-bold">CoinGecko</span>
            </div>

            {/* Mail heading and preview */}
            <div className="flex flex-col md:flex-row w-3/4 text-md">
                <span className="font-semibold">🦎 Gecko Ramblings: Be water, fellow Geckos!💧</span>
                <span className="w-2/4 h-fit overflow-hidden text-ellipsis whitespace-nowrap">🦎 Gecko Ramblings Exclusively for Premium+ subscribers, we bring you the latest alpha and the juiciest farms, right to your inbox!</span>
            </div>

            {/* Extra content on hover */}
            <div className="bg-White text-FA-Dark absolute right-0 top-2/5 flex justify-evenly h-8 w-1/5 invisible group-hover:visible">
                <i className="fa-regular fa-folder"></i>
                <i className="fa-regular fa-trash-can"></i>
                <i className="fa-regular fa-envelope-open"></i>
                <i className="fa-regular fa-clock"></i>
            </div>
            {/* Date */}
            <span className="font-bold ml-auto">Mar 22</span>        
        </div>
     );
}
 
export default Mail;