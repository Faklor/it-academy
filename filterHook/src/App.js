import './App.css'
import Filter from './components/Filter'

function App() {

  const arraY = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate']

  return (
    <div className="App">
      <Filter words={arraY}/>
    </div>
  );
}

export default App
 