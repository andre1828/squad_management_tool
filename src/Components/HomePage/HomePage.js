import Container from 'react-bootstrap/Container'
import MyTeams from './../MyTeams/MyTeams.js'
import Top5 from './../Top5/Top5.js'
import HighlightedPlayers from './../HighlightedPlayers/HighlightedPlayers.js'

function HomePage() {
    return (
        <div>
            <Container fluid>
                <MyTeams />
                <Top5 />
                <HighlightedPlayers />
            </Container>
        </div>
    )
}

export default HomePage