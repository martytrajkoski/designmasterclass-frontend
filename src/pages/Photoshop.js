import React from "react";
import axios from "axios";
import Navibar from "../components/Navbar/Navibar";
import SideBar from "../components/Photoshop/SideBar";
import { Button } from "react-bootstrap";

export default function Photoshop(){

    const getTutorial = () => {
        axios.get('http://127.0.0.1:8000/api/tutorials/')
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <Navibar ></Navibar>
            <Button onClick={getTutorial}>tutorial</Button>
            {/* <SideBar/> */}
            {/* {tutorial.name} */}
        </div>
    );
}