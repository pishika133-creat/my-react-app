import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
           console.log("Count changed:", count);
    }, []);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decreament</button>
    </div>
  );
};

export default Counter;