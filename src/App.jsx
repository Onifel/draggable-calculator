import React from 'react';
import Calculator from './components/Calculator';

function App() {

  return (
    <>
      <header className="board-header">
        <h2 className="glitch" data-text="CALCULATOR">Calculator</h2>
          <h2 className="glow">Calculator</h2>
      </header>
      <Calculator />
      <section>
        <div className="container">
          <div className="containerA">
            <span id="text"></span>
            <div className="containerB" id="console">&#95;</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
