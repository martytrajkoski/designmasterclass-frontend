import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../style/QuizzesStyle.scss"
import axiosClient from "../../api/axiosClient";

export default function QuizCard({ selectedCategory}){
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [isQuizAddedArray, setIsQuizAddedArray] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosClient.get(
            "http://127.0.0.1:8000/api/quizzes/"
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
      const fetchCurrentUser = async () => {
        try {
          const response = await axiosClient.get("/api/userview/", {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          });
          setUserData(response.data.user);
        } catch (error) {
          console.error("Error fetching user data");
        }
      };
  
      fetchCurrentUser();
    }, []);

    useEffect(() => {
      const fetchUserQuizzes = async () => {
        try {
          const response = await axiosClient.get("/api/list_quiz/", {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          });
          const userQuizzes = response.data.quizzes;
          const savedQuizIds = userQuizzes.map(quiz => quiz.id);
          
          // Initialize isCourseAddedArray with false values for each card
          const newIsQuizAddedArray = data.map(quiz => savedQuizIds.includes(quiz.id));
          setIsQuizAddedArray(newIsQuizAddedArray);
          
          // Update local storage
          localStorage.setItem("savedQuizzes", JSON.stringify(newIsQuizAddedArray));
        } catch (error) {
          console.error("Error fetching user quizzes:", error);
        }
      };
  
      fetchUserQuizzes();
    }, [data]);

    useEffect(() => {
      const savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes"));
      if (savedQuizzes) {
        setIsQuizAddedArray(savedQuizzes);
      }
    }, []);
  
    useEffect(() => {
      const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;
      setFilteredData(filteredData);
    }, [data, selectedCategory]);
  
    const handleAddToUser = async (quizId, index) => {
      try {
        const response = await axiosClient.post("/api/add_quiz/", {
          user: userData.id,
          quiz: quizId,
        });
        console.log("Quiz added to user:", response.data);
        
        // Update the state for the specific card
        const updatedArray = [...isQuizAddedArray];
        updatedArray[index] = true;
        setIsQuizAddedArray(updatedArray);
        
        // Update local storage
        localStorage.setItem("savedQuizzes", JSON.stringify(updatedArray));
      } catch (error) {
        console.error("Error adding quiz to user:", error);
      }
    };
  
    const handleRemoveFromUser = async (quizId, index) => {
      try {
        const response = await axiosClient.post("/api/remove_quiz/", {
          user: userData.id,
          quiz: quizId,
        });
        console.log("Quiz removed from user:", response.data);
        
        // Update the state for the specific card
        const updatedArray = [...isQuizAddedArray];
        updatedArray[index] = false;
        setIsQuizAddedArray(updatedArray);
        
        // Update local storage
        localStorage.setItem("savedQuizzes", JSON.stringify(updatedArray));
      } catch (error) {
        console.error("Error removing quiz from user:", error);
      }
    };

    return (
        <div className="quizzesPanel">
            {filteredData.map((quizData, i) => {
                return (
                    <div className="quizCard" key={i}>
                        <div className="thumbnail">
                            <img src={quizData.thumbnail} alt="slika" />
                        </div>
                        <div className="courseDescription">
                            <span style={{ float: 'right', marginRight: '1%', fontFamily: 'inherit' }}>{quizData.length}</span>
                            <br />
                            <p style={{ width: '100%', fontWeight: 'bold' }}>{quizData.name}</p>
                        </div>
                        <div className="quizcardButtons" style={{ display: 'flex' }}>
                            <div style={{ width: '60%' }}>
                                <span>{quizData.artist}</span>
                            </div>
                            <div style={{ width: '40%' }}>
                                <Button href={quizData.url}>Watch</Button>
                                <img 
                                  src={isQuizAddedArray[i] ? require("../../media/Icons/Saved.png") : require("../../media/Icons/notSaved.png")} 
                                  alt={isQuizAddedArray[i] ? "Saved" : "Not Saved"} 
                                  onClick={() => {
                                    if (isQuizAddedArray[i]) {
                                      handleRemoveFromUser(quizData.id, i);
                                    } else {
                                      handleAddToUser(quizData.id, i);
                                    }
                                  }} 
                                  style={{ cursor: "pointer" }} 
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}