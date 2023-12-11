import React, { useState } from "react";
import axios from "axios";
import { Button, Card} from "react-bootstrap";
import { useEffect } from 'react';

export default function Content(){

    const [tutorial, setTutorial] = useState([])
    const [data, setData] = useState([]);

    // axios.get('http://127.0.0.1:8000/api/tutorialillustrator/')
    //     .then(res => {
    //         setTutorial(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tutorialillustrator/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div style={{ border: '1px solid blue' }}>

            {data.map((tutorialData, i) => {
                return (
                    <Card style={{ width: '80%' }} className="contentCard" key={i}>
                        <Card.Body>
                            <Card.Title id={tutorialData.name}>{tutorialData.name}</Card.Title>
                            <Card.Text>{tutorialData.content1}</Card.Text>
                            <Card.Text>{tutorialData.content2}</Card.Text>
                            <Card.Text>{tutorialData.content3}</Card.Text>
                            <Card.Text>{tutorialData.content4}</Card.Text>
                            <Card.Text>{tutorialData.content5}</Card.Text>
                            <img src={tutorialData.image1} />
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
}