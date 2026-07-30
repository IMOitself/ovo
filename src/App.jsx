import { useEffect, useState } from 'react'
import './App.css'

let typingTimeout = null;
let blinkingTimeout = null;
let reopenEyesTimeout = null;

export default function App() {
  const [isEyesOpen, setIsEyesOpen] = useState(0);
  const [styleDisplay, setStyleDisplay] = useState('none');
  const [inputText, setInputText] = useState('');

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

  function closeEyes(){
    clearTimeout(blinkingTimeout);
    let randomDuration = 1000 + Math.floor(Math.random() * 6000)

    blinkingTimeout = setTimeout(() => {
      var x = document.querySelector(".ovo-open").style.display = "none";
      reopenEyes()
      console.log(randomDuration)
    }, randomDuration)
  }

  function reopenEyes(){
    clearTimeout(reopenEyes)
    reopenEyesTimeout = setTimeout(() => {
      var x = document.querySelector(".ovo-open").style.display = "block";
      blink()
    }, 500)
  }

  function blink(){
    closeEyes();
  }

  setTimeout(blink, 1000); // IDK WHY IT IS BLINKING CONSTANTLY

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
