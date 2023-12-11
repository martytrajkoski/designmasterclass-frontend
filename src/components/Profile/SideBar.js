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

export default function SideBar() {
    return(
        <div style={{ display: 'flex', height: '100vh', position: 'fixed', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} style={{backgroundColor: "#3C327B"}}>
            <p>Profile</p>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content" style={{backgroundColor: "#554f7a"}}>
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">User Info</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/tables" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="credit-card">Subscription</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Courses</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
        <p>dawedw</p>
      </div>
    );
   
};