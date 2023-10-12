import PropTypes from "prop-types";

function PokemonCard(props){
  

  
  return (
    
    <div>
      <figure>
        {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name}/> : <p>???</p> }
          
         <figcaption>{props.pokemon.name}</figcaption>
    
      </figure>
    </div>)
;}

PokemonCard.propTypes ={
  pokemon: PropTypes.shape({
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
  })
}





    export default PokemonCard; 