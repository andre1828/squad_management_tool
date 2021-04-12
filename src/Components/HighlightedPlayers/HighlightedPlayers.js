import profilePic from './profile-pic.png'
import './HighlightedPlayers.scss'
import { Figure } from 'react-bootstrap'

function HighlightedPlayers() {
    return (
        <div className="highlighted-players">
            <div className="field-line"></div>
            <div className="field-center-circle"></div>

            <p className="header">Most picked player</p>
            <p className="header">Less picked player</p>
            <Figure className="highlighted-player">
                <Figure.Image
                    roundedCircle
                    src={profilePic}
                    width={100}
                    className="player-picture"
                >
                </Figure.Image>
                <Figure.Caption className="player-percentage">
                    75%
                </Figure.Caption>
            </Figure>
            <Figure className="highlighted-player">
                <Figure.Image
                    roundedCircle
                    src={profilePic}
                    width={100}
                    className="player-picture"
                >
                </Figure.Image>
                <Figure.Caption className="player-percentage">
                    25%
                </Figure.Caption>
            </Figure>
        </div>
    )
}

export default HighlightedPlayers