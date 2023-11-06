import './App.css'
import React,{useEffect, useState} from 'react'
import Products from './components/products'
import tovars from './res/data.json'


export default function Shop() {
  //========================task 1========================
  const [tovar, deleteTovars] = useState(tovars.Tovars)
  //======================================================
  //========================task 2========================
  const musWords = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate']
  const [words, setWords] = useState(musWords)
  const [search, setSearch] = useState('')
  //======================================================
  const products = new Products()
  const Product = products.render


  //console.log(color)
  useEffect(()=>{
    //document.querySelectorAll('.tovar')[0].style.color =  'red'
  })
  return (
    <main className="main">
      <Product tovar={tovar} delete={deleteTovars}words={words} setWords={setWords} musWords={musWords}/>
      
    </main>
  )
  
}


