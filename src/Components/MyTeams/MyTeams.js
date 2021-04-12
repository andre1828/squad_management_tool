import './MyTeams.scss'
import MaterialTable from 'material-table'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import { Paper } from '@material-ui/core'

function MyTeams(props) {

    const history = useHistory()

    return (
        <>
            <Card className="my-teams">
                <Card.Header className="header-action">
                    My Teams
                <Button className="btn-create-team" onClick={() => history.push('/create-team')}></Button>
                </Card.Header>
                <Card.Body>
                    <MaterialTable

                        components={{
                            Container: props => <Paper {...props} elevation={0} />
                        }}
                        options={
                            { showTitle: false, search: false, paging: false, toolbar: false, actionsColumnIndex: -1 }
                        }
                        columns={[
                            { title: "Name", field: "Name" },
                            { title: "Description", field: "Description" }
                        ]}

                        data={
                            props.teams.map(team => {
                                return { Name: team.team_name, Description: team.team_name + " Squad" }
                            })
                        }

                        body={{
                            emptyDataSourceMessage: "Nenhum time registrado"
                        }}
                    />
                </Card.Body>
            </Card>
        </>
    )
}

export default MyTeams