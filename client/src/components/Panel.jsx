const Panel = () => {
    return ( 
        <aside className="h-[calc(24rem+5rem)] mr-2">
            <div className="flex flex-col justify-evenly h-3/5 cursor-pointer border-b border-solid border-FA-Hover">
                <img src="/assets/calendar.png" className="" alt="Calender image" />
                <img src="/assets/keep.png" className="" alt="Keep image" />
                <img src="/assets/tasks.png" className="" alt="Tasks image" />
                <img src="/assets/contacts.png" className="" alt="Contacts image" />
            </div>

            <div className="h-[calc(50%+1rem)] flex flex-col justify-between items-center py-4">
                <i className="fa-sharp fa-solid fa-plus p-2 rounded-full hover:bg-FA-Hover"></i>
                <i className="fa-solid fa-angle-right py-2 px-3 rounded-full hover:bg-FA-Hover"></i>
            </div>
        </aside>
     );
}
 
export default Panel;