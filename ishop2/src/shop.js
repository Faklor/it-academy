import Product from './product'
import CardProduct from './cardProduct'
import FormNewProduct from './formNewProduct'
import FormEdit from './formEdit'
import data from './res/data.json'
import './shop.scss'
const {Component, createRef} = require('react')



export default class Shop extends Component{
    constructor(){
        super()

       this.cardRef =  createRef()

        this.state = {
            
            products:data.Tovars,
            activeProduct:null,
            //====================
            visible:false,
            card:{},
            //====================
            visibleAdd:false,
            newProduct:{
                name:String,
                price:Number,
                url:String,
                quantity:Number
            },
            //=====================
            visibleEdit:false,


        }

    }
    //========================================================================================================================
    setActiveProduct = (focusElement, information)=>{
       
        if(this.state.activeProduct === focusElement){
            this.setState({activeProduct : null})
            this.setState({visible : false})

        }
        else{
            this.setState({activeProduct : focusElement})
            this.setState({visible : true})

        }
        
        this.setState({card: information})
       
    }
    setBackColor = (focusElement)=>{
        
        if (this.state.activeProduct === focusElement) {
            return 'red'
        }
        return ''
    }
    setVisibleCard = ()=>{

        if(this.state.visible){
            return <CardProduct {...this.state.card} ref={this.cardRef}/>
        }
        
        return <></>
        
    }
    //========================================================================================================================
    setDeleteProduct = (element)=>{
        this.setState({products: this.state.products.toSpliced(element, 1)})
       
        //alert('Delete this product?')
        
        
        
    }
    //========================================================================================================================
    setVisibleAdd = ()=>{
        if(this.state.visibleAdd){
            this.setState({visibleAdd:false})
        }
        else{
            this.setState({visibleAdd:true})
        }
        
    }
    addNewProduct = ()=>{
        if(this.state.visibleAdd){
            return <FormNewProduct setVisibleAdd = {this.setVisibleAdd} newProduct = {this.state.newProduct}  addProduct={this.addProduct}/>
        }
        
        return <></>
    }
    addProduct =()=>{
        //console.log(this.state.newProduct)
        this.setState({products: this.state.products.toSpliced(0,0,this.state.newProduct)})

    }
    //========================================================================================================================
    setVisibleEditForm = ()=>{
        if(this.state.visibleEdit){
            this.setState({visibleEdit:false})
        }
        else{
            this.setState({visibleEdit:true})
        }
        //console.log()
    }
    visibleEditForm=()=>{
        if(this.state.visibleEdit){
            
            return <FormEdit 
                setVisibleEditForm={this.setVisibleEditForm} 
                setProduct={this.state.products[Number(this.state.activeProduct)]} 
                newProduct = {this.state.newProduct} 
                editProduct={this.editProduct}
            />
        }
        
        return <></>
    }
    editProduct=()=>{
        this.setState({products: this.state.products.toSpliced(Number(this.state.activeProduct),1,this.state.newProduct)})
    }
    //========================================================================================================================
    

    
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
                setActiveProduct = {this.setActiveProduct.bind(this, index, i)}
                setVisibleEditForm = {this.setVisibleEditForm}
                backColor = {this.setBackColor(index)}
            />
        })
        //===========================================================================

        return(
            <>
             <h1>Product Shop</h1>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Control</th>
                    </tr>
                    {prod}
                   
                </table>
                <button onClick={this.setVisibleAdd}>Add new product</button>
                {this.setVisibleCard()}
                {this.addNewProduct()}
                {this.visibleEditForm()}
            </>
        )
    }
}