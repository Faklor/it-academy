import './filter.scss'
const {Component, createRef} = require('react')


export default class Filter extends Component{
    constructor(props){
        super()
        

        this.state = {
            musWords: props.mus,
            val:'',
            check:false
        }
       
    }
    sortMus = ()=>{
        this.setState({check: true})
        if(this.state.check){
            this.setState({check: false})
        }

        if(!this.state.check){
            this.setState({musWords:this.state.musWords.toSorted()})
        }
        else{
            this.setState({musWords:  this.props.mus})
        } 
    }
    inputMus=(props)=>{
        //---------------------------------------
        this.setState({val:props.target.value})
        //---------------------------------------
        this.state.musWords.map(i=>{
            if(this.state.val === ''){
                this.setState({musWords: this.props.mus})
                
                console.log('null')
            }
            else{
                if(i.includes(this.state.val)){
                    this.setState({musWords: this.state.musWords.filter((i)=>{return i.includes(this.state.val)})})
                   
                }
            }
            
         })

    }
    clearFunction=()=>{
        this.setState({musWords: this.props.mus})
        this.setState({check: false})
        this.setState({val:''})
    }

    render(){
        //==================================================================
        
        //==================================================================
        const rendWords = this.state.musWords.map((i,key) =>{
            return <ul key={key}>
                <li>{i}</li>
            </ul>
        })
        //==================================================================
        return(
            <>
                <div className='filter'>
                    <input type='checkbox' onChange={this.sortMus} checked={this.state.check}/>
                    <input onInput={this.inputMus} value={this.state.val}/>
                    <button onClick={this.clearFunction}>Clear</button>
                    <div>
                        
                        {rendWords}
                        
                    </div>
                    
                </div>
            </>
        )
        //==================================================================
    }
}