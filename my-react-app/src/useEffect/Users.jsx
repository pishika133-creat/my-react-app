import React,{useEffect,useState} from 'react'

const Users = () => {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((res) => res.json())
     .then((data) =>{
      setUsers(data);
      setLoading(false);
     })
     .catch((err) => {
      console.log("Error:",err);
      setLoading(false);
     });
  }, []);
  return (
    <div  style={{
      background: "powder blue",minHeight:"100vh",
      padding:"30px",
    }}
    >
      <h2
      style={{
        textAlign:"center",
        marginBottom:"30px",
        color:"#333",
      }}>
        User List
        </h2>
      {loading ? (
        <p style={{textAlign:"center"}}>Loading...</p>
      ) : (
        <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
        }}
        >
        {users.map((user) => (
          <div key={user.id}
            style={{background:"white",
              padding:"20px",
              borderRadius:"10px",
              boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
              transition:"0.3s",
            }}
            >
            <p style={{ color:"#007bff"}}>{user.name}</p>
            <p>{user.email}</p>
            </div>
        ))}
        </div>
        
      

      )}
    </div>
  );
};

export default Users;