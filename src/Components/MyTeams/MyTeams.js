import { TeamsContext } from './../../teamsContext.js'
import MaterialTable from 'material-table'
import Card from 'react-bootstrap/Card'
import { useContext, useEffect, useState } from 'react'

function MyTeams() {

    const [getTeams] = useContext(TeamsContext)
    const [teams, setTeams] = useState([])

    useEffect(() => {
        async function fetchTeams() {

            var result = await getTeams()
            setTeams(result)
        }

        fetchTeams()
    }, [])

    return (
        <Card>
            <Card.Header>My Teams</Card.Header>
            <Card.Body>
                <MaterialTable
                    options={
                        { showTitle: false, search: false, paging: false, toolbar: false }
                    }
                    columns={[
                        { title: "Name", field: "Name" },
                        { title: "Description", field: "Description" }
                    ]}

                    data={
                        teams.map(team => {
                            return { Name: team.team_name, Description: team.team_name + " Squad" }
                        })
                    }
                />
            </Card.Body>
        </Card>
    )
}

export default MyTeams