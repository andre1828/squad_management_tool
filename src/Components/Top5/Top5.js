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
                <ListGroup>

                    {
                        hightestAverageAge.map(team => (
                            <ListGroup.Item key={team.team_key}>
                                <Card.Text>{team.team_name}</Card.Text>
                                <Card.Text>{team.team_average_age}</Card.Text>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
                <Card.Title>Lowest Average Age</Card.Title>
                <ListGroup>

                    {
                        lowestAverageAge.map(team => (
                            <ListGroup.Item key={team.team_key}>
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