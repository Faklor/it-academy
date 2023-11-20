import { Component } from 'react'
import './App.css'
import User from './User'
import users from './users.json'
import Immutable from 'immutable'


export default class App extends Component{
  constructor(){
    super()

    this.state = {
      usersState:users.Users.map((i,index)=>{
        return <User>
  
        </User>
      })
    }

  }

  renderUsers =()=>{
   
  }

  render(){
    


    return(
      <div className='App'>
        <header>
          <nav>
            <button onClick={this.renderUsers}>Все</button>
            <button onClick={this.renderUsers}>Активаные</button>
            <button onClick={this.renderUsers}>Заблокированные</button>
          </nav>
        </header>

        <table>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Баланс</th>
            <th>Статус</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
            {this.state.usersState}
        </table>
      </div>
    )
  }


}