import { Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Field from './../Field/Field.js'
import './createTeam.scss'
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router";

function CreateTeam() {

    const history = useHistory()

    return (
        <Card>
            <Card.Header>Create your team</Card.Header>
            <Card.Body>
                    <Card.Text className="text-center section-title">TEAM INFORMATION</Card.Text>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Team name</Form.Label>
                                <Form.Control type="text" placeholder="Insert team name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={7} />
                            </Form.Group>
                        </Col>
                        <Col>
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
                        </Col>
                    </Row>
                    <Card.Text className="text-center section-title">CONFIGURE SQUAD</Card.Text>
                    <Row>
                        <Col>
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
                            <Button className="btn-save-team" onClick={() => history.push("/")}>Save</Button>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Search Players</Form.Label>
                                <Form.Control type="text" />
                                <ListGroup className="player-list">
                                    <ListGroup.Item className="player">
                                        <p>Name: <span className="value">Cristiano Ronaldo</span></p>
                                        <p>Age: <span className="value">32</span> </p>
                                        <p>Nationality: <span className="value">Portugal</span></p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Form.Group>
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
    )
}

export default CreateTeam