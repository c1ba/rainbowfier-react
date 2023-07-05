import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRainbowfier } from '../.';
import { useRef } from 'react';

const App: React.FC = () => {

  const bgRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const textRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;
  const testDark = useRainbowfier({refObject: textRef, timeInMilliseconds: 50, colorSettings: {darkerOrLighter: "DARK", colorOffset: 150}});
  const testLight = useRainbowfier({refObject: bgRef, timeInMilliseconds: 100, colorSettings: {darkerOrLighter: "LIGHT", colorOffset: 100}});


  return <div ref={bgRef} style={{width: "100vw", height: "100vh", margin: 0, padding: 0}}>
      <header className="App-header">
        <h2 ref={textRef}>
          I am shiny background
        </h2>
      </header>
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));
