import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';
import ConsoleText from '../modules/terminalFx.jsx';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   if (isDragging) {
  //     consoleText([''], 'text', ['']); 
  //   } else {
  //     consoleText(['Drag the calculator'], 'text', ['#dfbfbf']); 
  //   }
  // }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    const operation = e.target.value;
    const result = calculate(state, operation);
    setState(result);
  };

  const handleTextChange = (e) => {
    setState({
      ...state,
      total: e.target.value,
    });
  };

  return (
    <>
      
      <div
      className="calculator"
      style={{ position: 'absolute', top: position.y, left: position.x, cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      >
      <div className="calculator-grid">
        <div className="output">
          <div className="operand" onChange={handleTextChange}>
            {state.next || state.total || 0}
          </div>
        </div>
        <button className="btn" type="button" onClick={handleClick} value="AC">
          AC
        </button>
        <button className="btn" type="button" onClick={handleClick} value="+/-">
          +/-
        </button>
        <button className="btn" type="button" onClick={handleClick} value="%">
          %
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleClick}
          value="÷">
          ÷
        </button>
        <button className="btn" type="button" onClick={handleClick} value="7">
          7
        </button>
        <button className="btn" type="button" onClick={handleClick} value="8">
          8
        </button>
        <button className="btn" type="button" onClick={handleClick} value="9">
          9
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleClick}
          value="x">
          x
        </button>
        <button className="btn" type="button" onClick={handleClick} value="4">
          4
        </button>
        <button className="btn" type="button" onClick={handleClick} value="5">
          5
        </button>
        <button className="btn" type="button" onClick={handleClick} value="6">
          6
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleClick}
          value="-">
          -
        </button>
        <button className="btn" type="button" onClick={handleClick} value="1">
          1
        </button>
        <button className="btn" type="button" onClick={handleClick} value="2">
          2
        </button>
        <button className="btn" type="button" onClick={handleClick} value="3">
          3
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleClick}
          value="+">
          +
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleClick}
          value="0">
          0
        </button>
        <button className="btn" type="button" onClick={handleClick} value=".">
          .
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleClick}
          value="=">
          =
        </button>
      </div>
      </div>
      <ConsoleText words={['Drag the calculator']} colors={['#dfbfbf']} isDragging={isDragging} />
    </>
  );
};

export default Calculator;
