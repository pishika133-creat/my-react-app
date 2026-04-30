import React from 'react'

const Signup = () => {
  function handleSubmit(e){
 e.preventDefult();
 const formDate = new formDate(e.target);
 const data = Object.fromEntries(formDate.entries());
 alert("form submit success");
 console.log("data",data); 
  }
  return (
    <div style={{display:"flex" ,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div style={{width:"200px",height:"400px",borderRadius:"10px",backgroundColor:"lavender",
        margin:"20px",padding:"20px",justifyContent:"center",alignItems:"center",flexDirection:"column",display:"flex",
      }}>
        <h2>Signup page</h2>
        <label htmlFor="">Name</label>
        <br></br>
        <input type="text" id="Name" placeholder="Enter your name"></input>
        <br></br>
        <label htmlFor="">Email</label>
        <br></br>
        <input type="text" id="Email" placeholder="Enter your email"></input>
        <br></br>
        <label htmlFor="">Phone</label>
        <br></br>
        <input type="number" id="Phone" placeholder="Enter your number"></input>
        <br></br>
        <label htmlFor="">Password</label>
        <br></br>
        <input type="password" id="password" placeholder="Enter your number"></input>
        <br></br>

        <button>Submit</button>
        
    </div>
    </div>
  )
}

export default Signup

//1)name
//2)email
//3)phone
//4)password