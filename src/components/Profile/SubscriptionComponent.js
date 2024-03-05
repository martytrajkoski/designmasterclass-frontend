import { Container, Form, Button } from "react-bootstrap";
import '../../style/ProfileStyle.scss'
import Navibar from "../Navbar/Navibar";

export default function ProfileComponent() {

    // const [name, setName] = useState("");
    // const [cardNumber, setCardNumber] = useState("");
    // const [expiry, setExpiry] = useState("");
    // const [cvc, setCvc] = useState("");
    // const [submittedData, setSubmittedData] = useState({});

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setSubmittedData({ name, cardNumber, expiry, cvc });
    // }

    return (
        <Container>
            <Form className="subscriptionForm">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className="subscriptionInfo" placeholder="Card Number" />
                    <Form.Control className="subscriptionInfo" placeholder="Expiration date" />
                    <Form.Control className="subscriptionInfo" placeholder="CVC" />
                    <Button>
                    Submit
                </Button>
                {/* caption for success or fail */}
                </Form.Group>
                
            </Form>
        </Container>


    );
}