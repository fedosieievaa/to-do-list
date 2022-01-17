import React, { useState } from "react";
    // В селекті по дефолту вибрана група;
export const Tasks = () => {
    const [task, setTask] = useState("");
    const [taskGroup, setTaskGroup] = useState("");
    const groups = JSON.parse(localStorage.getItem("groups"));
    let tasks;

    localStorage.tasks ? tasks = JSON.parse(localStorage.getItem("tasks")) : tasks = [];
    tasks = tasks.filter(({ taskGroup }) => groups.includes(taskGroup));
 
    const updateTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
    }

    updateTasks();

    const addTask = (e) => {
        e.preventDefault();
        if(task && taskGroup) {
            tasks.push({ task: task, taskGroup: taskGroup, status: "new" });
            updateTasks();
        } else {
            alert("Add task and select a group");
        }
        setTask("");
    }
    
    return(
        <div className="groups-tasks_container">
            <h3>Add new task:</h3>
            <form className="form"  action="#" onSubmit={addTask}>
                <input className="form_input" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add new task."/>
                <select className="form_select" id="select" value={taskGroup} onChange={(e) => setTaskGroup(e.target.value)}>
                { groups ? groups.map((group) => (<option className="form_option">{group}</option>)) : "" }
                </select>
                <button className="form_btn">Add task</button>
            </form>
            <div>
            {tasks.map(({ task, taskGroup }, index) => {
                return(
                    <div id={index} className="task">
                        <li className="task_item">{task.substr(0,1).toUpperCase() + task.substr(1)}</li>
                        <div className="task_funcs">
                            <span className="task_group">{taskGroup}</span>
                            <div className="status">{tasks[index].status}</div>
                            <div className="status_btns">
                                <button onClick={() => {
                                    tasks[index].status = "in progress";
                                    updateTasks();
                                    window.location.reload();
                                }}>START</button>
                                <button onClick={() => {
                                    tasks[index].status = "done";
                                    updateTasks();
                                    window.location.reload();
                                }}>COMPLETE</button>
                            </div>
                            <button className="delete" onClick={() => {
                                tasks.splice(index, 1);
                                updateTasks();
                                window.location.reload();
                            }}>X</button>
                        </div>
                    </div>)})}
            </div>
        </div>)
}