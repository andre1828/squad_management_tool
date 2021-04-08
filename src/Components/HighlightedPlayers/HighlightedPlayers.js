import Card from "react-bootstrap/Card"

function HighlightedPlayers() {
    return (
        <Card>
            <Card.Body>

                <div>
                    <p>Most picked player</p>
                    <p>percentage: { }</p>
                </div>
                <div>
                    <p>Less picked player</p>
                    <p>percentage: { }</p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default HighlightedPlayers