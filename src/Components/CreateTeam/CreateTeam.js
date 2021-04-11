import Form from "react-bootstrap/Form";
import { InputGroup, Row, Col, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Field from './../Field/Field.js'
import './createTeam.scss'
import Container from "react-bootstrap/Container";

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
                    <DropdownButton id="dropdown-basic-button" title="3 - 4 - 3">
                        <Dropdown.Item value="3-2-2-3">3 - 2 - 2 - 3</Dropdown.Item>
                        <Dropdown.Item value="3-2-3-1">3 - 2 - 3 - 1</Dropdown.Item>
                        <Dropdown.Item value="3-4-3">3 - 4 - 3</Dropdown.Item>
                        <Dropdown.Item value="3-5-2">3 - 5 - 2</Dropdown.Item>
                        <Dropdown.Item value="4-2-3-1">4 - 2 - 3 - 1</Dropdown.Item>
                        <Dropdown.Item value="4-3-1-1">4 - 3 - 1 - 1</Dropdown.Item>
                        <Dropdown.Item value="4-3-2">4 - 3 - 2</Dropdown.Item>
                        <Dropdown.Item value="4-4-2">4 - 4 - 2</Dropdown.Item>
                        <Dropdown.Item value="4-5-1">4 - 5 - 1</Dropdown.Item>
                        <Dropdown.Item value="5-4-1">5 - 4 -1</Dropdown.Item>
                    </DropdownButton>
                </Form.Group>
                <Field />
                <Form.Group>
                    <Form.Label>Search Players</Form.Label>
                    <Form.Control type="text" />
                    <ListGroup className="player-list">
                        <ListGroup.Item className="player">
                            <p>Name: <span className="value">Cristiano Rolando</span></p>
                            <p>Age: <span className="value">32</span> </p>
                            <p>Nationality: <span className="value">Portugal</span></p>
                        </ListGroup.Item>
                    </ListGroup>
                </Form.Group>
            </Card.Body>
        </Card>
    )
}

export default CreateTeam