import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Button } from "react-bootstrap";
import { API_URL } from "../../config/apiUrl";

export default function QuizCard({ selectedCategory, searchQuery }) {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isQuizAddedArray, setIsQuizAddedArray] = useState([]);
  const [saveButton, setSaveButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`${API_URL}/api/quizzes/`);
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
        setSaveButton(true);
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
        
        const newIsQuizAddedArray = data.map(quiz => savedQuizIds.includes(quiz.id));
        setIsQuizAddedArray(newIsQuizAddedArray);
        
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
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const filteredItems = filteredData.filter(item =>
        (item.name && item.name.toLowerCase().includes(query))
      );
      setFilteredData(filteredItems);
    } else {
      setFilteredData(filteredData);
    }
  }, [data, selectedCategory, searchQuery]);

  const handleAddToUser = async (quizId, index) => {
    try {
      const response = await axiosClient.post("/api/add_quiz/", {
        user: userData.id,
        quiz: quizId,
      });
      console.log("Quiz added to user:", response.data);
      
      const updatedArray = [...isQuizAddedArray];
      updatedArray[index] = true;
      setIsQuizAddedArray(updatedArray);
      
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
      
      const updatedArray = [...isQuizAddedArray];
      updatedArray[index] = false;
      setIsQuizAddedArray(updatedArray);
      
      localStorage.setItem("savedQuizzes", JSON.stringify(updatedArray));
    } catch (error) {
      console.error("Error removing quiz from user:", error);
    }
  };

  return (
    <div className="quizzesPanel">
      {filteredData.map((quizData) => {
        const index = data.findIndex((quiz) => quiz.id === quizData.id);
        return (
          <div className="quizCard" key={quizData.id}>
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
                {saveButton ? (
                  <img 
                    src={isQuizAddedArray[index] ? require("../../media/Icons/Saved.png") : require("../../media/Icons/notSaved.png")} 
                    alt={isQuizAddedArray[index] ? "Saved" : "Not Saved"} 
                    onClick={() => {
                      if (isQuizAddedArray[index]) {
                        handleRemoveFromUser(quizData.id, index);
                      } else {
                        handleAddToUser(quizData.id, index);
                      }
                    }} 
                    style={{ cursor: "pointer" }} 
                  />
                ) : (
                  null
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
