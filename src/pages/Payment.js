import React, { useState, useEffect } from "react";
import { API_URL } from "../config/apiUrl";
import axiosClient from "../api/axiosClient";

const ProductDisplay = ({ courses, handleCheckout }) => (
  <section>
    {courses.map((course) => (
      <div key={course.id} className="product">
        <img src={course.image} alt={course.title} />
        <div className="description">
          <h3>{course.title}</h3>
          <h5>${course.price}</h5>
          <button onClick={() => handleCheckout(course.id)}>Checkout</button>
        </div>
      </div>
    ))}
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Payment() {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosClient.get(`${API_URL}/api/courses/`);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

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
        setMessage("Failed to initiate checkout. Please try again later.");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
      setMessage("Error initiating checkout. Please try again later.");
    }
  };  

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay courses={courses} handleCheckout={handleCheckout} />
  );
}
