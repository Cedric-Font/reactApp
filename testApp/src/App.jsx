import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import Toto from "./components/test"
import Button from "./button"
import NavBar from "./components/navBar";
function App() {
  const pokemonList = [
    {
      key: 10,
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      key: 11,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      key: 12,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      key: 13,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    }
  ];

 let pokemon = pokemonList
  


  const [pokemonIndex, setpokemonIndex] = useState(0)

  

  return (

    <div>
      <NavBar pokemonIndex={pokemonIndex} pokemonList={pokemonList} setpokemonIndex={setpokemonIndex} />
      <PokemonCard pokemon = {pokemon[pokemonIndex]} />
    </div>

  )

}







export default App