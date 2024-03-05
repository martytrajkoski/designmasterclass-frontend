import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'

export default function SideBar() {

  const handleClick = (i) =>{
    
  }

  return (
    <div className="sideBar">
      <div className="sidebar-content" style={{ backgroundColor: '#554f7a' }}>
        <div className="sidebar-link">
          <Button 
          onClick={handleClick(1)} 
          >Profile</Button>
          <Button 
          onClick={handleClick(2)}
          >Subscription</Button>
          <Button 
          onClick={handleClick(3)}
          >Saved Courses</Button>
        </div>
      </div>
    </div>
  );
   
};