import { Fragment } from "react"
import { useState } from "react";
export default function NavBar(props) {


    const handleChange = (id) => {
        props.setpokemonIndex(id)
    }



    return (

        <>
            {props.pokemonList.map((pokemon) => (

                <button key={pokemon.key} onClick={() => handleChange(pokemon.key)} > {pokemon.name} </button>
            )

            )
            }
        </>



    )
}