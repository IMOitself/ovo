import { useState } from 'react'
import './App.css'

function blink(){
  
}

export default function App() {
  const [isEyesOpen, setIsEyesOpen] = useState(false);

  return (
    <div className="bg">
      <div className="ovo">
        <img className="ovo-open" src={"bit_def.png"} style={{display: 'none'}} />
        <img className="ovo-close" src={"bit_blinks.png"}/>
      </div>

      sweet dreams...
    </div>
  )
}
