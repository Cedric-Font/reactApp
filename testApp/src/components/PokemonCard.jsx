function PokemonCard(){
    let pokemon = pokemonList[1]
return (
<div>
<figure>
    {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p> }
    <img src={pokemon.imgSrc} alt="" /> 
    <figcaption>{pokemon.name}</figcaption>
    
    </figure>
    </div>)
     ;}

    

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


    export default PokemonCard; 