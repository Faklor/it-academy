const {Component} = require('react')

const Hoc = (colors)=> (Companent)=>{
    return class HOC extends Component{
     
        render(){
            let a = <Companent {...this.props}/>
           colors.forEach(i=>{ 
                a = <div style={{border:`2px solid ${i}`}}>
                    {a}
                </div>
            })

            return a
        }

        
    }
    
}


export default Hoc
