import React, { useState } from "react";
import css from "./Tasks.module.css";
import { TaskForm } from "./TaskForm";
import { TaskItem } from "./TaskItem";

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
        <div className={css.tasks_container}>
            <TaskForm 
                css={css} 
                addTask={addTask} 
                task={task} 
                setTask={setTask} 
                groups={groups} 
                taskGroup={taskGroup} 
                setTaskGroup={setTaskGroup}
            />
            <div>
            {tasks.map(({ task, taskGroup }, index) => <TaskItem 
                index={index} 
                css={css} 
                task={task} 
                taskGroup={taskGroup} 
                tasks={tasks} 
                updateTasks={updateTasks}/>)
            }
            </div>
        </div>)
}