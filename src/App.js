import { useState } from 'react';
import Form from './components/form';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [total, setTotal] = useState('');
  return (
    <div>
      <Form
        message={message}
        setMessage={setMessage}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
