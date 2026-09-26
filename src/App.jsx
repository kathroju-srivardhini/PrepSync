import "./App.css";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import GoalSetup from "./components/GoalSetup";
function App(){
    const[isOpen, setIsOpen]=useState(false);
    return(
        <div className="app-layout">
            <GoalSetup />
            <button className="menu-button" 
                    onClick={()=> setIsOpen(!isOpen)}>
                ☰
            </button>
            <Sidebar isOpen={isOpen}/>
            <main className="main-content">
            <Dashboard />
            </main>
        </div>
    );
}

export default App;