import React, {useState} from 'react'
import {Button, FormControl, InputLabel, Input} from '@mui/material';
import './App.css';
import Message from './Message'

function App() {
  const [input, setInput] = useState('');
  const[messages, setMessages] = useState([]);
  const[userName, setUsername] = useState('');
  


  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input])
    setInput('');
  }
  return (
    <div className="App">
      <h1>Poney's Chat</h1>

      <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Enter A Message</InputLabel>
        <Input  value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>

        

      </form>
      
      {
        messages.map(message => (
          <Message text={message}/>
       
        ))
      }
    </div>
  );
}

export default App;
