const {Component, createRef} = require('react')

export default class FormEdit extends Component{
    constructor(props){
        super(props)

        this.nameRef = createRef()
        this.priceRef = createRef()
        this.quantityRef = createRef()
        this.urlRef = createRef()

        this.state={
            name:'',
            price:'',
            url:'',
            quantity:'',
            disabled:true
        }
        
        

        //console.log(this.nameRef)
        //добавить изначальное сотосяние продукта
        //кнопка редактирования через toSpliced
        //commit this
    }
    setName = (e)=>{
        

        if(/^[a-z ,.'-]+$/i.test(e.target.value)){
            this.setState({name:'ok'})
        }
        else if(!e.target.value){
            this.setState({name:null})
        }
        else{
            this.setState({name:'this line must contain only words'})

        }

        if(this.state.name === 'ok' & this.state.price === 'ok'  & this.state.url === 'ok' & this.state.quantity === 'ok' ){
            this.setState({disabled:false})
        }
        else{
            this.setState({disabled:true})
        }
    }
    setPrice = (e)=>{
        
        if(/[1-9]+$/g.test(e.target.value)){
            this.setState({price:'ok'})
        }
        else if(!e.target.value){
            this.setState({price:null})
        }
        else{
            this.setState({price:'this line must contain only numbers'})

        }
        
        if(this.state.name === 'ok' & this.state.price === 'ok'  & this.state.url === 'ok' & this.state.quantity === 'ok' ){
            this.setState({disabled:false})
        }
        else{
            this.setState({disabled:true})
        }
    }
    setUrl = (e)=>{
        if(/(https?:\/\/.*\.(?:png|jpg))/i.test(e.target.value)){
            this.setState({url:'ok'})
        }
        else if(!e.target.value){
            this.setState({url:null})
        }
        else{
            this.setState({url:'this line must contain only url of image(ex: https://image.com/image.jpg)'})

        }
        
        if(this.state.name === 'ok' & this.state.price === 'ok'  & this.state.url === 'ok' & this.state.quantity === 'ok' ){
            this.setState({disabled:false})
        }
        else{
            this.setState({disabled:true})
        }
    }
    setQuantity = (e)=>{
        if(/[1-9]+$/g.test(e.target.value)){
            this.setState({quantity:'ok'})
        }
        else if(!e.target.value){
            this.setState({quantity:null})
        }
        else{
            this.setState({quantity:'this line must contain only numbers'})

        }

        if(this.state.name === 'ok' & this.state.price === 'ok'  & this.state.url === 'ok' & this.state.quantity === 'ok' ){
            this.setState({disabled:false})
        }
        else{
            this.setState({disabled:true})
        }
    }
    addDataProduct = ()=>{
        //console.log(this.props)
        
        this.props.newProduct.name = this.nameRef.current.value
        this.props.newProduct.price = this.priceRef.current.value
        this.props.newProduct.url = this.urlRef.current.value
        this.props.newProduct.quantity = this.quantityRef.current.value

        this.props.editProduct()
    }
   

    render(){
        
        

        return(
            <div className="editProduct">
            <h1>Edit this Product</h1>
            
             <h2>Name:</h2>
             <input onInput={this.setName} ref={this.nameRef} defaultValue={this.props.setProduct.name}/>
             <p>{this.state.name}</p>
            
             <h2>Price:</h2>
             <input onInput={this.setPrice}  ref={this.priceRef} defaultValue={this.props.setProduct.price}/>
             <p>{this.state.price}</p>
             
             <h3>Url:</h3>
             <input onInput={this.setUrl} ref={this.urlRef} defaultValue={this.props.setProduct.url}/>
             <p>{this.state.url}</p>

             <h4>Quantity:</h4>
             <input onInput={this.setQuantity} ref={this.quantityRef} defaultValue={this.props.setProduct.quantity}/>
             <p>{this.state.quantity}</p>
            
            
             <button onClick={this.addDataProduct} disabled={this.state.disabled}>Add</button>
             <button onClick={this.props.setVisibleEditForm}>Cancel</button>
              
         </div>
        )
        
    }
}