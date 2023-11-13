import './filter.scss'
const {Component, createRef} = require('react')


export default class Filter extends Component{
    constructor(props){
        super()
        
        this.checkedRef = createRef()
        this.inputRef = createRef()

        this.state = {
            musWords: props.mus
        }
        this.sortMus = this.sortMus.bind(this)
        this.inputMus = this.inputMus.bind(this)
        this.clearFunction = this.clearFunction.bind(this)
       
    }
    sortMus(props){
        if(props.target.checked){
            this.setState({musWords:this.state.musWords.toSorted()})
        }
        else{
            this.setState({musWords:  this.props.mus})
        } 
    }
    inputMus(props){
       this.state.musWords.map(i=>{
            if(props.target.value === ''){
                this.setState({musWords: this.props.mus})
                console.log('null')
            }
            else{
                if(i.includes(props.target.value)){
                    this.setState({musWords: this.state.musWords.filter((i)=>{return i.includes(props.target.value)})})
                   
                }
            }
            
       })

    }
    clearFunction(props){
        this.setState({musWords: this.props.mus})
        //console.log()
        this.checkedRef.current.checked = false
        this.inputRef.current.value = ''
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
                    <input type='checkbox' onChange={this.sortMus} ref={this.checkedRef}/>
                    <input onInput={this.inputMus} ref={this.inputRef}/>
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