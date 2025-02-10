import { useState } from 'react';
import Navbar from './navbar';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Navbar />
      <h1>Toggle Message</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This is a toggled message!</p>}
    </div>
  );
}