import React, { useState } from "react";

export const Groups = () => {
    const [group, setGroup] = useState("");
    let groups;

    localStorage.groups ? groups = JSON.parse(localStorage.getItem("groups")) : groups = [];

    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; 
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return day + "/" + month + "/" + year;
    }

    const updateGroups = () => {
        localStorage.setItem("groups", JSON.stringify(groups)); 
    }

    updateGroups();

    const addGroup = (e) => {
        e.preventDefault(); 
        groups.push(group);
        updateGroups();
        setGroup("");
    }
    
    return(
        <div className="groups-tasks_container">
            <h3>Add new group:</h3>
            <form className="form"  action="#" onSubmit={addGroup}>
                <input className="form_input" type="text" value={group} onChange={ (e) => setGroup(e.target.value) } placeholder="New group for your tasks."/>
                <button className="form_btn">Add group</button>
            </form>
            <div>
            { groups.map((group, index) => {
                return(
                    <div id={"0" + index} className="group">
                        <div className="group_time">{getDate()}</div>
                        <div className="group_item">{group}</div>
                        <button className="delete" onClick={() => {
                                groups.splice(("0" + index), 1);
                                updateGroups();
                                window.location.reload();
                            }}>X</button>
                    </div>)}) }
            </div>
        </div>
    )
}