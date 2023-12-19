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
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function SideBar() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://127.0.0.1:8000/api/tutorialphotoshop/');
              setData(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

    return(
      <div className='sideBar'>
        <div className="sidebar-content" style={{ backgroundColor: '#554f7a' }}>
          <div className='sidebar-link'>
            {data.map((tutorialName, i) => {
              return (
                <Button 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `#photoshop${i}`;
                }} 
                activeClassName="activeClicked" 
                key={i}
                >
                  <CDBSidebarMenuItem>{tutorialName.name}</CDBSidebarMenuItem>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    );
   
};