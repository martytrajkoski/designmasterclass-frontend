import { Button, Dropdown, DropdownButton} from "react-bootstrap";
import '../../style/Navibar.scss';
import axios from "axios";
import { API_URL } from "../../config/apiUrl"
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function NaviLeft() {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateQuizzes = () => {
        navigate('/quizzes')
    }

    const isActive = location.pathname.includes("courses") || location.pathname.includes("quizzes") || location.pathname.includes("profile");

    const [photoshopTutorial, setPhotoshopTutorial] = useState([]);
    const [illustratorTutorial, setIllustratorTutorial] = useState([]);
    const [loadingPhotoshop, setLoadingPhotoshop] = useState(true);
    const [loadingIllustrator, setLoadingIllustrator] = useState(true);

    useEffect(() => {
        const fetchPhotoshopTutorial = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/tutorialphotoshop/`);
                setPhotoshopTutorial(response.data);
            } catch (error) {
                console.error('Error fetching Photoshop tutorials:', error);
            } finally {
                setLoadingPhotoshop(false);
            }
        };

        const fetchIllustratorTutorial = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/tutorialillustrator/`);
                setIllustratorTutorial(response.data);
            } catch (error) {
                console.error('Error fetching Illustrator tutorials:', error);
            } finally {
                setLoadingIllustrator(false);
            }
        };

        fetchPhotoshopTutorial();
        fetchIllustratorTutorial();
    }, []);

    return (
        <div className="Navileft">
            <DropdownButton title="Tutorials" style={{ background: 'none', display: 'flex', marginLeft: '5%' }}>   
                <div className="dropdown">
                    <div className="dropdown-links">
                        <Dropdown.Header style={{color: '#c77634', fontSize: '25px', fontWeight: '500'}}>Adobe Photoshop</Dropdown.Header>
                        {loadingPhotoshop ? (
                            <span>Loading Photoshop tutorials...</span>
                        ) : (
                            photoshopTutorial.map((pName, i) => (
                                <div key={i}>
                                    <Button
                                        onClick={() => {
                                            window.location.href = `/photoshop#photoshop${i}`;
                                        }}
                                    >{pName.name}</Button>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="dropdown-links">
                        <Dropdown.Header style={{color: '#c77634', fontSize: '25px', fontWeight: '500'}}>Adobe Illustrator</Dropdown.Header>
                        {loadingIllustrator ? (
                            <span>Loading Illustrator tutorials...</span>
                        ) : (
                            illustratorTutorial.map((iName, i) => (
                                <div key={i}>
                                    <Button 
                                        onClick={() => {
                                            window.location.href = `/illustrator#illustrator${i}`;
                                        }}
                                    >{iName.name}</Button>
                                </div>
                            ))
                        )}
                    </div> 
                </div>
            </DropdownButton>
                
            <Button onClick={navigateQuizzes}>Quizzes</Button>
            {isActive && (
                <Button href="/">
                    <img src={require('../../media/Navbar/home wihte 1.png')} alt="Home"/>
                </Button>
            )}
        </div>
    );
};
