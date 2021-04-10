import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Field from './../Field/Field.js'

function CreateTeam() {
    return (
        <Card>
            <Card.Header>Create your team</Card.Header>
            <Card.Body>
                <Card.Text className="text-center">TEAM INFORMATION</Card.Text>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Team name</Form.Label>
                    <Form.Control type="text" placeholder="Insert team name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Team website</Form.Label>
                    <Form.Control placeholder="http://myteam.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Team type</Form.Label>
                    <Form.Check custom type={'radio'} label={'Real'} />
                    <Form.Check custom type={'radio'} label={'Fantasy'} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tags</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Card.Text className="text-center">CONFIGURE SQUAD</Card.Text>
                <Form.Group>
                    <Form.Label>Formation</Form.Label>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Field/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Search Players</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Card.Body>
        </Card>
    )
}

export default CreateTeam