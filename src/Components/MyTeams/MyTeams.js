import MaterialTable from 'material-table'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from 'react'
import { TeamContext } from './../../teamContext'
import { useHistory } from 'react-router-dom'

function MyTeams(props) {

    const history = useHistory()

    return (
        <Card>
            <Card.Header>My Teams <Button onClick={() => history.push('/create-team')}>+</Button> </Card.Header>
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
                        props.teams.map(team => {
                            return { Name: team.team_name, Description: team.team_name + " Squad" }
                        })
                    }
                />
            </Card.Body>
        </Card>
    )
}

export default MyTeams