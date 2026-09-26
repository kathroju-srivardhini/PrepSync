function Sidebar({isOpen}){
    return(
        <aside className={isOpen?"sidebar open":"sidebar"}>
            <h2>PrepSync</h2>
            <nav>
                <a href="#">Dashboard</a>
                <a href="#">Set Goals</a>
                <a href="#">Goals</a>
                <a href="#">Preparation</a>
                <a href="#">Activities</a>
                <a href="#">Progress</a>
            </nav>
        </aside>
    );
}
export default Sidebar;