import './App.css'
import Filter from './filter'

function App() {

  const arraY = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate']

  return (
    <div className="App">
      <Filter arraY={arraY}/>
    </div>
  );
}

export default App
 