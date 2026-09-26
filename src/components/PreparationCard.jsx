function PreparationCard({course, completed, total}){
    const percentage=Math.round((completed/total)*100);
    return(
        <div className="preparation-card">
        <h4>{course}</h4>
        <p>{completed}/{total} completed</p>
        <div className="card-progress-bar">
            <div className="card-progress-fill"
            style={{width: `${percentage}%`}}
            ></div>
        </div>

        <div className="card-footer">
            <span>{percentage}% completed</span>
            <span>, {completed} done</span>
        </div>
        </div>
    );
}
export default PreparationCard;