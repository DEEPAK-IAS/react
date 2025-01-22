import './App.css';
import ColorBox from './ColorBox';
import ChangeColor from './ChangeColor';
import ToggleColor from './ToggleColor';
import {useState} from 'react';

function App() {


  const [color, setColor] = useState("white");
  const [colorCode, setColorCode] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("black");


  return (
    <div className="App">
      <ColorBox 
        color = {color}
        colorCode = {colorCode}
        textColor = {textColor}
      />
      <ChangeColor 
        setColor = {setColor}
        setColorCode = {setColorCode}        
      />

      <ToggleColor
        textColor = {textColor}
        setTextColor = {setTextColor}
      />

    </div>
  );
}

export default App;
