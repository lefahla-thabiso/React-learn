import logo from './logo.svg';
import './App.css';
import Welcome from '../src/components/Welcome'
import Hello from '../src/components/Hello'
import Greet from './components/Greet';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      {/* <ParentComponent/> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <Message/> */}

      {/* <Greet  batho ="TSENTLE" akaName="Nthako">
        <p>
           THIS IS CHILDREN
        </p>

      </Greet>
      <Greet batho ="lefahla" akaName="Labo">
        <button>button</button>
      </Greet>
      <Greet batho ="Thabiso" akaName="superman"/>

      <Welcome  batho ="TSENTLE" akaName="Nthako"/>
      <Welcome batho ="lefahla" akaName="Labo"/> */}

    </div>
  );
}

export default App;
