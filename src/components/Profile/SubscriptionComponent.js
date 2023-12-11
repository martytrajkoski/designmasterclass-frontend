import { Container, Card } from "react-bootstrap";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import '../../style/ProfileStyle.scss'
import Navibar from "../Navbar/Navibar";

export default function ProfileComponent(){
    
    // const [name, setName] = useState("");
    // const [cardNumber, setCardNumber] = useState("");
    // const [expiry, setExpiry] = useState("");
    // const [cvc, setCvc] = useState("");
    // const [submittedData, setSubmittedData] = useState({});

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setSubmittedData({ name, cardNumber, expiry, cvc });
    // }

    return(
        <div>
            <Navibar></Navibar>
            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} style={{ backgroundColor: "#3C327B" }}>
                    <p>Profile</p>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content" style={{ backgroundColor: "#554f7a" }}>
                    <CDBSidebarMenu>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">User Info</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/subscription" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="credit-card">Subscription</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Courses</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>

            <Container>
                    <form className="card-form">
                        <div className="subscriptionCard">
                            <input
                                type="text"
                                className="form-control mt-3 subscriptionInfo"
                                placeholder="Cardholder Name"
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control mt-3 subscriptionInfo"
                                placeholder="Card Number"
                                // value={cardNumber}
                                // onChange={(e) => setCardNumber(e.target.value)}
                            />
                            <div className="expiry-and-cvc-container mt-3">
                                <input
                                    type="text"
                                    className="form-control expiration-date-field subscriptionInfo"
                                    placeholder="MM/YY"
                                    // value={expiry}
                                    // onChange={(e) => setExpiry(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-control cvc-field ml-3 subscriptionInfo"
                                    placeholder="CVC"
                                    // value={cvc}
                                    // onChange={(e) => setCvc(e.target.value)}
                                />
                            </div>
                            <button
                            type="submit"
                            className="btn btn-primary btn-block subscriptionInfo"
                            // onClick={handleSubmit}
                            >
                            Submit
                            </button>
                        </div>
                    </form>
            </Container>
        </div>
        </div>
        
        
    );
}