import './App.css';
import {useState} from 'react'
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className={`App ${mode ? 'bg-white' : 'bg-stone-950'}`}>
      <Navbar mode={mode} setMode={setMode}/>
      <Main mode={mode}/>
      <Footer mode={mode}/>
    </div>
  );
}

export default App;
