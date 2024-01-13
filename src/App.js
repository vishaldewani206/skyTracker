import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState(true);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode(false);
    }
  }, []);
  return (
    <div className={`App ${mode ? 'bg-white' : 'bg-stone-950'}`}>
      <div className='container'>
        <Navbar mode={mode} setMode={setMode} />
        <Main mode={mode} />
      </div>
      <Footer mode={mode} />
    </div>
  );
}

export default App;
