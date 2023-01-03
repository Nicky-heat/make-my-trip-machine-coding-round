import { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  const [boxes, setBoxes] = useState([]);

  function boxClickHandler(e) {
    const elTarget = e.target.classList.value.split(' ')[1];
    if (!elTarget) return;
    boxes.push(elTarget);
    if (boxes.length >= 7) {
      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          document.getElementsByClassName(boxes[i])[0].style.backgroundColor =
            'skyblue';
        }, 1000 * (i + 1));
      }
    }
    e.target.style.backgroundColor = 'blue';
  }
  return (
    <div className="App">
      <section onClick={boxClickHandler} className="grid__container">
        <div id="boxA" className="box boxA"></div>
        <div id="boxB" className="box boxB"></div>
        <div id="boxC" className="box boxC"></div>
        <div id="boxD" className="box boxD"></div>
        <div id="boxE" className="box boxE"></div>
        <div id="boxF" className="box boxF"></div>
        <div id="boxG" className="box boxG"></div>
      </section>
    </div>
  );
}

export default App;
