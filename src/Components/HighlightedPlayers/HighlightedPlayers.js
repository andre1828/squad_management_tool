import profilePic from './profile-pic.png'
import './HighlightedPlayers.scss'

function HighlightedPlayers() {
    return (
        <div className="highlighted-players">
            <div className="highlighted-player most-picked">
                <h3 className="subtitle" >Most picked player</h3>
                <img src={profilePic} alt="avatar icon" className="player-picture" />
                <p className="player-percentage">75%</p>
            </div>
            <div className="highlighted-player">
                <h3 className="subtitle">Less picked player</h3>
                <img src={profilePic} alt="avatar icon" className="player-picture" />
                <p className="player-percentage">25%</p>
            </div>
        </div>
    )
}

export default HighlightedPlayers