import { useState } from 'react'
import pagmanLogo from '/pagman.webp'
import './App.css'

function App() {
  const [value, setValue] = useState(20);
  const [password, setPassword] = useState(generateRandomPassword(20));

  function generateRandomPassword(length) {
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      password += possibleChars[randomIndex];
    }
    return password;
  }
  
  function handleSliderChange(event) {
    let newValue = event.target.value
    setValue(newValue);
    let newPassword = generateRandomPassword(newValue)
    setPassword(newPassword)
  }
  
  return (
    <div className="App">
      <div className="title-container">
        <a href="https://pagman.org"><img src={pagmanLogo}/></a>
        <h1>Password Generator</h1>
      </div>
      <div className="password-app-container">
        <div className="password-container">
          <input readOnly value={password}/>
        </div>
        <div className="slider-container">
          <input
            type="range"
            min="1"
            max="100"
            value={value}
            onInput={handleSliderChange}
          />
          <div className="slider-lenght-text-container">
            <span>{value}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
