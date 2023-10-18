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
import Content from './Content';
import { useState } from 'react';
import axios from 'axios';

export default function SideBar() {

    const [name, setName] = useState([])

    axios.get('http://127.0.0.1:8000/api/tutorialphotoshop/')
    .then(res => {
        setName(res.data)
    }).catch(err => {
        console.log(err)
    })

    return(
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" >
          <CDBSidebarContent className="sidebar-content" style={{backgroundColor: "#554f7a"}}>
            {name.map((tutorialName, i ) => {
              return(
                <CDBSidebarMenu key={i}>
                  <NavLink exact to='' activeClassName="activeClicked">
                    <CDBSidebarMenuItem>{tutorialName.name}</CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              )
            })}
            {/* <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">User Info</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/tables" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="credit-card">Subscription</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Courses</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu> */}
          </CDBSidebarContent>
        </CDBSidebar>
        <Content/>
      </div>
    );
   
};