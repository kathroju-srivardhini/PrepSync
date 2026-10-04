import { useState } from "react";
import Assessment from "./Assessment";
function Roadmap({selectedCareer,currentLevel,selectedCareerData}){
    const [completedTopics, setCompletedTopics] = useState([0]);
    const [testingTopic, setTestingTopic] = useState(null);
    const roadmapTopics= 
    currentLevel==="starting" ? selectedCareerData.learningPath.foundation : 
    currentLevel==="fundamentals" ? selectedCareerData.learningPath.core : selectedCareerData.learningPath.specialization;
    return(
        <div>
            {testingTopic===null
            ?
            <>
            <h2>Roadmap</h2>
            <p>Career: {selectedCareer}</p>
            <p>Level: {currentLevel}</p>
            <p>
            {currentLevel === "starting" && "Starting from scratch"}
            {currentLevel === "fundamentals" && "I know the fundamentals"}
            {currentLevel === "projects" && "I have built projects"}
        </p>
        <p>
    Current Stage:{" "}
    {currentLevel === "starting" && "Foundation"}
    {currentLevel === "fundamentals" && "Core"}
    {currentLevel === "projects" && "Specialization"}
</p>
        {currentLevel==="starting" && (
                    <>
                    <h4>Foundation</h4>
                    <ul>
                        {selectedCareerData.learningPath.foundation.map((item,index)=>{
                        const isCompleted=completedTopics.includes(index);
                        const isLocked=index>completedTopics.length;
                        const inProgress= !isCompleted && !isLocked;
                        return(
                        <li key={item}><b>{item}</b>
                        <br></br>
                        {isCompleted && <span>✓Completed</span>}
                        {isLocked && <span>🔒Locked</span>}
                        {inProgress && <span>→In Progress</span>}
                        <br></br>
                        <button
                        disabled={isLocked}
                        >Learn</button>
                        <button
                        disabled={isLocked}
                        onClick={()=>setTestingTopic(index)}
                        >{isCompleted ? "Retake" : "Take Test"}</button>
                        </li>);
}
)}
                    </ul>
                    </>
                )}
                {currentLevel==="fundamentals" && (
                    <>
                    <h4>Core</h4>
                    <ul>
                        {selectedCareerData.learningPath.core.map((item,index)=>{
                        const isCompleted=completedTopics.includes(index);
                        const isLocked=index>completedTopics.length;
                        const inProgress= !isCompleted && !isLocked;
                        return(
                        <li key={item}><b>{item}</b>
                        <br></br>
                        {isCompleted && <span>✓Completed</span>}
                        {isLocked && <span>🔒Locked</span>}
                        {inProgress && <span>→In Progress</span>}
                        <br></br>
                        <button
                        disabled={isLocked}
                        >Learn</button>
                        <button
                        disabled={isLocked}
                        onClick={()=>setTestingTopic(index)}
                        >{isCompleted ? "Retake" : "Take Test"}</button>
                        </li>);
})}
                    </ul>
                    </>
                )}
                {currentLevel==="projects" && (
                    <>
                    <h4>Specialization</h4>
                    <ul>
                        {selectedCareerData.learningPath.specialization.map((item,index)=>{
                        const isCompleted=completedTopics.includes(index);
                        const isLocked=index>completedTopics.length;
                        const inProgress= !isCompleted && !isLocked;
                        return(
                        <li key={item}><b>{item}</b>
                        <br></br>
                        {isCompleted && <span>✓Completed</span>}
                        {isLocked && <span>🔒Locked</span>}
                        {inProgress && <span>→In Progress</span>}
                        <br></br>
                        <button
                        disabled={isLocked}
                        >Learn</button>
                        <button
                        disabled={isLocked}
                        onClick={()=>setTestingTopic(index)}
                        >{isCompleted ? "Retake" : "Take Test"}</button>
                        </li>);
})}
                    </ul>
                    </>
                )}
                </>
                :
                    <Assessment topic={roadmapTopics[testingTopic]} />
            }
        </div>
    );
}
export default Roadmap;