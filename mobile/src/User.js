const {Component} = require('react')


export default class User extends Component{
    render(props){
 
        return(
            <>
             <tr className="tovar" >
                <td>fip</td>
                <td>name</td>
                <td>last</td>
                <td>balance</td>
                <td>status</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
               </tr>
            
            </>
        )
    }
} 