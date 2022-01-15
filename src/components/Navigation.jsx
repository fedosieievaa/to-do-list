import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="nav_container">
            <Link className="nav_item" to="/">GROUPS</Link>
            <Link className="nav_item" to="/tasks">TASKS</Link>
        </div>
    );
}

export default Navigation;