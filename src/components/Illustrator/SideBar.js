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

    axios.get('http://127.0.0.1:8000/api/tutorialillustrator/')
    .then(res => {
        setName(res.data)
    }).catch(err => {
        console.log(err)
    })

    return(
        <div style={{ display: 'flex', overflow: 'scroll initial'}}>
        <CDBSidebar textColor="#fff" style={{height: '100%'}}>
          <CDBSidebarContent className="sidebar-content" style={{backgroundColor: "#554f7a"}}>
                <CDBSidebarMenu>
              {name.map((tutorialName, i) => {
                return (
                  <NavLink exact to='' activeClassName="activeClicked" key={i}>
                    <CDBSidebarMenuItem>{tutorialName.name}</CDBSidebarMenuItem>
                  </NavLink>
                )
              })}
                </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
        <Content/>
      </div>
    );
   
};