import { useState } from 'react';
import './App.css';
import { Message } from './component/Message'

export const App = () => {


  const [message, setMessage] = useState('Your message')

  const heandleChangeMessage = (ev) => {
    setMessage(ev.target.value)
  }

  return (
    <div className="App">
      <div className="app-box">
        <input onChange={heandleChangeMessage} />
        <Message message={message} />
      </div>
    </div>
  );
}

