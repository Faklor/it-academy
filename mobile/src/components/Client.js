import MultiRef from 'react-multi-ref'
const {PureComponent,  createRef} = require('react')


export default class Client extends PureComponent{
    constructor(){
        super()
        this.arrayRefs = new MultiRef()

        this.lineRef = createRef()
        //this.inputRef = createRef()

        this.state = {
            
            inputCheck:false,
        }
    }
    //=====================================================================================================
    setColor  =  ()=>{
        if(this.props.status === 'blocked'){
            return 'red'
        }

        return 'green'
    }
    //=====================================================================================================
    setInput = (value)=>{
        if(this.state.inputCheck){
            return <input defaultValue={this.props[value]} ref={this.arrayRefs.ref(value)} onInput={this.addData}/>
        }
        else{
            return this.props[value]
        } 
    }
    setCheck= () =>{
        
        if(this.state.inputCheck){
            this.setState({inputCheck: false})
        }
        else{
            this.setState({inputCheck: true})
        }
        
    }
    addData = ()=>{
        
        this.props.edit(this.arrayRefs)
    } 
    //=====================================================================================================
    deleteLine = ()=>{
        this.lineRef.current.remove()
    }

    render(props){
        //console.log(this.props)
       
        return(
            <>
             <tr className="tovar" ref={this.lineRef}>
                <td>{this.setInput('family')}</td>
                <td>{this.setInput('name')}</td>
                <td>{this.setInput('secondName')}</td>
                <td>{this.setInput('balance')}</td>
                <td style={{backgroundColor:this.setColor(), padding: '1em 2em'}}>{this.props.status}</td>
                <td><button onClick={this.setCheck}>Редактировать</button></td>
                <td><button onClick={this.deleteLine}>Удалить</button></td>
               </tr>
            
            </>
        ) 
    }
} 