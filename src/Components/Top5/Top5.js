import './Top5.scss'
import ListGroup from "react-bootstrap/ListGroup"
import { Card, Container, Row, Col } from "react-bootstrap"
import { getHightestAverageAge, getLowestAverageAge } from '../../teamContext'

function Top5(props) {

    const hightestAverageAge = getHightestAverageAge(props.teams)

    const lowestAverageAge = getLowestAverageAge(props.teams)

    return (
        <Card>
            <Card.Header>
                Top 5
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title className="age-average-heading">Hightest avg age</Card.Title>
                        <ListGroup className="age-average-list">
                            {
                                hightestAverageAge.map(team => (
                                    <ListGroup.Item className="age-average" key={team.team_key}>
                                        <Card.Text>{team.team_name}</Card.Text>
                                        <Card.Text className="value">{team.team_average_age}</Card.Text>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col>
                        <Card.Title className="age-average-heading" >Lowest avg Age</Card.Title>
                        <ListGroup className="age-average-list">
                            {
                                lowestAverageAge.map(team => (
                                    <ListGroup.Item className="age-average" key={team.team_key}>
                                        <Card.Text>{team.team_name}</Card.Text>
                                        <Card.Text className="value">{team.team_average_age}</Card.Text>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Top5