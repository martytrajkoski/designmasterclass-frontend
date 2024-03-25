import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axiosClient from '../../api/axiosClient';
import { API_URL } from "../../config/apiUrl"

export default function ProfileQuizzes() {
  const [loadingQuizzes, setLoadingQuizzes] = useState(true);
  const [quizzes, setQuizzes] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isQuizAddedArray, setIsQuizAddedArray] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axiosClient.get(`${API_URL}/api/quizzes/`);
        console.log("Fetched quizzes:", response.data); // Log fetched quizzes
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      } finally {
        setLoadingQuizzes(false);
      }
    };

    fetchQuizzes();
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axiosClient.get('/api/userview/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        });
        console.log("Fetched user data:", response.data); // Log fetched user data
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data');
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
        console.log("Fetched user quizzes:", response.data); // Log fetched user quizzes
        const userQuizzes = response.data.quizzes;
        const savedQuizIds = userQuizzes.map(quiz => quiz.id);
        
        const newIsQuizAddedArray = quizzes.map(quiz => savedQuizIds.includes(quiz.id));
        console.log("New isQuizAddedArray:", newIsQuizAddedArray); // Log new isQuizAddedArray
        setIsQuizAddedArray(newIsQuizAddedArray);
        
        localStorage.setItem("savedQuizzes", JSON.stringify(newIsQuizAddedArray));
      } catch (error) {
        console.error("Error fetching user quizzes:", error);
      }
    };
  
    fetchUserQuizzes();
  }, [quizzes]);

  useEffect(() => {
    const savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes"));
    if (savedQuizzes) {
      setIsQuizAddedArray(savedQuizzes);
    }
  }, []);

  const handleAddToUser = async (quizId, index) => {
    try {
      const response = await axiosClient.post("/api/add_quiz/", {
        user: userData.id,
        quiz: quizId,
      });
      
      setIsQuizAddedArray(prevState => {
        const updatedArray = [...prevState];
        updatedArray[index] = true;
        localStorage.setItem("savedQuizzes", JSON.stringify(updatedArray));
        return updatedArray;
      });
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
            
      setIsQuizAddedArray(prevState => {
        const updatedArray = [...prevState];
        updatedArray[index] = false;
        localStorage.setItem("savedQuizzes", JSON.stringify(updatedArray));
        return updatedArray;
      });
    } catch (error) {
      console.error("Error removing quiz from user:", error);
    }
  };    

  return (
    <div>
      <p className='type' id='quizzes'>Quizzes</p>
      <div className="quizzesPanel">
        {quizzes.map((quizData, i) => {
          if (userData && userData.quizzes.includes(quizData.id)) {
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
                <div className="quizInfo" style={{ display: 'flex' }}>
                  <div className="quizArtist">
                    <span>{quizData.artist}</span>
                  </div>
                  <div className="quizButtons">
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
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
