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
            <MyTeams teams={teams} />
            <Top5 />
            <HighlightedPlayers />
        </div>
    )
}

export default HomePage