import React from "react";

export const TaskForm = (props) => {
    return(
        <div>
        <h3>Add new task:</h3>
        <form className={props.css.form}  action="#" onSubmit={props.addTask}>
            <input className={props.css.form_input} type="text" value={props.task} onChange={(e) => props.setTask(e.target.value)} placeholder="Add new task."/>
            <select className={props.css.form_select} id="select" value={props.taskGroup} onChange={(e) => props.setTaskGroup(e.target.value)}>
            { props.groups ? props.groups.map((group) => (<option className={props.css.form_option}>{group}</option>)) : "" }
            </select>
            <button className={props.css.form_btn}>Add task</button>
        </form>
    </div>
    )
}