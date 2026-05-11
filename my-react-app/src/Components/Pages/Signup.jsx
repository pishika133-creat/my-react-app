import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  let api = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    conformPassword: "",
    fcmId: "",
    countryName: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(`${api}signup`, formData);

      console.log(res.data);

      toast.success(res.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "lightblue",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Signup Page</h2>

        <form onSubmit={handleSubmit}>

          <label>User Name</label>
          <br />
          <input
            type="text"
            name="userName"
            placeholder="Enter username"
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            name="conformPassword"
            placeholder="Confirm password"
            onChange={handleChange}
          />

          <br />
          <br />

          <label>FCM ID</label>
          <br />
          <input
            type="text"
            name="fcmId"
            placeholder="Enter fcmId"
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Country Name</label>
          <br />
          <input
            type="text"
            name="countryName"
            placeholder="Enter country"
            onChange={handleChange}
          />

          <br />
          <br />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              background: "blue",
              color: "white",
            }}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;