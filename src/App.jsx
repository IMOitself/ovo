import { useEffect, useState } from 'react'
import './App.css'

let typingTimeout = null;

export default function App() {
  const [isEyesOpen, setIsEyesOpen] = useState(0);
  const [styleDisplay, setStyleDisplay] = useState('none');
  const [inputText, setInputText] = useState('');

  function blink(){
    setIsEyesOpen(isEyesOpen == 0 ? 1 : 0)
    var x = document.querySelector(".ovo-open");
    x.style.display = isEyesOpen == 0 ? "block" : "none";
  }

  function handleInputOnTyping(){
    var ovo_input = document.querySelector(".ovo-input");
    ovo_input.style.display = 'block';
    clearTimeout(typingTimeout)
    typingTimeout = setTimeout(() => {
      setInputText('')
      ovo_input.style.display = 'none';
      document.querySelector(".input").blur()
    }, 2000)
  }

  function handleInputOnChange(event){
        setInputText(event.target.value);
  }

  const myTimeout = setTimeout(blink, 1000); // IDK WHY IT IS BLINKING CONSTANTLY

  return (
    <div className="bg">
      <div className="ovo">
        <img className="ovo-input" src={"bit_input.png"} />
        <img className="ovo-open" src={"bit_def.png"} />
        <img className="ovo-close" src={"bit_blinks.png"}/>
      </div>
      <input className="input" type='text' value={inputText} onChange={handleInputOnChange} onKeyDown={handleInputOnTyping} onFocus={handleInputOnTyping}/>
    </div>
  )
}
