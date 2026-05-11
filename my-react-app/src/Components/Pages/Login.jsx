import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

let navigate = useNavigate()// navigate

  let api = import.meta.env.VITE_API_URL;//api 

console.log("form data",formData)
// console.log("api:",api)

//usestate update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();// by default submit

    try {
      let res = await axios.post(`${api}login`, formData);// data send to backend

      console.log("res", res.data);

      toast.success(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setTimeout(()=>{
        navigate("/")
      },1500)

    } catch (error) {
      console.log("error", error);

      toast.error(error?.response?.data?.message || "Login failed");
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div style={{
        width: "300px",
        height: "250px",
        borderRadius: "10px",
        backgroundColor: "pink",
        padding: "20px",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <h2>Login page</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
          />

          <br />

          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
          />

          <br />

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "10px",
              padding: "8px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;