import { Fragment } from "react"
import { useState } from "react";
export default function NavBar(props) {


    const handleChange = (id) => {
        
        props.setpokemonIndex(id)
        
    }



    return (

        <>
            {props.pokemonList.map((pokemon, index) => (

                <button key={pokemon.key} onClick={() => handleChange(index)} > {pokemon.name} </button>
            )

            )
            }
        </>



    )
}