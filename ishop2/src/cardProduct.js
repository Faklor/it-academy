
const {Component} = require('react')


export default class CardProduct extends Component{
 

    render(){
        return(
            <>
                <div className='card' style={{}}>
                    <img src={this.props.url}  alt='img'></img>
                    <h1>{this.props.name}</h1>
                    <h2>Quantity:{this.props.quantity}</h2>
                    <h3>Price:{this.props.price}</h3>
                    
                </div>
            </>
        )
    }
}