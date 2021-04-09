import MaterialTable from 'material-table'
import Card from 'react-bootstrap/Card'
import { useContext, useEffect, useState } from 'react'
import { TeamContext } from './../../teamContext'

function MyTeams() {

    const { teams } = useContext(TeamContext)

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