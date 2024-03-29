import React from 'react';
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
        <div className="sidebar-content" >
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
                  {tutorialName.name}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    );
   
};