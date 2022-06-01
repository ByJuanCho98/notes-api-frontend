import './App.css';
import Mensaje from './components/mensaje.js';

function App() {
  return (
    <div className="App">
      {<Mensaje color= 'red' text='componente'/>}
    </div>
  );
}

export default App;
