import React, { useState } from "react";
import axios from "axios";
import { Button, Card} from "react-bootstrap";

export default function Content(){

    const [tutorial, setTutorial] = useState([])

    axios.get('http://127.0.0.1:8000/api/tutorialphotoshop/')
        .then(res => {
            setTutorial(res.data)
        }).catch(err => {
            console.log(err)
        })

    return(
        <div>
            {tutorial.map((tutorialData, i) => {
                    return(
                        <Card style={{ width: '100%' }} className="contentCard" key={i}>
                            <Card.Body>
                                <Card.Title id={tutorialData.name}>{tutorialData.name}</Card.Title>
                                <Card.Text>{tutorialData.content1}</Card.Text>
                                <Card.Text>{tutorialData.content2}</Card.Text>
                                <Card.Text>{tutorialData.content3}</Card.Text>
                                <Card.Text>{tutorialData.content4}</Card.Text>
                                <Card.Text>{tutorialData.content5}</Card.Text>
                                {tutorialData.image1}
                            </Card.Body>
                        </Card>
                    )
                })} 
        </div>
    );
}