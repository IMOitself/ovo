import { useState } from 'react'
import './App.css'

export default function App() {
  const [isEyesOpen, setIsEyesOpen] = useState(0);
  const [styleDisplay, setStyleDisplay] = useState('none');

  function blink(){
    setIsEyesOpen(isEyesOpen == 0 ? 1 : 0)
    setStyleDisplay(isEyesOpen == 0 ? 'flex' : 'none')
  }

  return (
    <div className="bg">
      <div className="ovo">
        <img className="ovo-open" src={"bit_def.png"} style={{display: {styleDisplay}}} />
        <img className="ovo-close" src={"bit_blinks.png"}/>
      </div>

      <button onClick={blink}>{isEyesOpen}</button>
    </div>
  )
}
