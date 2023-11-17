const {Component} = require('react')


export default class DoubleButton extends Component{
    render(props){

        let comp = this.props.children
        
        // this.props.colors.map(i=> comp = <div style={{border:`2px solid ${i}`}}>
            
        //     {comp}
            
        // </div>)
        
        return(
            <div>
                <input type='button' onClick={()=>this.props.cbPressed(this.props.caption1)} value={this.props.caption1}/>
                {comp}
                <input type='button' onClick={()=>this.props.cbPressed(this.props.caption2)} value={this.props.caption2}/>

            </div>
        )
    }
} 