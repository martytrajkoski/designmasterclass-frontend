import { Button, Dropdown, DropdownButton} from "react-bootstrap";
import '../../style/Navibar.scss';
import axios from "axios";
import { useState } from "react";


export default function NaviLeft() {

    const [photoshopName, setPhotoshopName] = useState([])
    const [illustratorName, setIllustratorName] = useState([])

    // axios.get('http://127.0.0.1:8000/api/tutorialphotoshop/')
    //     .then(res => {
    //         setPhotoshopName(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })

    // axios.get('http://127.0.0.1:8000/api/tutorialillustrator/')
    //     .then(res => {
    //         setIllustratorName(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })

    return (
        <div className="Navileft">
            <DropdownButton title="Turotials" style={{ background: 'none' }}>
                <Dropdown.Header>Adobe Photoshop</Dropdown.Header>
                {photoshopName.map((pName, i) => {
                    return (
                        <div key={i}>
                            <Dropdown.Item href="/photoshop">{pName.name}</Dropdown.Item>
                        </div>
                    )
                })}
                <Dropdown.Header>Adobe Illustrator</Dropdown.Header>
                {illustratorName.map((iName, i) => {
                    return (
                        <div key={i}>
                            <Dropdown.Item href="#/action-1">{iName.name}</Dropdown.Item>
                        </div>
                    )
                })}
            </DropdownButton>
                
            {/* <Button></Button> */}
            <Button>Quizzes</Button>
        </div>
    );
};