import React, { useContext } from 'react'
import { teamsContext } from './teamsContext.js'

const playerPickCount = new Map()

function PlayersContext() {

    const [getTeams] = useContext(teamsContext)()

    const mostPickedPlayer = async () => {
        const teams = await getTeams()
        console.log('teams: ', teams);
    }

    const lessPickedPlayer = () => { }

    const registerNewPicks = (teams) => { console.log(teams); }

}

export const playersContext = React.createContext(PlayersContext)