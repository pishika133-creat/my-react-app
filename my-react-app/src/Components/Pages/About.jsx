import React from 'react'

function About(){
  const name = "Rahul"

  return (
    <div>
      <h2>About {name}</h2>
      <p>This About page in React</p>
      <button onClick={()=>alert("Hello!")}>
        Click Me
      </button>
    </div>
     
  );
}

export default About