import React, { useState } from "react";
import axios from "axios";
import { Button, Card} from "react-bootstrap";
import { useEffect } from 'react';

export default function Content(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tutorialphotoshop/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ width: '100%' }}>
            {data.map((tutorialData, i) => {
                return (
                    <Card className="contentCard" key={i}>
                        <Card.Body>
                            <Card.Title id={`photoshop${i}`} >{tutorialData.name}</Card.Title>
                            <Card.Text>{tutorialData.content1}</Card.Text>
                            <Card.Text>{tutorialData.content2}</Card.Text>
                            <Card.Text>{tutorialData.content3}</Card.Text>
                            <Card.Text>{tutorialData.content4}</Card.Text>
                            <Card.Text>{tutorialData.content5}</Card.Text>
                            <img src={tutorialData.image1} width={'300px'} />
                            <img src={tutorialData.image2} width={'300px'} />
                            <img src={tutorialData.image3} width={'300px'} />
                            <img src={tutorialData.image4} width={'300px'} />
                            <img src={tutorialData.image5} width={'300px'} />
                        </Card.Body>
                    </Card>
                )
            })}
            <div style={{textAlign: "center"}}>
                <img src={require('../../media/Icons/up-arrow.png')} 
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `#photoshop0`;
                    }}
                    height={'80px'} 
                    />
            </div>
            
        </div>
    );
}
    // return(
    //     <div>
    //         {tutorial.map((tutorialData, i) => {
    //                 return(
    //                     <Card style={{ width: '80%' }} className="contentCard" key={i}>
    //                         <Card.Body>
    //                             <Card.Title id={tutorialData.name}>{tutorialData.name}</Card.Title>
    //                             <Card.Text>{tutorialData.content1}</Card.Text>
    //                             <Card.Text>{tutorialData.content2}</Card.Text>
    //                             <Card.Text>{tutorialData.content3}</Card.Text>
    //                             <Card.Text>{tutorialData.content4}</Card.Text>
    //                             <Card.Text>{tutorialData.content5}</Card.Text>
    //                             {tutorialData.image1}
    //                         </Card.Body>
    //                     </Card>
    //                 )
    //             })} 
    //     </div>
    // );