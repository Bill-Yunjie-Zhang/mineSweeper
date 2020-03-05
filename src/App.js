import React from 'react';
import Game from './components/Game'

function App() {
  return (
    <div>
      <Game></Game>
      <div style={{ width: "800px", margin: "auto" }}>
        <h1>Beginner Guide</h1>
        <div id="intro">
          <p>Since Windows system doesn't have "Clearing land mines", one of my favorite games for killing time build in now, this is a travesty of mine build using React app.</p>
        </div>
        <div id="manul">
          <h1>Manual:</h1>
          <ul>
            <li>Left click to step onto the picked spot</li>
            <li>Right click to neutralize and mark a land mine</li>
          </ul>
          <h1>Rules:</h1>
          <ul>
            <li>If you step onto a mine land mine, you lose</li>
            <li>If you marked a mine incorrectly, you lose</li>
            <li>Finish marking everything, you win</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
