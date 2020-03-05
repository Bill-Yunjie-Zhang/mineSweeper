import React from 'react';
import Game from './components/Game'

function App() {
  return (
    <div>
      <Game></Game>
      <h1 id="winOrLose" style={{color: "red"}}></h1>
    </div>
  );
}

export default App;
