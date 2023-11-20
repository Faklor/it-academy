import {Component} from "react"

export default class Product extends Component{
 
    render() {  
              
        return (
            
               <tr className="tovar" onClick={this.props.setActiveProduct} style={{backgroundColor: this.props.backColor}}>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td><img src={this.props.imageUrl} alt="image"/></td>
                <td>{this.props.quantity}</td>
                <td><button onClick={this.props.buttoEvent}>Delete</button></td>
               </tr>
                   
            
        )
    }
  }