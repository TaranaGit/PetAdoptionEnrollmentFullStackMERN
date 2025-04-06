import { Container, Nav, Navbar } from "react-bootstrap";
import { FaRegIdCard } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { PiDogBold } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import classes from './nab.module.css'
import { Link } from "react-router";
import { IoIosSettings } from "react-icons/io";
function Nab(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className={classes.navContainer}>
        <PiDogBold />
          <Navbar.Brand href="/">Pet Adoption</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <FaUserEdit />
              <Nav.Link href="/register">New Registration</Nav.Link>
              <FaRegIdCard />
              <Nav.Link href="/records">Adoption Records</Nav.Link>
            </Nav>

            <Nav className='ms-auto'>
            <Nav.Link href='/settings'>
            <IoIosSettings />
            Settings</Nav.Link>
            <Link  to="/account/login" className="nav-link">
            <TbLogout />
            Logout</Link>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
}
export default Nab;