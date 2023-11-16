import './App.css'
import BR2JSX from './br2jsx'

function App() {

  let text="первый<br>второй<br/>третий<br />последний"

  return (
    <div className="App">
      <BR2JSX text={text}/>
    </div>
  );
}

export default App
 