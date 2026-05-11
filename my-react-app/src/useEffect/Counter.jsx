import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    const [formData ,setFormData] = useState({
      name:"",
      email:"",
      mobile:""
    })

    useEffect(() => {
      setDouble(()=>count+1)
           console.log("useEffect call");
    }, [count]);
    
  return (
    <div>
        <h2>{count}</h2>
        <h2>{double}</h2>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decreament</button>
    </div>
  );
};

export default Counter;