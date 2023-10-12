import { Fragment } from "react"
export default function NavBar(props){



    let next = ""
    let preview = ""
    
    
    if(props.pokemonIndex === 0){
        next = <button onClick={props.increment}>next</button>
    }else if (props.pokemonIndex > 0 && props.pokemonIndex < props.nbrPokemon -1){
        preview = <button onClick={props.decrement}>preview</button>
        next = <button onClick={props.increment}>next</button>
    }else if(props.pokemonIndex === props.nbrPokemon -1 ){
        console.log(`${props.pokemonIndex} coucou ${props.nbrPokemon}`)
        preview = <button onClick={props.decrement}>preview</button>
        next = ""
    }
    return(
        
        <>{next}
        {preview}
        </>
        
        

    )
}