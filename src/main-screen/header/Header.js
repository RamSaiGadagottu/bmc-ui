import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Header.module.css';
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { RxCaretDown } from 'react-icons/rx';
import { FaUserCircle } from 'react-icons/fa';

export default function Header(){
    return (
        <Navbar expand="lg" className={styles.navBar}>
          <Container>
            <Navbar.Brand href="#home">Kenvue</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#adminstration">Adminstration</Nav.Link>
                <Nav.Link href="#search">Search</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse className={`justify-content-end ${styles.gap}`}>
              <Nav.Link>
                <IoSettingsOutline size="1.5em"/>
              </Nav.Link>
              <Nav.Link>
                <IoNotificationsOutline size="1.5em"/>
              </Nav.Link>
              <Nav.Link>
                <FaUserCircle size="1.5em"/>
                <RxCaretDown size="1.5em"/>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}