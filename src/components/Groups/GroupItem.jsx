import React from "react";

export const GroupItem = ({ index, css, getDate, group, groups, setGroups, filterTasks }) => {
    const deleteGroup = () => {
        groups.splice(("0" + index), 1);
        setGroups([...groups]);
        filterTasks();
    }
    return(
        <div id={"0" + index} className={css.group}>
            <div className={css.group_time}>{getDate()}</div>
            <div className={css.group_item}>{group}</div>
            <button className={css.delete} onClick={deleteGroup}>X</button>
        </div>
    )
}