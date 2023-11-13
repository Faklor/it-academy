import './App.css';
import Filter from './filter'

function App() {
  
  const mus = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate']

  return (
    <div className="App">
      <Filter mus={mus}/>
    </div>
  );
}

export default App;
