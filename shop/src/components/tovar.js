import React from "react";
import './tovar.scss'

export default class Tovar extends React.Component{
    constructor(props){
        super()

        
    }
    
    render(props) {        
        return (
            <>
               <tr className="tovar" onClick={props.onClick} style={{"backgroundColor":'none'}}>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td><img src={props.imageUrl}/></td>
                <td>{props.quantity}</td>
                <td><button onClick={props.deleteFunction}>Delete</button></td>
               </tr>
                   
            </>
        )
    }
  }