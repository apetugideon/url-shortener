import React from "react";

function MenuItem(props) {
    let iconClass = props.iconClass;
    return (
        <span className="top-menus text-right" style={{color: props.color || ""}}>
            <i className={iconClass}></i>
            &nbsp;{props.menuDesc}
        </span>
    );
}

export default MenuItem;