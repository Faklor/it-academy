import './Filter.css'
const {Component} = require('react')


export default class Filter extends Component{

    
    constructor(props){
        super()

        this.state={
            arraY: props.arraY,
            inputString: "",
            checkboxChecked: false
        }
    }

    sortArr= ()=> {
        let arrModif = this.props.arraY.slice()

        if (this.state.inputString) {
            arrModif = arrModif.filter(item => item.includes(this.state.inputString))
        }
        if (this.state.checkboxChecked)
            arrModif.sort()
        this.setState({ arraY: arrModif })
    }

    changeCheckbox= ()=> {
        this.setState(({ checkboxChecked: !this.state.checkboxChecked }), this.sortArr)

    }
    searchString= (e)=> {
        this.setState({ inputString: e.target.value }, this.sortArr)
    }
    clean= ()=> {
        this.setState({ inputString: '', arraY: this.state.arraY, checkboxChecked: false, }, this.sortArr)
    }

    render(props){
       
        let arr = this.state.arraY.map((item, index) =>{return <p key={index}>{item}</p>})

        return (
        <>
            <div>
                <input type='checkbox' onClick={this.changeCheckbox} checked={this.state.checkboxChecked}/>
                <input type='text' onChange={this.searchString} value={this.state.inputString}/>
                <input type='button' value='clean' onClick={this.clean}/>
            </div>
            <div className='FilterArr'>
                {arr}
            </div>
        </>
        )
        
            

        
    }
}