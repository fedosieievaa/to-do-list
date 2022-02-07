import React from "react";

export const TaskItem = ({ index, css, task, taskGroup, tasks, setTasks }) => {
    const changeStatus = (str) => {
        tasks[index].status = str;
        setTasks([...tasks]);
    }

    const deleteTask = () => {
        tasks.splice(index, 1);
        setTasks([...tasks]);
    }

    return(
        <div id={index} className={css.task}>
            <li className={css.task_item}>{task.substr(0,1).toUpperCase() + task.substr(1)}</li>
            <div className={css.task_funcs}>
                <span className={css.task_group}>{taskGroup}</span>
                <div className={css.status}>{tasks[index].status}</div>
                <div className={css.status_btns}>
                    <button onClick={() => changeStatus('in progress')}>START</button>
                    <button onClick={() => changeStatus('done')}>COMPLETE</button>
                </div>
                <button className={css.delete} onClick={deleteTask}>X</button>
            </div>
        </div>
    )
}