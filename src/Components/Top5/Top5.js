import './Top5.scss'
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import { useContext, useEffect, useState } from 'react'
import { TeamsContext } from '../../teamsContext'

function Top5() {

    const [getTeams, getHightestAverageAge, getLowestAverageAge] = useContext(TeamsContext)
    const [teams, setTeams] = useState([])

    useEffect(() => {
        async function fetchTeams() {
            console.log('getTeams: ' + getTeams);
            var result = await getTeams()
            setTeams(result)
        }

        fetchTeams()
    }, [])

    const hightestAverageAge = getHightestAverageAge()

    const lowestAverageAge = getLowestAverageAge()

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