import React, { useState } from "react";

const Tasks = () => {
    const [taskKey, setTaskKey] = useState(Number(localStorage.getItem("taskKey")));
    const [task, setTask] = useState("");
    const [taskGroup, setTaskGroup] = useState("");
    const [status, setStatus] = useState("");
    const tasks = [];
    const groups = [];
    const statuses = ["new", "in progress", "done"];

    localStorage.setItem("new", statuses[0]);
    localStorage.setItem("in progress", statuses[1]);
    localStorage.setItem("done", statuses[2]);

    const addTask = (e) => {
        e.preventDefault();
        setTaskKey((prev) => prev + 1);
        localStorage.setItem(('0' + taskKey), (task + "|" + taskGroup));
        localStorage.setItem("taskKey", ('0' + (taskKey + 1)));
        setTask("");
    }

    for(let i = 0; i <= Number(localStorage.getItem("groupKey")); i++) {
        groups.push(localStorage.getItem(i));
    }

    for(let i = 0; i <= Number(localStorage.getItem("taskKey")); i++) {
        tasks.push(localStorage.getItem('0' + i));
    }

    return(
        <div className="groups-tasks_container">
            <h3>Add new task:</h3>
           <form className="form"  action="#" onSubmit={addTask}>
                <input className="form_input" type="text" value={task} placeholder="Add new task." onChange={ (e) => setTask(e.target.value) } />
                <select className="form_select" id="select" value={taskGroup} onChange={ (e) => setTaskGroup(e.target.value)} >
                    { groups.map((group) => {
                        if(group) {
                           return <option  className="form_option" >{group}</option> 
                        }
                      }) 
                    } 
                </select>
                <button className="form_btn">Add task</button>
            </form>
            <div>
                {tasks.map((task) => {
                    if(task) {
                        return(
                            <div className="task">
                                <li className="task_item">{ task.substring(0,1).toUpperCase() + task.substring(1).match(/.*\|/)}</li>
                                <span>{task.match(/\|.*/)}</span>
                                <select className="task_status" value={status} onChange={ (e) => setStatus(e.target.value)}>
                                    { statuses.map((item) => <option>{item}</option> ) }
                                </select>
                            </div>
                        )
                    }
                } )}
            </div>
        </div>
    )
}

export default Tasks;