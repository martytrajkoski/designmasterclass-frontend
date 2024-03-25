import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { API_URL } from "../../config/apiUrl";
import '../../style/HomepageStyle.scss';

export default function HomeSearch() {
    const [searchType, setSearchType] = useState("courses"); // Default search type is courses
    const [courses, setCourses] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDropdownItems, setFilteredDropdownItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const coursesResponse = await axiosClient.get(`${API_URL}/api/courses/`);
            console.log("Fetched courses:", coursesResponse.data); // Log fetched courses
            setCourses(coursesResponse.data);

            const quizzesResponse = await axiosClient.get(`${API_URL}/api/quizzes/`);
            console.log("Fetched quizzes:", quizzesResponse.data); // Log fetched quizzes
            setQuizzes(quizzesResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const items = searchType === "courses" ? courses : quizzes;
        if (items && items.length > 0) {
            if (searchType === "courses"){
                const filteredItems = items.filter(item =>
                    (item.name && item.name.toLowerCase().includes(query))
                ).map(item => ({
                    id: item.id,
                    name: item.name,
                    thumbnail: item.thumbnail
                }));
                setFilteredDropdownItems(filteredItems);   
            } else {
                const filteredItems = items.filter(item =>
                    (item.name && item.name.toLowerCase().includes(query))
                ).map(item => ({
                    name: item.name,
                    thumbnail: item.thumbnail,
                    url: item.url
                }));
                setFilteredDropdownItems(filteredItems);   
            }
        } else {
            setFilteredDropdownItems([]);
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

    return (
        <Container fluid>
            <Row className="homeSearch">
                <Col>
                    <p>Learn to Design</p>
                    <div>
                        <input type="text" placeholder="Search..." onChange={handleSearch} value={searchQuery} />
                        <select
                            value={searchType}
                            onChange={(event) => setSearchType(event.target.value)}
                        >
                            <option value="courses">Courses</option>
                            <option value="quizzes">Quizzes</option>
                        </select>
                        <div className="searchDropdown">
                            {searchQuery && (
                                <Dropdown show>
                                    <Dropdown.Menu>
                                        {filteredDropdownItems.map(item => (
                                            <Dropdown.Item key={item} style={{ width: '550px'}}>
                                                <div >
                                                    <img src={item.thumbnail} />
                                                    <span>{item.name}</span>
                                                    {searchType === "courses" ? (
                                                        <Button onClick={() => handleCheckout(item.id)}>Watch</Button>
                                                    ):(
                                                        <Button onClick={() => window.location.href=item.url}>Watch</Button>
                                                    )}
                                                </div>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="vector1">
                <Col><br /></Col>
            </Row>
        </Container>
    );
}
