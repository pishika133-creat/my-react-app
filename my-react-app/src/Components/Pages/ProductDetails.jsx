import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  let api = import.meta.env.VITE_API_URL;
  let imgUrl = import.meta.env.VITE_IMG_URL;

  const navigate = useNavigate();
  const { id } = useParams();

  // ================= API =================

  async function getProductDetails() {
    try {
      let data = {
        Id: id,
      };

      let res = await axios.post(`${api}product_get`, data);

      setProductDetails(res?.data?.data?.product);

      setRelatedProducts(res?.data?.data?.relatedProducts);

    } catch (error) {
      console.log("Product Details API Failed", error);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <div className="product-details-page container py-5">

      {/* BACK BUTTON */}

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* PRODUCT DETAILS */}

      <div className="product-details-box">

        {/* IMAGE */}

        <div className="product-image-box">
          <img
            src={`${imgUrl}${productDetails?.productImage}`}
            alt=""
            className="product-image"
          />
        </div>

        {/* DETAILS */}

        <div className="product-info">

          <h1 className="product-title">
            {productDetails?.productName}
          </h1>

          <h2 className="product-price">
            ₹ {productDetails?.productPrice}
          </h2>

          <p className="product-description">
            {productDetails?.productDescription}
          </p>

          <div className="product-extra-info">
            <p>
              <span>Category :</span>{" "}
              {productDetails?.productCategory?.categoryName}
            </p>

            <p>
              <span>Brand :</span>{" "}
              {productDetails?.productSubCategory?.subCategoryName}
            </p>

            <p>
              <span>Stock :</span>{" "}
              {productDetails?.productStock}
            </p>

            <p>
              <span>Quantity :</span>{" "}
              {productDetails?.productQuantity}
            </p>
          </div>

          {/* BUTTONS */}

          <div className="product-buttons">

            <button className="cart-btn">
              Add To Cart
            </button>

            <button className="buy-btn">
              Buy Now
            </button>

          </div>

        </div>
      </div>

      {/* RELATED PRODUCTS */}

      <div className="related-products-section">

        <h2 className="related-title">
          Related Products
        </h2>

        <div className="related-products-grid">

          {relatedProducts?.map((item) => (
            <div className="related-card" key={item._id}>

              <img
                src={`${imgUrl}${item.productImage}`}
                alt=""
                className="related-image"
              />

              <div className="related-card-body">

                <h4>{item.productName}</h4>

                <p>
                  {item.productDescription?.slice(0, 70)}...
                </p>

                <h5>₹ {item.productPrice}</h5>

                <Link
                  to={`/product-details/${item._id}`}
                  className="details-btn"
                >
                  View Details
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;