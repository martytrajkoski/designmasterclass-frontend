import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function QuizzesSearch({ setSelectedCategory }){

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

    return(
        <div className="quizzesSearch">
            <div className="quizSearchBar">
                <Form>
                    <Form.Group>
                        <input type="text" placeholder="Search quiz..." />
                        <Button><img src={require('../../media/Homepage/search white.png')} style={{ width: '30px' }} /></Button>
                    </Form.Group>
                </Form>
            </div>
            <div className="quizSearchButtons">
                <p>Quizzes</p>
                <div className="buttons">
                    <Button
                        className={activeCategory === "Photoshop" ? "active" : "default"} // Apply active or default class based on activeCategory
                        onClick={() => handleCategoryChange("Photoshop")}
                    >
                        Photoshop
                    </Button>
                    <Button
                        className={activeCategory === "Illustrator" ? "active" : "default"} // Apply active or default class based on activeCategory
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