import React, { useState, useEffect } from 'react';

const ConsoleText = ({ words, colors, isDragging }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(!isDragging);
  }, [isDragging]);

  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          setX(1);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(-1);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 1000);
      } else if (!waiting) {
        setLetterCount(letterCount + x);
      }
    }, 120);
    
    return () => clearInterval(intervalId);
  }, [letterCount, waiting]);

  if (!visible) return null;

  return (
    <div className="container">
      <div className="containerA">
      <div id="text" style={{ color: colors[0], zIndex: 100 }}>
      {words.map((word, index) => (
        <span key={index}>{word.substring(0, letterCount)}</span>
      ))}
      </div>
    <div className="containerB" id="console">&#95;</div>
      </div>
        
    </div>
    
  );
};

export default ConsoleText;


// const consoleText = (words, id, colors, isDragging) => {
//   const target = document.getElementById(id);
//   if (!target) return;

//   if (isDragging) {
//     target.style.visibility = 'hidden'; 
//   } else {
//     target.style.visibility = 'visible'; 
//     return; 
//   }

//   let letterCount = 1;
//   let x = 1;
//   let waiting = false;

//   if (colors === undefined) colors = ['#dfbfbf'];
  
//   // const con = document.getElementById('console');
  
  

//   target.setAttribute('style', `color:${colors[0]}; z-index: 100;`);
//   window.setInterval(() => {
//     if (letterCount === 0 && waiting === false) {
//       waiting = true;
//       target.innerHTML = words[0].substring(0, letterCount);
//       window.setTimeout(() => {
//         const usedColor = colors.shift();
//         colors.push(usedColor);
//         const usedWord = words.shift();
//         words.push(usedWord);
//         x = 1;
//         target.setAttribute('style', `color:${colors[0]}`);
//         letterCount += x;
//         waiting = false;
//       }, 1000);
//     } else if (letterCount === words[0].length + 1 && waiting === false) {
//       waiting = true;
//       window.setTimeout(() => {
//         x = -1;
//         letterCount += x;
//         waiting = false;
//       }, 1000);
//     } else if (waiting === false) {
//       target.innerHTML = words[0].substring(0, letterCount);
//       letterCount += x;
//     }
//   }, 120);
//   // window.setInterval(() => {
//   //   if (visible === true) {
//   //     con.className = 'containerB hidden';
//   //     visible = false;
//   //   } else {
//   //     con.className = 'containerB';
//   //     visible = true;
//   //   }
//   // }, 400);
// };

// export default consoleText;