import { Icon } from "@mui/material";
import React from "react";
import "./SidebarRow.css";

function SidebarRow({selected, Icon, title}) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
     <Icon className='sidebarRow__icon'></Icon>

      <h2 className='sidebarRow__title'>{title}</h2>
    </div>
  );
}

export default SidebarRow;
