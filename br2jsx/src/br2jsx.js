const {Component, Children} = require('react')


export default class br2jsx extends Component{
   

    render(props){
        const a = []
        this.props.text.replace(/(&lt;|<)br\s*\/?(&gt;|>)/g, ',').split(',').map(i=>{
            a.push(i)
            if(i){
                a.push(<br/>)    
            }
            // return  <>
            //     {i}
            //     <br/>
            // </>
        })


        return(
            <>
                {a}

            </>
        )
    }
}