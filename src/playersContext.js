import React from 'react'

const playerPickCount = new Map()

const mostPickedPlayer = () => {}

const lessPickedPlayer = () => {}

const registerNewPicks = (teams) => {console.log(teams);}


export const PlayersContext = React.createContext([mostPickedPlayer, lessPickedPlayer, registerNewPicks])