//Import comps
import NavBar from "./NavBar.tsx";
import Shlink from './Shlink.tsx';
import Greeting from "./Greeting.tsx";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/comp_css/Home.css';

function Home() {
    return (
        <Container fluid="md">
            <Row>
                <NavBar />
            </Row>
            <Row>
                <Greeting />
            </Row>
            <Row md={"2"}>
                <Col>
                    <Shlink />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
