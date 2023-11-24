import React, {useState, useEffect, memo} from "react"
import './Filter.css'

function Filter(props){

    //===========state====================
    const [arraY, setArraY]  = useState(props.arraY)
    let [inputText, setInputText]  = useState()
    let [checked, setChecked]  = useState(false)
    //====================================
    
    useEffect(()=>{
       
        sortArr()
         
    },[inputText, checked])
    //====================================
    const sortArr= async()=> {
        let arrModif = props.arraY.slice()
        
        
        if (checked){
            arrModif.sort()
        }
        if (inputText) {
            arrModif = arrModif.filter(item => item.includes(inputText))
        } 
        setArraY(arrModif)
        
    }

    const clean= ()=> {
        
        setInputText('')
        setChecked(false)
        setArraY(arraY)
        
    }
    //====================================

    let arr = arraY.map((item, index) =>{return <p key={index}>{item}</p>})
    
    return(
        <>
            <div>
                <input type='checkbox' checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
                <input type='text' value={inputText || ''} onChange={(e)=>setInputText(e.target.value)} />
                <input type='button' value='clean' onClick={()=>clean()}/>
            </div>
            <div className="FilterArr">
                {arr}
            </div>
        
        </>
    )
}

export default memo(Filter)