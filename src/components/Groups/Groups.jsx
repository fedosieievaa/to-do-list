import React, { useState } from "react";
import css from "./Groups.module.css";
import { GroupForm } from "./GroupForm";
import { GroupItem } from "./GroupItem";
import { render } from "@testing-library/react";

export const Groups = () => {
    const [group, setGroup] = useState("");
    const [isDeleted, setIs] = useState("");
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
        <div className={css.groups_container}>
            <GroupForm css={css} addGroup={addGroup} group={group} setGroup={setGroup}/>
            <div>
            { groups.map((group, index) => <GroupItem 
                index={index} 
                css={css} 
                getDate={getDate} 
                group={group} 
                groups={groups} 
                updateGroups={updateGroups}/>)
            } 
            </div>
        </div>
    )
}