import PokemonCard from "./components/PokemonCard"
import Toto from "./components/test"
function App(){
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  let pokemon = pokemonList[0]
  let tata = [
    {
      name : "toto",
      age: 45
    },{
      name: "jesus",
      age: 56
    }
  ]
  let tom = "coucou"
  return(
<div>
  <PokemonCard pokemon = {pokemon}/>

  <Toto cedric = {tata}/>
  
</div>

)

}







export default App