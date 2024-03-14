import React, { useState } from "react";
import axios from "axios";
import { Button, Card} from "react-bootstrap";
import { useEffect } from 'react';

export default function Content(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tutorialillustrator/');
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div style={{overflowY: 'scroll'}}>
            {data.map((tutorialData, i) => {
                return (
                    <Card className="contentCard" key={i}>
                        <Card.Body>
                            <Card.Title id={`illustrator${i}`} >{tutorialData.name}</Card.Title>
                            <Card.Text>{tutorialData.content1}</Card.Text>
                            <Card.Text>{tutorialData.content2}</Card.Text>
                            <Card.Text>{tutorialData.content3}</Card.Text>
                            <Card.Text>{tutorialData.content4}</Card.Text>
                            <Card.Text>{tutorialData.content5}</Card.Text>
                            <img src={tutorialData.image1} />
                            <img src={tutorialData.image2} />
                            <img src={tutorialData.image3} />
                            <img src={tutorialData.image4} />
                            <img src={tutorialData.image5} />
                        </Card.Body>
                    </Card>
                )
            })}
            <div style={{textAlign: "center"}}>
                <img src={require('../../../media/Icons/up-arrow.png')} 
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `#illustrator1`;
                    }}
                    height={'60px'} 
                    />
            </div>
            
        </div>
    );
}