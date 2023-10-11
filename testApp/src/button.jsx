import { Fragment } from "react"
import PokemonCard from "./components/PokemonCard"

export default function Button(props){
    let next = ""
    if(props.pokemonIndex < 0){
        next = <button onClick={handleNext}>next</button>
    }else{
        next = ""
    }
    return(
        
        <>{next}
        </>
        
        

    )
}