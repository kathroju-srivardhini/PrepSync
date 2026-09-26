import {useState} from "react";
function GoalSetup(){
    const[isOpen,setIsOpen]=useState(false);
    return(
        <>
        <button onClick={()=>setIsOpen(true)}>
            Set up your goals
        </button>
        {isOpen && <div className="goal-overlay">
        <div className="goal-model"><p>Set up your goals</p> 
        <button onClick={()=>setIsOpen(false)}>Close</button>
        </div>
        </div>
        }
        </>
    );
}
export default GoalSetup;