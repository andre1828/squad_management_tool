import React, { useContext } from 'react'
import axios from 'axios'
import { PlayersContext } from './playersContext.js'

axios.defaults.baseURL = 'https://allsportsapi.com/api/football/'
const apiKey = '58815e6e6bffb2568f5c920985dbd68f7ce1ca32a942fffb9b332aef47a99a97'

let fetchData = true
let teams = []

async function getTeams() {

    if (fetchData) {
        const response = await axios
            .get('?&met=Teams&leagueId=195&APIkey=' + apiKey)
            .catch(error => console.log(error))
        teams = response.data.result
        fetchData = false
    }

    return teams
}

const calculateAverageAge = () => {
    teams.forEach(team => {
        const ageSum = team.players
            .map(player => parseInt(player.player_age))
            .reduce((accumulator, age) => accumulator + age)
        const teamAverageAge = ageSum / team.players.length
        team.team_average_age = parseFloat(teamAverageAge.toFixed(1))
    })
}

const getHightestAverageAge = () => {

    calculateAverageAge()

    let hightestAverageAge = teams
    hightestAverageAge.sort((a, b) => a.team_average_age - b.team_average_age)
    hightestAverageAge.reverse()
    hightestAverageAge = hightestAverageAge.slice(0, hightestAverageAge.length / 2)
    return hightestAverageAge
}

const getLowestAverageAge = () => {

    calculateAverageAge()

    let lowestAverageAge = teams
    lowestAverageAge.sort((a, b) => a.team_average_age - b.team_average_age)
    return lowestAverageAge.slice(0, Math.ceil(lowestAverageAge.length / 2))
}

export const TeamsContext = React.createContext([getTeams, getHightestAverageAge, getLowestAverageAge])