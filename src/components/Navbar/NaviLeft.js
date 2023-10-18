import { Button, Dropdown, DropdownButton} from "react-bootstrap";
import '../../style/Navibar.scss';
import axios from "axios";
import { useState } from "react";


export default function NaviLeft() {

    const [photoshopName, setPhotoshopName] = useState([])
    const [illustratorName, setIllustratorName] = useState([])

    axios.get('http://127.0.0.1:8000/api/tutorialphotoshop/')
        .then(res => {
            setPhotoshopName(res.data)
        }).catch(err => {
            console.log(err)
        })

    axios.get('http://127.0.0.1:8000/api/tutorialillustrator/')
    .then(res => {
        setIllustratorName(res.data)
    }).catch(err => {
        console.log(err)
    })

    return (
        <div className="Navileft">
            <DropdownButton title="Turotials">
                <Dropdown.Header>Adobe Photoshop</Dropdown.Header>
                <Dropdown.Item href="#/action-1">Getting to know the Photoshop interface</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Photoshop tools and toolbar overview</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Reset the tools and Toolbar in Photoshop CC</Dropdown.Item>
                <Dropdown.Header>Adobe Illustrator</Dropdown.Header>
                <Dropdown.Item href="#/action-1">Basis</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tools</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Effects</Dropdown.Item>
            </DropdownButton>
            {/* <Button>Tutorials</Button> */}
            <Button>Quizzes</Button>
        </div>
    );
};