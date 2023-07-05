// -- NavBar Main --
import '../assets/comp_css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";


function NavBar() {
    return (
        <Navbar id="mainNav" expand="lg" className="lg" sticky="top">
            <Navbar.Brand href="#home" style={{ color: "aliceblue" }}>
                <img
                    alt="PlDyn Logo"
                    src="../../src/assets/img/pldyn.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{ ' ' }
                Delta Console
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Main</Nav.Link>
                    <Nav.Link href="#status">Status</Nav.Link>
                    <Nav.Link href="#Uploader">Uploader</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;