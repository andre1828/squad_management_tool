import './HomePage.scss'
import MyTeams from './../MyTeams/MyTeams.js'
import Top5 from './../Top5/Top5.js'
import HighlightedPlayers from './../HighlightedPlayers/HighlightedPlayers.js'
import { addTeams, fetchTeams } from './../../teamContext.js'
import { useEffect, useReducer, useState } from 'react'
import { Col, Modal, Row, Button } from 'react-bootstrap'

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
    }, [])

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