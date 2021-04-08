import { useContext } from "react";
import { PlayersContext } from "./playersContext";


function useRegisterPlayerPicks(teams) {

    const [registerNewPicks] = useContext(PlayersContext)
    registerNewPicks(teams)
}