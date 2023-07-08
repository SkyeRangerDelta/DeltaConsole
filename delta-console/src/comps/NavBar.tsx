// -- NavBar Main --
import '../assets/comp_css/NavBar.css';
import { Nav, Navbar } from "react-bootstrap";


function NavBar() {
    return (
        <Navbar id="mainNav" expand="lg" className="lg" sticky="top">
            <Navbar.Brand id="brandNavMain" href="#home" style={{ color: "aliceblue" }}>
                <img
                    alt="PlDyn Logo"
                    src="../../src/assets/img/pldyn.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{" "}
                Delta Console
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto">
                    <Nav.Link id="basic-navbar-nav" href="#home">Main</Nav.Link>
                    <Nav.Link id="basic-navbar-nav" href="#status">Status</Nav.Link>
                    <Nav.Link id="basic-navbar-nav" href="#Uploader">Uploader</Nav.Link>
                </Nav>
                <Navbar.Text id={"loginTxt"}>
                    <a href={"#login"} style={{ color: "aliceblue" }}>Account</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;