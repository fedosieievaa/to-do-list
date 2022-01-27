import React from "react";

export const GroupItem = ({ index, css, getDate, group, groups, updateGroups}) => {
    return(
        <div id={"0" + index} className={css.group}>
            <div className={css.group_time}>{getDate()}</div>
            <div className={css.group_item}>{group}</div>
            <button className={css.delete} onClick={() => {
                    groups.splice(("0" + index), 1);
                    updateGroups();
                    window.location.reload();
                }}>X</button>
        </div>
    )
}