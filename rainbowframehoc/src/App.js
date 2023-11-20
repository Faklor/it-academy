import './App.css'
import DoubleButton from './DoubleButton'
import hoc from './withRainbowFrame'



function App() {

  let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple']

  let FramedDoubleButton=hoc(colors)(DoubleButton)

  return (
    <div className="App">
      <DoubleButton caption1 ={'однажды'} caption2={'пору'} cbPressed={num=>{return alert(num)} }>
        в студеную зимнюю
      </DoubleButton>
      <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>
        вышел, был сильный
      </FramedDoubleButton>
    </div>
  );
}

export default App
