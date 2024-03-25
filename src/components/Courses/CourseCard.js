import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Button } from "react-bootstrap";
import { API_URL } from "../../config/apiUrl";

export default function CourseCard({ selectedCategory, searchQuery }) {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isCourseAddedArray, setIsCourseAddedArray] = useState([]);
  const [saveButton, setSaveButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`${API_URL}/api/courses/`);
        console.log("Fetched data:", response.data); // Log fetched data
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
        console.log("Fetched user data:", response.data); // Log fetched user data
        setUserData(response.data.user);
        setSaveButton(true);
      } catch (error) {
        console.error("Error fetching user data");
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
        console.log("Fetched user courses:", response.data); // Log fetched user courses
        const userCourses = response.data.courses;
        const savedCourseIds = userCourses.map((course) => course.id);

        const newIsCourseAddedArray = data.map((course) =>
          savedCourseIds.includes(course.id)
        );
        console.log("New isCourseAddedArray:", newIsCourseAddedArray); // Log new isCourseAddedArray
        setIsCourseAddedArray(newIsCourseAddedArray);

        localStorage.setItem(
          "savedCourses",
          JSON.stringify(newIsCourseAddedArray)
        );
      } catch (error) {
        console.error("Error fetching user courses:", error);
      }
    };

    fetchUserCourses();
  }, [data]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("savedCourses"));
    if (savedCourses) {
      setIsCourseAddedArray(savedCourses);
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

  const handleAddToUser = async (courseId, index) => {
    try {
      const response = await axiosClient.post("/api/add_course/", {
        user: userData.id,
        course: courseId,
      });
      console.log("Course added to user:", response.data);
      
      const updatedArray = [...isCourseAddedArray];
      updatedArray[index] = true;
      setIsCourseAddedArray(updatedArray);
      
      localStorage.setItem("savedCourses", JSON.stringify(updatedArray));
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
      
      const updatedArray = [...isCourseAddedArray];
      updatedArray[index] = false;
      setIsCourseAddedArray(updatedArray);
      
      localStorage.setItem("savedCourses", JSON.stringify(updatedArray));
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
        window.location.href = data; // Redirect to the checkout URL returned by the backend
      } else {
        console.error("Failed to initiate checkout");
        alert("Failed to initiate checkout. Please try again later.");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
      alert("Error initiating checkout. Please try again later.");
    }
  };

  console.log("Filtered data:", filteredData);

  return (
    <div className="coursesPanel">
      {filteredData.map((courseData) => {
        const index = data.findIndex((course) => course.id === courseData.id); // Find index based on courseId
        return (
          <div className="courseCard" key={courseData.id}>
            <div className="thumbnail">
              <img src={courseData.thumbnail} alt="thumbnail" />
            </div>
            <div className="courseDescription">
              <span>Price: ${courseData.price}</span>
              <span style={{ float: "right", marginRight: "1%", fontFamily: "inherit" }}>
                {courseData.length}
              </span>
              <br />
              <p style={{ width: "100%", fontWeight: "bold" }}>{courseData.name}</p>
            </div>
            <div className="courseInfo" style={{ display: "flex" }}>
              <div className="courseArtist">
                <span>{courseData.artist}</span>
              </div>
              <div className="courseButtons">
                <Button onClick={() => handleCheckout(courseData.id)}>Watch</Button>
                {saveButton ? (
                  <img
                    src={
                      isCourseAddedArray[index] // Use index instead of i
                        ? require("../../media/Icons/Saved.png")
                        : require("../../media/Icons/notSaved.png")
                    }
                    alt={isCourseAddedArray[index] ? "Saved" : "Not Saved"}
                    onClick={() => {
                      if (isCourseAddedArray[index]) {
                        handleRemoveFromUser(courseData.id, index);
                      } else {
                        handleAddToUser(courseData.id, index);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
}
