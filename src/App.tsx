import React from 'react'
import logo from './logo.svg'
import './util/locales/config'
import './App.css'

import LegalTerms from './components/LegalTerms'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <hr />

      <LegalTerms />
    </div>
  )
}

export default App
