import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="glass-card">
        <div className="logos">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer" title="Vite">
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" title="React">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1>Vite + React</h1>
        <p className="subtitle">Premium Next-Gen Experience</p>
        
        <div className="action-area">
          <button 
            className="btn-primary" 
            onClick={() => setCount((count) => count + 1)}
          >
            Experience Count: {count}
          </button>
          
          <p className="hint">
            Edit <code>src/App.jsx</code> and save to see magic happen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
