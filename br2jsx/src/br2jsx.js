const {Component, Children} = require('react')


export default class br2jsx extends Component{
   

    render(props){
        const a = []
        // this.props.text.replace(/(&lt;|<)br\s*\/?(&gt;|>)/g, ',').split(',').map(i=>{
        //     a.push(i)
        //     if(i){
        //         a.push(<br/>)    
        //     }
        //     // return  <>
        //     //     {i}
        //     //     <br/>
        //     // </>
        // })
        this.props.text.split(/<br *\/?>/).forEach((element, key) => {
            if(key){
                a.push(<br key={key}/>)
            }
            a.push(element)
            
        });
        

        return(
            <>
                {a}

            </>
        )
    }
}