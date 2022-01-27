import React from "react";

export const TaskItem = ({ index, css, task, taskGroup, tasks, updateTasks }) => {
    return(
        <div id={index} className={css.task}>
            <li className={css.task_item}>{task.substr(0,1).toUpperCase() + task.substr(1)}</li>
            <div className={css.task_funcs}>
                <span className={css.task_group}>{taskGroup}</span>
                <div className={css.status}>{tasks[index].status}</div>
                <div className={css.status_btns}>
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
                <button className={css.delete} onClick={() => {
                    tasks.splice(index, 1);
                    updateTasks();
                    window.location.reload();
                }}>X</button>
            </div>
        </div>
    )
}