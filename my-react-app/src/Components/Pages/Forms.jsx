import React,{ useState} from 'react';

function Forms(){
  const[formData,setFormData]= useState({
    name:"",
    email:""
  });
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
  };
  

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div style={{width:"170px",height:"200px",borderRadius:"6px",background:"red",
        padding:"30px",margin:"0",justifyContent:"center",alignItems:"center",dispaly:"flex",
        flexDirection:"column",textAlign:"center",marginBottom:"20px",
      }}>
      <h2>Forms page</h2>
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="name"
      placeholder="Enter Name"
      value={formData.name}
      onChange={handleChange}
      />
    <input
    type="email"
    name="email"
    placeholder="Enter email"
    value={formData.email}
    onChange={handleChange}
    />
    <button type="Submit">Submit</button>
    </form>
    </div>
    </div>
  )

}
export default Forms;