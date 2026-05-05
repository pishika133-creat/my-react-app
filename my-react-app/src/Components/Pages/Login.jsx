import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    function handleSubmit(e) {
        e.preventDefault();
        const formData = new formData(e.target);
        const data = Object.formEntries(formData.entries());
        alert("from sumbit success");
        console.log("data", data);
    }
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div style={{
                width: "300px", height: "200px", borderRadius: "10px",
                backgroundColor: "pink", padding: "20px", margin: "20px",
                display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
            }}>
                <h2>Login page</h2>
                <form action="" onSumbit={handleSubmit}>
                    <lable HtmlFor="">Email</lable>
                    <br></br>
                    <input type="text" id="eamil" placeholder="Enter your email"></input>
                    <br></br>
                    <lable htmlFor="">Password</lable>
                    <br></br>
                    <input type="number" palceholder="Enter your password"></input>
                    <br></br>


                    <button type="sumbit" style={{ width: "100%", marginTop: "10px", borderRadius: "10px", padding: "8px", backgroundColor: "blue", color: "white", border: "none", borderRadies: "5px" }}>sumbit</button>
                </form>
            </div>
        </div>

    )
}

export default Login