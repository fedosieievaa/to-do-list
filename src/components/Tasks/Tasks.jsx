import React, { useState } from "react";
import s from "./Tasks.module.css";
    // В селекті по дефолту вибрана група;
export const Tasks = () => {
    const [task, setTask] = useState("");
    const [taskGroup, setTaskGroup] = useState("");
    const groups = JSON.parse(localStorage.getItem("groups"));
    let tasks;
    //useeffect
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
        <div className={s.tasks_container}>
            <h3>Add new task:</h3>
            <form className={s.form}  action="#" onSubmit={addTask}>
                <input className={s.form_input} type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add new task."/>
                <select className={s.form_select} id="select" value={taskGroup} onChange={(e) => setTaskGroup(e.target.value)}>
                { groups ? groups.map((group) => (<option className={s.form_option}>{group}</option>)) : "" }
                </select>
                <button className={s.form_btn}>Add task</button>
            </form>
            <div>
            {tasks.map(({ task, taskGroup }, index) => {
                return(
                    <div id={index} className={s.task}>
                        <li className={s.task_item}>{task.substr(0,1).toUpperCase() + task.substr(1)}</li>
                        <div className={s.task_funcs}>
                            <span className={s.task_group}>{taskGroup}</span>
                            <div className={s.status}>{tasks[index].status}</div>
                            <div className={s.status_btns}>
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
                            <button className={s.delete} onClick={() => {
                                tasks.splice(index, 1);
                                updateTasks();
                                window.location.reload();
                            }}>X</button>
                        </div>
                    </div>)})}
            </div>
        </div>)
}