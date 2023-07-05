import NavBar from "./NavBar.tsx";
import {Container} from "react-bootstrap";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/comp_css/Home.css';

function Home() {
    return (
        <Container id="homeDiv" fluid>
            <NavBar />
            <div className="container-lg">
                <h1>Stuff here.</h1>
            </div>
        </Container>
    )
}

export default Home;
