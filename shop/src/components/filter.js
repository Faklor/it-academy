import React from "react"
import './filter.scss'


export default class Filter extends React.Component{


    render(props){

        let word = props.words.map((i,key)=>{
            return <ul key={key}>
                <li>{i}</li>
            </ul>
        })

        function sortMusCheck(propsIn){
            
            if(propsIn.target.checked){
                props.setWords(props.words.toSorted())
                
            }
            else{
               //props.setWords(props.musWords)
               //обработать 
               if(document.querySelector('#in2').value === ''){
                props.setWords(props.musWords)
               }
               else{
                props.setWords(props.words.toSorted())
               }
                
            }
        }

        function sortMus(propsInput){
            //console.log(propsInput.target.value)
            function isMyFavoriteHobby(el) { return el.startsWith(propsInput.target.value) }


            if(propsInput.target.value  === ''){
                props.setWords(props.musWords)
                //console.log(props.words)
            }
            else{
                
                props.setWords(props.words.filter(isMyFavoriteHobby))

                //props.setWords([])
                //console.log(props.words)
            }
        }

        function  clear(){
            document.querySelector('#in1').checked = false
            document.querySelector('#in2').value= ''
            props.setWords(props.musWords)
        }

        return(
            <>
                <div className="filter">
                    <input id="in1" type="checkbox" onChange={sortMusCheck}/>
                    <input id="in2" onInput={sortMus}/>
                    <button onClick={clear}>Clear</button>
                </div>
                <div className="words">
                    
                    {word}
                    
                </div>
            </>
        )
    }
}