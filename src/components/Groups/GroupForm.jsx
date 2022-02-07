import React from "react";

export const GroupForm = (props) => {
    return(
        <div>
            <h3>Add new group:</h3>
            <form className={props.css.form} onSubmit={props.addGroup}>
                <input 
                    className={props.css.form_input} 
                    type="text" 
                    value={props.group} 
                    onChange={(e) => props.setGroup(e.target.value)} 
                    placeholder="New group for your tasks."
                />
                <button className={props.css.form_btn}>Add group</button>
            </form>
        </div>
    )
}