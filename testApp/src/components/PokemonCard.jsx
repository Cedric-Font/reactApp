function PokemonCard(props){
return (
<div>
<figure>
    {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name}/> : <p>???</p> }
    <img src={props.pokemon.imgSrc} alt="" /> 
    <figcaption>{props.pokemon.name}</figcaption>
    
    </figure>
    </div>)
     ;}

    



    export default PokemonCard; 