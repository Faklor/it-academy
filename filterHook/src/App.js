import './App.css'
import FilterHook from './filterhook'

function App() {

  const arraY = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate']

  return (
    <div className="App">
      <FilterHook arraY={arraY}/>
    </div>
  );
}

export default App
 