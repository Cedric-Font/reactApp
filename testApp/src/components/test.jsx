import { Fragment } from "react";

export default function Toto(props){
   /* let test = ""
    let tab = ""
    if(props.jermy){
         test = <p>{props.jeremy}</p>
    }else{
         test = ""
         tab = ""
         let porte = props.cedric
        porte.forEach(element => {
            tab += element.name
            tab += element.age
            
        });

    }*/
 let tab = ""
    console.log(props.cedric)

    props.cedric.forEach((element) => {
        console.log(element)
    })
    
    console.log(tab)
   
    return(
        <Fragment>
            <p>{props.cedric[1].name}</p>
        
            

            
        </Fragment>
    )
}