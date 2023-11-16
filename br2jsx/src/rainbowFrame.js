const {Component, Children} = require('react')


export default class RainbowFrame extends Component{
   

    render(props){

        let comp = this.props.children
        this.props.colors.map(i=> comp = <div style={{border:`2px solid ${i}`}}>{comp}</div>)
        return(
            <>
                {comp}
            </>
        )
    }
}