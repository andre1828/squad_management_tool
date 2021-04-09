import Container from 'react-bootstrap/Container'
import MyTeams from './../MyTeams/MyTeams.js'
import Top5 from './../Top5/Top5.js'
// import Top5 from './../Top5/Top5.js'
import HighlightedPlayers from './../HighlightedPlayers/HighlightedPlayers.js'
import { TeamContext, addTeams, fetchTeams } from './../../teamContext.js'
import { useEffect, useReducer } from 'react'

function HomePage() {

    const [teams, setTeams] = useReducer(addTeams, [])

    useEffect(() => {
        async function asyncFetch() {

            var result = await fetchTeams()
            setTeams(result)
        }

        asyncFetch()
    }, [])

    return (
        <div>
            <TeamContext.Provider value={{ teams, setTeams }}>
                <Container fluid>
                    <MyTeams />
                    <Top5 />
                    <HighlightedPlayers />
                </Container>
            </TeamContext.Provider>
        </div>
    )
}

export default HomePage