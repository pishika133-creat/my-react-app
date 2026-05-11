import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  let api = import.meta.env.VITE_API_URL;
  
  let imgUrl = import.meta.env.VITE_IMG_URL;

  // get all products
  async function getAllProduct() {
    try {
      let res = await axios.get(`${api}product_getall`);

      console.log("API Response:", res.data);

      setProduct(res.data.data);

    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  // buy product
  function handleBuy(item) {
    console.log("buy item", item);

    alert(`Buy this product: ${item.productName}`);
  }

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        Ecommerce Product List
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {product.map((item) => (
          <div
            key={item._id}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`${imgUrl}${item.productImage}`}
              alt={item.productName}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3 style={{ marginTop: "10px" }}>
              {item.productName}
            </h3>

            <p
              style={{
                color: "gray",
                fontSize: "14px",
              }}
            >
              {item.productDescription}
            </p>

            <h2 style={{ color: "green" }}>
              ₹ {item.productPrice}
            </h2>

            <p>
              Stock: {item.productStock}
            </p>

            <button
              onClick={() => handleBuy(item)}
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                background: "blue",
                color: "white",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;