import "./App.css";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import GoalSetup from "./components/GoalSetup";
import Roadmap from "./pages/Roadmap";
import careerPaths from "./Data/CareerPaths.js";
function App(){
    const[isOpen, setIsOpen]=useState(false);
    const[selectedCareer, setSelectedCareer]=useState("");
    const[currentLevel,setCurrentLevel]=useState("");
    const[currentPage,setCurrentPage]=useState("dashboard");
    const selectedCareerData=careerPaths.find(
                   (career)=>career.role===selectedCareer
    );
    return(
        <div className="app-layout">
            
            <button className="menu-button" 
                    onClick={()=> setIsOpen(!isOpen)}>
                ☰
            </button>
            <Sidebar isOpen={isOpen}/>
            <main className="main-content">
                {currentPage==="dashboard" && (
                    <>
                    <Dashboard/>
                    <GoalSetup 
                 selectedCareer={selectedCareer}
                 setSelectedCareer={setSelectedCareer}
                 currentLevel={currentLevel}
                 setCurrentLevel={setCurrentLevel}
                 setCurrentPage={setCurrentPage}
                 selectedCareerData={selectedCareerData}
            />
                    </>
                    )}
                {currentPage==="roadmap" && (
                    <Roadmap selectedCareer={selectedCareer} 
                    currentLevel={currentLevel}
                    selectedCareerData={selectedCareerData}
                    />)}
            </main>
        </div>
    );
}

export default App;