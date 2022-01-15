import React, { useState } from "react";

const Groups = () => {
    const [groupKey, setGroupKey] = useState(Number(localStorage.getItem("groupKey")));
    const [group, setGroup] = useState("");
    const groups = [];

    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; 
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return year + "/" + month + "/" + day;
    }

    const addGroup = (e) => {
        e.preventDefault();   
        setGroupKey((prev) => prev + 1);
        localStorage.setItem(groupKey, group);
        localStorage.setItem("groupKey", (groupKey + 1));
        setGroup("");
    }

    for(let i = 0; i <= groupKey; i++) {
        groups.push(localStorage.getItem(i));
    }
    
    return(
        <div className="groups-tasks_container">
            <h3>Add new group:</h3>
            <form className="form"  action="#" onSubmit={addGroup}>
                <input className="form_input" type="text" value={group} placeholder="New group for your tasks." onChange={ (e) => setGroup(e.target.value) }/>
                <button className="form_btn">Add group</button>
            </form>
            <div >
                { groups.map((group) => {
                    if(group){
                        return(
                            <div className="group">
                                <div className="group_time">{ getDate() }</div>
                                <div className="group_item">{ group }</div>
                            </div>
                        )
                    }
                }) }
            </div>
        </div>
    )
}

export default Groups;