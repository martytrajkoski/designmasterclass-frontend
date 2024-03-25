import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axiosClient from "../../api/axiosClient";

export default function QuizzesSearch({ setSelectedCategory, setSearchQuery }) {
  const [activeCategory, setActiveCategory] = useState("Photoshop");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    handleCategoryChange("Photoshop");
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
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

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  return (
    <div className="quizzesSearch">
      <div className="quizSearchBar">
        <Form>
          <Form.Group>
            <input type="text" placeholder="Search quiz..." onChange={handleSearch} />          </Form.Group>
        </Form>
      </div>
      <div className="quizSearchButtons">
        <p>Quizzes</p>
        <div className="buttons">
          <Button
            className={activeCategory === "Photoshop" ? "active" : "default"}
            onClick={() => handleCategoryChange("Photoshop")}
          >
            Photoshop
          </Button>
          <Button
            className={activeCategory === "Illustrator" ? "active" : "default"}
            onClick={() => handleCategoryChange("Illustrator")}
          >
            Illustrator
          </Button>
          {localStorage.getItem('token') ? (
            <Button href="/profile" style={{ float: 'right' }} active> Saved</Button>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
