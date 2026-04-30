import React from 'react'

const Contactus = () => {

    const contact1 = {name: "Jhone" , phone: "9876543210"};
    const contact2 = {name: "rahul" , phone: "9182736459"};
    const contact3 = {name: "priya",  phone: "12345678910"};
  
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div style={{width:"300px",height:"200px",borderRadius:"20px",backgroundColor:"powderblue",
        padding:"20px",margin:"20px",display:"flex",alignItems:"center",flexDirection:"column",
      }}>
     <h2>contact list</h2>
   <ul>
    <li>{contact1.name}-{contact1.phone}</li>
    <li>{contact2.name}-{contact2.phone}</li>
    <li>{contact3.name}-{contact3.phone}</li>

   </ul>
    </div>
    </div>
  );

}
export default Contactus