import {useState} from "react";
import careerPaths from "../Data/CareerPaths.js";
function GoalSetup({selectedCareer,setSelectedCareer,currentLevel,setCurrentLevel,setCurrentPage,selectedCareerData}){
    const[isOpen,setIsOpen]=useState(false);
    const[step,setStep]=useState(1);
    const[selectedPath,setSelectedPath]=useState("");
    const[careerInfo,setCareerInfo]=useState(null);
    const[showLevelSelection,setShowLevelSelection]=useState(false);
    return(
        <>
        <div className="goal-button">
        <button onClick={()=>setIsOpen(true)}>
            Set up your goals
        </button>
        </div>
        {isOpen && <div className="goal-overlay">
        <div className="goal-modal">
        {step===1 && (
            <>
            <h2>What would you like to do?</h2>
            <ul>
                <li><input type="radio" name="path"
            checked={
            selectedPath==="career"
            }
            onChange={()=>(
                setSelectedPath("career")
            )}
            /> <b>🎯 Prepare for a career</b><br></br>
Choose a role and follow a job-focused roadmap. </li>

             <li><input type="radio" name="path"
            checked={
            selectedPath==="technology"
            }
            onChange={()=>(
                setSelectedPath("technology")
            )}
            /> <b>📚 Learn a technology</b><br></br>
Learn a programming language or technology. </li>
            </ul>
            <button 
            disabled={selectedPath===""}
            onClick={()=>{
                if(selectedPath==="career"){
                    setStep(2);
                }
                else if(selectedPath==="technology"){
                    setStep(6);
                }
            }
            }>Next</button>
            </>
        )}
        {step===2 &&(
            <>
            <h2>Explore & Select a Career Path</h2>
            <div className="career-grid">
            {careerPaths.map((career)=>(
                <div className="career-card" key={career.role}>
                    <h3>{career.role}</h3><br></br>
                    <p>{career.shortDescription}</p><br></br>
                    <button onClick={()=>setCareerInfo(career)} >More info</button>
                    <button onClick={()=>{
                        setSelectedCareer(career.role);
                        setShowLevelSelection(true);
                    }}>
                        Choose this</button>

                    <button onClick={()=>setStep(1)}>
                        Back
                    </button>
                </div>
            ))}
            </div>
            </>
        )}
        {careerInfo && (
            <div className="career-info-overlay">
                <div className="career-info-modal">
                    <h1>{careerInfo.role}</h1>
                <br></br>
                <b>Category: </b><p>{careerInfo.category}</p>
                <p>{careerInfo.shortDescription}</p>
                <div className="overview">
                    <ol>
                        <li><b>Career Overview</b>
                    <h3>What is it?</h3>
                    <p>{careerInfo.overview.whatIsIt}</p>
                    <h3>What do they do?</h3>
                    <ul>
                    {careerInfo.overview.whatDoTheyDo.map((work)=><li key={work}>{work}</li>)}
                    </ul>
                    <h3>Where it is used?</h3>
                    <ul>
                        {careerInfo.overview.whereUsed.map((use)=><li key={use}>{use}</li>)}
                    </ul>
                    </li>
                    <br></br>
                    <li>
                    <h2>Skills</h2>
                        {careerInfo.skills.map((skill)=>(
                            <div className="skills-section" key={skill.name}>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                            <b>Why it matters?</b>
                            <p>{skill.whyItMatters}</p>
                            <b>Beginner Level:</b>
                            <p>{skill.beginnerLevel}</p>
                            </div>
                            
                        ))}
                    </li>

                    <li>
                        <h3>Learning Path</h3>
                        <h4>Foundation</h4>
                        <ul>
                            {careerInfo.learningPath.foundation.map((learn)=><li key={learn}>{learn}</li>)}
                        </ul>
                        <h4>Core</h4>
                        <ul>
                            {careerInfo.learningPath.core.map((learn)=><li key={learn}>{learn}</li>)}
                        </ul>
                        <h4>Specialization</h4>
                        <ul>
                            {careerInfo.learningPath.specialization.map((learn)=><li key={learn}>{learn}</li>)}
                        </ul>
                        <h4>Advanced</h4>
                        <ul>
                            {careerInfo.learningPath.advanced.map((learn)=><li key={learn}>{learn}</li>)}
                        </ul>
                    </li>

                    <li>
                        <h3>Technologies</h3>
                        {careerInfo.technologyChoices.map((choice)=>(
                            <div className="tech-choice" key={choice.category}>
                                <h4>Category: </h4><p>{choice.category}</p>
                        <h4>Purpose: </h4><p>{choice.purpose}</p>
                        <h4>Options: </h4>
                        <ol>
                            {choice.options.map((option)=>(
                                <li key={option.name}>
                                    <h4>{option.name}</h4>
                                    <b>Used for: </b><p>{option.usedFor}</p>
                                    <b>Difficulty: </b><p>{option.difficulty}</p>
                                    <b>Recommendation: </b><p>{option.recommendation}</p>
                                </li>
                            ))}
                        </ol>
                        <h4>Beginner Choice:</h4><p>{choice.beginnerChoice}</p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>Projects</h3>
                        <h4>Beginner Projects</h4>
                        <ul>{careerInfo.projects.beginner.map((project)=><li key={project}>{project}</li>)}</ul>
                        <h4>Intermediate Projects</h4>
                        <ul>{careerInfo.projects.intermediate.map((project)=><li key={project}>{project}</li>)}</ul>
                        <h4>Advanced Projects</h4>
                        <ul>{careerInfo.projects.advanced.map((project)=><li key={project}>{project}</li>)}</ul>
                    </li>

                    <li>
                        <h3>Prerequisties</h3>
                        <ul>
                            {careerInfo.prerequisites.map((req)=><li key={req}>{req}</li>)}
                        </ul>
                    </li>

                    <li>
                        <h3>Specializations</h3>
                        <ul>
                            {careerInfo.specializations.map((sp)=><li key={sp}>{sp}</li>)}
                        </ul>
                    </li>

                    <li>
                        <h3>Job Titles</h3>
                        <ul>
                            {careerInfo.jobTitles.map((job)=><li key={job}>{job}</li>)}
                        </ul>
                    </li>

                    <li>
                        <h3>Avoid</h3>
                        <ul>
                            {careerInfo.avoidInitially.map((thing)=><li key={thing}>{thing}</li>)}
                        </ul>
                    </li>
                    </ol>
                    </div>
                <button onClick={()=>setCareerInfo(null)}>Close</button>
                </div>
            </div>
        )}

        {showLevelSelection && (
            <div className="level-overlay">
                <div className="level-modal">
                    <h2>Selected Career : {selectedCareer}</h2>
                    <h2>What's your current level?</h2>
                    <div className="level-options">
                        <label>
                        <input type="radio" name="level"
                        checked={
                            currentLevel==="starting"
                        }
                        onChange={()=>
                            setCurrentLevel("starting")
                        }
                        /> Starting from scratch
                        </label>
                        <label>
                        <input type="radio" name="level"
                        checked={
                            currentLevel==="fundamentals"
                        }
                        onChange={()=>
                            setCurrentLevel("fundamentals")
                        }
                        />I know the fundamentals
                        </label>
                        <label>
                        <input type="radio" name="level"
                        checked={
                            currentLevel==="projects"
                        }
                        onChange={()=>
                            setCurrentLevel("projects")
                        }
                        />I have built projects
                        </label>

                        <button
                        disabled={currentLevel===""}
                        onClick={()=>{
                            setShowLevelSelection(false);
                            setStep(3);
                        }}
                        >Continue</button>

                        <button onClick={()=>{
                            setShowLevelSelection(false);
                            setStep(2);
                        }}> Back </button>
                    </div>
                </div>
            </div>
        )}
        
        {step===3 &&(
            <div>
                <h4>Career: </h4>
                <span>{selectedCareer}</span>
                <h4>Current Level: </h4>
                <span>
                    {currentLevel === "starting" && "Starting from scratch"}
                    {currentLevel === "fundamentals" && "I know fundamentals"}
                    {currentLevel === "projects" && "I have built projects"}
                </span>
                
                <p>{selectedCareerData.shortDescription}</p>
                <h3>Roadmap Preview</h3>
                {currentLevel==="starting" && (
                    <>
                    <h4>Foundation</h4>
                    <ul>
                        {selectedCareerData.learningPath.foundation.map((item)=>
                        <li key={item}>{item}</li>
                        )}
                    </ul>
                    </>
                )}
                {currentLevel==="fundamentals" && (
                    <>
                    <h4>Core</h4>
                    <ul>
                        {selectedCareerData.learningPath.core.map((item)=>(
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </>
                )}
                {currentLevel==="projects" && (
                    <>
                    <h4>Specialization</h4>
                    <ul>
                        {selectedCareerData.learningPath.specialization.map((item)=>(
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </>
                )}
                <button onClick={()=>setStep(4)}>Confirm Selection</button>
                <button onClick={()=> setShowLevelSelection(true)}>
                    Back
                </button>
            </div>
        )}
        {step===4 && (
            <>
            <p>Selection Confirmed!</p>
            <p>Career: {selectedCareer}</p>
            <p>Current Level</p>
        <p>
            {currentLevel === "starting" && "Starting from scratch"}
            {currentLevel === "fundamentals" && "I know the fundamentals"}
            {currentLevel === "projects" && "I have built projects"}
        </p>
            <button onClick={()=>setCurrentPage("roadmap")}>Start Roadmap</button>
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