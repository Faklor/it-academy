import { Component, createRef } from 'react'
import './App.css'
import Client from './components/Client'
import users from './users.json'
import {List, get, setIn, getIn} from 'immutable'
import MultiRef from 'react-multi-ref'

export default class App extends Component{
  constructor(){
    super()
    
    const mus = users.Users
    const clients = mus.map(client=>{
      if(client.balance < 0){
        client = {...client, status:'blocked'}
      }
      else{
        client = {...client, status:'active'}
      }
      return client
    })
    this.arr = ['fuck']
  
    this.state = {
      
      clients:clients,
      oldClients:[],
      addActive:false
    }

    this.state.oldClients = clients
    console.log(clients)

  }
  //=======================================================================
  renderUsers =()=>{
  }
  renderActiveUsers =(clients)=>{
    
  }
  renderBlockedUsers =()=>{
    
  }
  //=======================================================================
  renderStatus = ()=>{
  }
  //=======================================================================
  edit = (childRefs) =>{
    const defaultValues = []
    const values = []
    childRefs.map.forEach(input=>{
      defaultValues.push(input.defaultValue)
      values.push(input.value)
        
    })
    
    if(defaultValues.length !== 0){
      const index = this.state.clients.findIndex(i=>i.name === defaultValues[1])
      this.setState({client:this.state.clients[index].name = values[1]})
      
    }
    //----------------------?---------------------------------------
    if(this.state.clients === this.state.oldClients){
      console.log('массив не изменился')
    }
    else{
      console.log('массив изменился')
    }
    console.log(this.state.clients === this.state.oldClients)
    console.log(this.arr)
    
  }
  //=======================================================================
  getAddClient= ()=>{
    if(this.state.addActive){
      return <Client/>
    }
    return <button onClick={this.getAdd}>Добавить клиента</button>
  }
  getAdd =()=>{
    this.setState({addActive:true})
  }

  render(){


    return(
      
      <div className='App'>
        <header>
          <nav>
            <button onClick={this.renderUsers}>Все</button>
            <button onClick={this.renderActiveUsers}>Активаные</button>
            <button onClick={this.renderBlockedUsers}>Заблокированные</button>
          </nav>
        </header>

        <table>
          <thead>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Баланс</th>
            <th>Статус</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
          </thead>
          <tbody>
            
            {this.state.clients.map((client, key)=>{
              return  <Client {...client} key={key}  edit={this.edit} />
            })}
          </tbody>
        </table>
        {this.getAddClient()}
      </div>
    )
  }


}