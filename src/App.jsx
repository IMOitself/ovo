import { useState } from 'react'
import './App.css'

export default function App() {
  const [isEyesOpen, setIsEyesOpen] = useState(0);
  const [styleDisplay, setStyleDisplay] = useState('none');

  function blink(){
    setIsEyesOpen(isEyesOpen == 0 ? 1 : 0)
    var x = document.querySelector(".ovo-open");
    x.style.display = isEyesOpen == 0 ? "block" : "none";
  }

  const myTimeout = setTimeout(blink, 1000); // IDK WHY IT IS BLINKING CONSTANTLY

  return (
    <div className="bg">
      <div className="ovo">
        <img className="ovo-open" src={"bit_def.png"} />
        <img className="ovo-close" src={"bit_blinks.png"}/>
      </div>
    </div>
  )
}
