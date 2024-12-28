import { useRef, useEffect, useState } from 'react';

const UseRefSetTimeout = () => {
   const [message, setMessage] = useState('');
  const timeoutRef = useRef(null);

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setMessage('Action will happen in 3 seconds...');
    timeoutRef.current = setTimeout(() => {
      setMessage('Action completed!');
    }, 3000);
  };

  const handleClear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setMessage('Timeout cleared!');
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <span>UseRef with setTimeout Example</span>
      <p>:{message}</p>
      <button onClick={handleClick}>Start Delayed Action</button>
      <button onClick={handleClear}>Clear Timeout</button>
    </div>
  );
}

export default UseRefSetTimeout;