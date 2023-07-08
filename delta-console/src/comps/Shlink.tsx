import '../assets/comp_css/UIComps.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ShlinkBox() {
    return (
        <InputGroup className={"mb-3"}>
            <Form.Control
                aria-label={"url-to-shorten"}
                placeholder={"URL to shorten"}
            />
            <Button style={{ color: "aqua", borderColor: "aqua" }}
                    variant={"outline-primary"} as="input" type="submit" value="Shorten" disabled />
        </InputGroup>
    )
}

export default ShlinkBox;