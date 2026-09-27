import {useState} from "react";
const availableGoals=["Java Developer","MERN Developer","Python Developer","Frontend Developer","Backend Developer","Data Analyst"];
function GoalSetup(){
    const[isOpen,setIsOpen]=useState(false);
    const[selectedPrimaryGoal, setSelectedPrimaryGoal]=useState("");
    const[selectedSecondaryGoals,setSelectedSecondaryGoals]=useState([]);
    const[step,setStep]=useState(1);
    return(
        <>
        <div className="goal-button">
        <button onClick={()=>setIsOpen(true)}>
            Set up your goals
        </button>
        </div>
        {isOpen && <div className="goal-overlay">
        <div className="goal-modal"><h3>Set up your goals</h3>
        {step===1 && (
            <>
            <h4>Choose your primary goal</h4>
            <span>Available Goals</span>
            <ul>
                {availableGoals.map((goal)=>(
                    <li key={goal}>
                        <input type="radio" name="primaryGoal"
                        onChange={(e)=>{
                                setSelectedPrimaryGoal(goal);
                                setSelectedSecondaryGoals(
                                    selectedSecondaryGoals.filter(
                                        (selectedGoal)=>selectedGoal!==goal
                                    )
                                );
                    }
                }
                checked={selectedPrimaryGoal===goal}
                    />
                    {goal}
                    </li>
                ))}
                <button onClick={()=>setStep(2)}>Next</button>
            </ul>
            </> 
        )}
        {step===2 && (
            <>
            <h4>Choose your secondary goals</h4>
            <span>Available Goals</span>
        <ul>
            {availableGoals
            .filter((goal)=>goal!==selectedPrimaryGoal)
            .map((goal)=>(
            <li><input type="checkbox"
            onChange={(e)=>{
            if(e.target.checked){
            setSelectedSecondaryGoals(
                  previousGoals=>[...previousGoals,goal]
            );
        }
        else{
            setSelectedSecondaryGoals(
                selectedSecondaryGoals.filter((selectedGoal)=>selectedGoal!==goal)
            );
        }
        }}
        checked={selectedSecondaryGoals.includes(goal)}
            /> {goal} </li>
        ))}
        </ul>
        <h4>Selected Secondary Goals</h4>
        <ul>
            {selectedSecondaryGoals.map((goal)=>(
                <li key={goal}> {goal}</li>
            ))}
        </ul>
         <button onClick={()=>setStep(1)}>Back</button>
            </>
        )}
        
        <button onClick={()=>setIsOpen(false)}>Close</button>
        </div>
        </div>
        }
        </>
    );
}
export default GoalSetup;