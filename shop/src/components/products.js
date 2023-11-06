import React from "react";

import Tovars from './tovar'
import Filter from './filter'

export default class Tovar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:true
        }
        // this.addA = this.addA.bind(this)
        //=============================not work============================
    }
    
        
    
   
    render(props) {
        const classtovars = new Tovars()
        const Tovar = classtovars.render


        const classfilter = new Filter()
        const Filte = classfilter.render

        function deleteProduct(index){
           props.delete(props.tovar.toSpliced(index,1))
           
        }

        

        let tovars = props.tovar.map((i, key)=>{
            return <Tovar 
                className="tovar" 
                key={key}
                name={i.name}
                price={i.price} 
                imageUrl={i.url}
                quantity={i.quantity}
                deleteFunction={()=>deleteProduct(key)}
                onClick = {(props)=>clickTovar(props,key)}
            />
             
         })
        function clickTovar(props,key){
           
            for(let i = 0; i<document.querySelectorAll('.tovar').length;i++){
                document.querySelectorAll('.tovar')[i].style.backgroundColor = 'rgba(0,0,0,0)'
              
            }
            document.querySelectorAll('.tovar')[key].style.backgroundColor = 'red'
        }
        
        return (
            <>
            
            <h1>Product Shop</h1>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Control</th>
                    </tr>
                     
                    {tovars}
                    
                </table>


            <Filte words={props.words} setWords={props.setWords} musWords={props.musWords}/>    
            </>
        )     
    }
  }