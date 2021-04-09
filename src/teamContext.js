import React from "react"
import axios from 'axios'

axios.defaults.baseURL = 'https://allsportsapi.com/api/football/'
const apiKey = '58815e6e6bffb2568f5c920985dbd68f7ce1ca32a942fffb9b332aef47a99a97'

export const addTeams = (teams, newTeams) => {
    return [...teams, ...newTeams]
}

export const fetchTeams = async () => {

    const response = await axios
        .get('?&met=Teams&leagueId=195&APIkey=' + apiKey)
        .catch(error => console.error(error))

    if (response?.data?.result) {
        return response.data.result
    } else {
        return []
    }
}

const calculateAverageAge = (teams) => {
    teams.forEach(team => {
        const ageSum = team.players
            .map(player => parseInt(player.player_age))
            .reduce((accumulator, age) => accumulator + age)
        const teamAverageAge = ageSum / team.players.length
        team.team_average_age = parseFloat(teamAverageAge.toFixed(1))
    })
}

export const getHightestAverageAge = (teams) => {

    calculateAverageAge(teams)

    let hightestAverageAge = teams
    hightestAverageAge.sort((a, b) => a.team_average_age - b.team_average_age)
    hightestAverageAge.reverse()
    hightestAverageAge = hightestAverageAge.slice(0, hightestAverageAge.length / 2)
    return hightestAverageAge
}

export const getLowestAverageAge = (teams) => {

    calculateAverageAge(teams)

    let lowestAverageAge = teams
    lowestAverageAge.sort((a, b) => a.team_average_age - b.team_average_age)
    return lowestAverageAge.slice(0, Math.ceil(lowestAverageAge.length / 2))
}

export const TeamContext = React.createContext()