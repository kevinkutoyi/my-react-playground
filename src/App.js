import Header from './Components/Header';
import Button from './Components/Button';
import './App.css';


function App() {
  return (
    <div className="App">

    < Header/>
    <Button title='Hello 1' color='yellow'/>
    <Button title='Hello 2' color='green'/>
    <Button title='Hello 3' color='blues'/>
    </div>
  );
}

export default App;
