import React, { useState, useEffect } from "react";
import css from "./Tasks.module.css";
import { TaskForm } from "./TaskForm";
import { TaskItem } from "./TaskItem";

export const Tasks = () => {
    const [task, setTask] = useState("");
    const [taskGroup, setTaskGroup] = useState("");
    const groups = JSON.parse(localStorage.getItem("groups"));
    const [tasks, setTasks] = useState([]); 

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")));
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
    }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        if(task && taskGroup) {
            setTasks([...tasks, { task: task, taskGroup: taskGroup, status: "new" }])
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
                key={index}
                index={index} 
                css={css} 
                task={task} 
                taskGroup={taskGroup} 
                tasks={tasks} 
                setTasks={setTasks}/>)
            }
            </div>
        </div>)
}