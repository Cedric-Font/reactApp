import { Fragment } from "react";

export default function Toto(props){
    const test = "jhbzejhb"
    const toto = false;

   /* let test = ""
    let tab = ""

    if(props.jeremy){
         test = <p>{props.jeremy}</p>
    }else{
         test = ""
         tab = ""
         let porte = props.cedric
        porte.forEach(element => {
            tab += element.name
            tab += element.age
            
        });

    }
 let tab = ""
    console.log(props.cedric)

    props.cedric.forEach((element) => {
        console.log(element)
    })
    
    console.log(tab) */
   
    return(
        <>
        { toto && (
            <h1>{test ? test : "rien"}</h1>
        )

        }
        
        </>
    )
} 