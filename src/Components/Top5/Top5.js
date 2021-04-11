import './Top5.scss'
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import { useContext } from 'react'
import { TeamContext, getHightestAverageAge, getLowestAverageAge } from '../../teamContext'

function Top5() {

    const { teams } = useContext(TeamContext)

    const hightestAverageAge = getHightestAverageAge(teams)

    const lowestAverageAge = getLowestAverageAge(teams)

    return (
        <Card>
            <Card.Header>
                Top 5
            </Card.Header>
            <Card.Body>
                <Card.Title>Hightest Average Age</Card.Title>
                <ListGroup className="age-average-list">

                    {
                        hightestAverageAge.map(team => (
                            <ListGroup.Item className="age-average" key={team.team_key}>
                                <Card.Text>{team.team_name}</Card.Text>
                                <Card.Text>{team.team_average_age}</Card.Text>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
                <Card.Title>Lowest Average Age</Card.Title>
                <ListGroup className="age-average-list">

                    {
                        lowestAverageAge.map(team => (
                            <ListGroup.Item className="age-average" key={team.team_key}>
                                <Card.Text>{team.team_name}</Card.Text>
                                <Card.Text>{team.team_average_age}</Card.Text>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Top5