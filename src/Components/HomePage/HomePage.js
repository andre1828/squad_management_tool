import './HomePage.scss'
import MyTeams from './../MyTeams/MyTeams.js'
import Top5 from './../Top5/Top5.js'
import HighlightedPlayers from './../HighlightedPlayers/HighlightedPlayers.js'
import { fetchTeams } from './../../teamContext.js'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

function HomePage() {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        async function asyncFetch() {

            if (teams.length === 0) {
                var result = await fetchTeams()
                setTeams(result)
            }
        }

        asyncFetch()
    }, [teams.length])

    return (
        <>
            <Row>
                <Col xs={12} md={6} className="max-content">
                    <MyTeams teams={teams} />
                </Col>
                <Col>
                    <Top5 teams={teams} />
                    <HighlightedPlayers />
                </Col>
            </Row>
        </>
    )
}

export default HomePage