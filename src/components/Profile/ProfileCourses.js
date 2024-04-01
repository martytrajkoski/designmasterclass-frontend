import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axiosClient from '../../api/axiosClient';
import { API_URL } from "../../config/apiUrl"

export default function ProfileCourses() {
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [courses, setCourses] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isCourseAddedArray, setIsCourseAddedArray] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosClient.get(`${API_URL}/api/courses/`);
        console.log("Fetched courses:", response.data); 
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axiosClient.get('/api/userview/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        });
        console.log("Fetched user data:", response.data); 
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data');
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const response = await axiosClient.get("/api/list_course/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
        console.log("Fetched user courses:", response.data); 
        const userCourses = response.data.courses;
        const savedCourseIds = userCourses.map(course => course.id);
        
        const newIsCourseAddedArray = courses.map(course => savedCourseIds.includes(course.id));
        console.log("New isCourseAddedArray:", newIsCourseAddedArray); 
        setIsCourseAddedArray(newIsCourseAddedArray);
        
        localStorage.setItem("savedCourses", JSON.stringify(newIsCourseAddedArray));
      } catch (error) {
        console.error("Error fetching user courses:", error);
      }
    };

    fetchUserCourses();
  }, [courses]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("savedCourses"));
    if (savedCourses) {
      setIsCourseAddedArray(savedCourses);
    }
  }, []);

  const handleAddToUser = async (courseId, index) => {
    try {
      const response = await axiosClient.post("/api/add_course/", {
        user: userData.id,
        course: courseId,
      });
      
      setIsCourseAddedArray(prevState => {
        const updatedArray = [...prevState];
        updatedArray[index] = true;
        localStorage.setItem("savedCourses", JSON.stringify(updatedArray));
        return updatedArray;
      });
    } catch (error) {
      console.error("Error adding course to user:", error);
    }
  };

  const handleRemoveFromUser = async (courseId, index) => {
    try {
      const response = await axiosClient.post("/api/remove_course/", {
        user: userData.id,
        course: courseId,
      });
      console.log("Course removed from user:", response.data);
      
      setIsCourseAddedArray(prevState => {
        const updatedArray = [...prevState];
        updatedArray[index] = false;
        localStorage.setItem("savedCourses", JSON.stringify(updatedArray));
        return updatedArray;
      });
    } catch (error) {
      console.error("Error removing course from user:", error);
    }
  };    

  const handleCheckout = async (courseId) => {
    try {
      const response = await fetch(`${API_URL}/api/create_checkout_session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id: courseId }),
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data; 
      } else {
        console.error("Failed to initiate checkout");
        alert("Failed to initiate checkout. Please try again later.");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
      alert("Error initiating checkout. Please try again later.");
    }
  };

  return (
    <div>
      <p className='type' id='courses'>Courses</p>
      <div className="quizzesPanel">
        {courses.map((courseData, i) => {
          if (userData && userData.courses.includes(courseData.id)) {
            return (
              <div className="quizCard" key={i}>
                <div className="thumbnail">
                  <img src={courseData.thumbnail} alt="slika" />
                </div>
                <div className="courseDescription">
                  <span>${courseData.price}</span>
                  <span style={{ float: 'right', marginRight: '1%', fontFamily: 'inherit' }}>{courseData.length}</span>
                  <br />
                  <p style={{ width: '100%', fontWeight: 'bold' }}>{courseData.name}</p>
                </div>
                <div className="quizInfo" style={{ display: 'flex' }}>
                  <div className="quizArtist">
                    <span>{courseData.artist}</span>
                  </div>
                  <div className="quizButtons">
                    <Button onClick={() => handleCheckout(courseData.id)}>Watch</Button>
                    <img 
                      src={isCourseAddedArray[i] ? require("../../media/Icons/Saved.png") : require("../../media/Icons/notSaved.png")} 
                      alt={isCourseAddedArray[i] ? "Saved" : "Not Saved"} 
                      onClick={() => {
                        if (isCourseAddedArray[i]) {
                          handleRemoveFromUser(courseData.id, i);
                        } else {
                          handleAddToUser(courseData.id, i);
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
