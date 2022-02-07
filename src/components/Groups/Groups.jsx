import React, { useState, useEffect } from "react";
import css from "./Groups.module.css";
import { GroupForm } from "./GroupForm";
import { GroupItem } from "./GroupItem";

export const Groups = () => {
    const [group, setGroup] = useState("");
    const [groups, setGroups] = useState([]);
    
    useEffect(() => {
        setGroups(JSON.parse(localStorage.getItem("groups")));
    }, [])
    
    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; 
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return day + "/" + month + "/" + year;
    }

    useEffect(() => {
        localStorage.setItem("groups", JSON.stringify(groups)); 
    }, [groups])

    const filterTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(JSON.parse(localStorage.getItem("tasks")).filter(({ taskGroup }) => groups.includes(taskGroup)))); 
    }

    const addGroup = (e) => {
        e.preventDefault(); 
        setGroups([...groups, group]);
        setGroup("");
    }
    
    return(
        <div className={css.groups_container}>
            <GroupForm css={css} addGroup={addGroup} group={group} setGroup={setGroup}/>
            <div>
            { groups.map((group, index) => <GroupItem 
                index={index} 
                css={css} 
                getDate={getDate} 
                group={group} 
                groups={groups} 
                setGroups={setGroups}
                filterTasks={filterTasks}/>)
            } 
            </div>
        </div>
    )
}