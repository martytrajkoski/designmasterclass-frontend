import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axiosClient from "../../api/axiosClient";

export default function CoursesSearch({ setSelectedCategory }) {
  const [activeCategory, setActiveCategory] = useState("Photoshop");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    handleCategoryChange("Photoshop");
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async() => {
        try {
            const response = await axiosClient.get('/api/userview/',{
                headers:{
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            });
            setUserData(response.data.user);
        } catch (error) {
            console.error('Error fetching user data');      
        }
    };
    
    fetchCurrentUser();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="coursesSearch">
      <div className="searchBar">
        <Form>
          <Form.Group>
            <input type="text" placeholder="Search course..." />
            <Button>
              <img src={require('../../media/Homepage/search white.png')} style={{ width: '30px' }} alt="Search"/>
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="searchButtons">
        <p>Paid Courses</p>
        <div className="buttons">
          <Button
            className={activeCategory === "Photoshop" ? "active" : "default"}
            onClick={() => handleCategoryChange("Photoshop")}>Photoshop</Button>
          <Button
            className={activeCategory === "Illustrator" ? "active" : "default"}
            onClick={() => handleCategoryChange("Illustrator")}>Illustrator</Button>
          {localStorage.getItem('token') ? (
            <Button style={{ float: 'right' }} href="/profile" active>Saved</Button>
          ) : (
            <p></p>
          )}
          
        </div>
      </div>
    </div>
  );
}
