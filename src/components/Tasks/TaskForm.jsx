import React from "react";

export const TaskForm = ({ css, addTask, task, setTask, groups, taskGroup, setTaskGroup }) => {
    return(
        <div>
        <h3>Add new task:</h3>
        <form className={css.form}  action="#" onSubmit={addTask}>
            <input className={css.form_input} type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add new task."/>
            <select className={css.form_select} id="select" value={taskGroup} onChange={(e) => setTaskGroup(e.target.value)}>
            { groups ? groups.map((group) => (<option className={css.form_option}>{group}</option>)) : "" }
            </select>
            <button className={css.form_btn}>Add task</button>
        </form>
    </div>
    )
}