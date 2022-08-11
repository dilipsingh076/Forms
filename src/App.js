import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Gender from './Components/Gender';
import Marital from './Components/Marital';
// import styles from "./Components/"



function App() {
  const [text, setText] = useState("")
  const [role,setrole] = useState("")

  const [todos, setTodos] = useState([])
  // console.log(styles)

  const handleAdd = () => {
    setTodos([...todos, {
      id: Date.now().toString(),
      title: text,
      role : role,
      status: false
    }])

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div >
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Enter name" /> <br/>
          <Gender /><br/>
          <input value={role} onChange={e => setrole(e.target.value)} placeholder="Enter Role" /><br/>
          <Marital/><br/>
          <button onClick={handleAdd}>ADD</button>
        </div>
        <ul>
          {
            todos.map((item => <li key={item.id} >{item.title} {item.role} </li>))
          }
        </ul>

      </header>
    </div>
  );
}

export default App;
