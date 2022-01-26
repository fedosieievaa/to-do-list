import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css"

export const Navigation = () => {
    return(
        <div id="nav" className={s.nav_container}>
            <Link className={s.nav_item} to="/">GROUPS</Link>
            <Link className={s.nav_item} to="/tasks">TASKS</Link>
        </div>
    )
}