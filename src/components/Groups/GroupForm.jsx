import React from "react";

export const GroupForm = ({ css, addGroup, group, setGroup}) => {
    return(
        <div>
            <h3>Add new group:</h3>
            <form className={css.form} onSubmit={addGroup}>
                <input 
                    className={css.form_input} 
                    type="text" 
                    value={group} 
                    onChange={(e) => setGroup(e.target.value)} 
                    placeholder="New group for your tasks."
                />
                <button className={css.form_btn}>Add group</button>
            </form>
        </div>
    )
}