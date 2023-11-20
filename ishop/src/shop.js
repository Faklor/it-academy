import Product from './product'
import data from './res/data.json'
import './shop.scss'
const {Component, createRef} = require('react')



export default class Shop extends Component{
    constructor(){
        super()

       

        this.state = {
            
            products:data.Tovars,
            activeProduct:''
        }

    }
    setActiveProduct = (focusElement)=>{
        this.setState({activeProduct : focusElement})
       
    }
    setBackColor = (focusElement)=>{
        
        if (this.state.activeProduct === focusElement) {
            return 'red'
        }
        return ''
    }
    setDeleteProduct = (element)=>{
        this.setState({products: this.state.products.toSpliced(element, 1)})
    }
    

    
    render(){

        //console.log(this.tovarRef)
        //===========================================================================
        const prod = this.state.products.map((i,index)=>{
            return  <Product
                
                key = {index}
                name = {i.name}
                price = {i.price}
                imageUrl = {i.url}
                quantity = {i.quantity}
                buttoEvent = {this.setDeleteProduct.bind(this, index)}
                setActiveProduct = {this.setActiveProduct.bind(this, index)}
                backColor = {this.setBackColor(index)}
            />
        })
        //===========================================================================

        return(
            <>
             <h1>Product Shop</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Control</th>
                    </tr>
                    </thead>
                    <tbody>
                    {prod}
                    </tbody>
                </table>
            </>
        )
    }
}