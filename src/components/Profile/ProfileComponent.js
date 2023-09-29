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
                <Card className="profileCard">
                    <Card.Body>
                        <Card.Text className="profileInfo">Name: </Card.Text>    
                        {/* {userInfo?.firstName}  posle name*/}
                        <Card.Text className="profileInfo">Last Name: </Card.Text>
                        {/* {userInfo?.lastName} */}
                        <Card.Text className="profileInfo">Username: </Card.Text>
                        {/* {userInfo?.userName} */}
                        <Card.Text className="profileInfo">Payment:</Card.Text>
                        {/* {userInfo?.transaction} */}
                    </Card.Body>
                </Card>
            </Container>
        </div>
        </div>
        
        
    );
}