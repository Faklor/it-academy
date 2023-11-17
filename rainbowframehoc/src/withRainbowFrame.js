const {Component} = require('react')

export default function Hoc(NewCompanent){
    return class HOC extends Component{
        static getDerivedStateFromProps(nextProps){
            
            //console.log(this.props)
            console.log(nextProps)
            
        }

        

        render(){
            let a = <NewCompanent {...this.props}/>
            this.props.colors.map(i=>{ 
                a = <div style={{border:`2px solid ${i}`}}>
                    {a}
                </div>
            })

            return a
        }

        
    }
    
}

