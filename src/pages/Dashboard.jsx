import PreparationCard from "../components/PreparationCard.jsx";
import {useState} from "react";
const preparationAreas=[
    {
        name: "DSA",
        completed: 35,
        total:1254
    },
    {
        name: "Java",
        completed: 25,
        total:540
    }
];
const totalCompleted=preparationAreas.reduce(
    (sum,area)=>sum+area.completed,
    0
);
const totalTasks=preparationAreas.reduce(
    (sum,area)=>sum+area.total, 0
);
const progress=Math.round((totalCompleted/totalTasks)*100);
function Dashboard(){
    return(
        <div className="dashboard">
            <div className="dashboard-header">
                <div className="header-left">
                <h1><b>PrepSync</b></h1>
                <p>Your career preparation, organized</p>
            </div>
            <div className="header-right">
                <span className="status-badge">preparation in progress..</span>
            </div>
            </div>

            <div className="section">
                <h3>Welcome back!!👋</h3>
                <p>Let's make progress today.</p>
            </div>

            <div className="section">
                <h3>Current Goal</h3>
            
            <div className="goal-card">
                <strong>Become a Java Developer</strong>
                <p>Keep building your skills consistently.</p>
            </div>
            </div>

            <div className="section">
                <h3>Progress</h3>

                <div className="progress-card">
                    <div className="progress-value">{progress}%</div>

                    <div className="progress-bar">
                        <div className="progress-fill"
                        style={{width: `${progress}%`}}
                        ></div>
                    </div>
                    <p>Overall preparation progress</p>
                </div>
            </div>
            
            <div className="section">
                <h3>Preparation Areas</h3>
            

            <div className="preparation-grid">
                {preparationAreas.map((area)=>(
                    <PreparationCard
                    key={area.name}
                    course={area.name}
                    completed={area.completed}
                    total={area.total}
                    />
                ))}
            </div>
           </div>
        </div>
    );
}
export default Dashboard;