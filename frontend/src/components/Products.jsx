import React from "react";
import "../styles/Products.css";
import axios from "axios";
import data from "./data.js";

const checkOutHandler = async(amount) => {
    // alert(`You have to pay ${amount} Rs`);
    // console.log({amount});

    const {data: keyData} = await axios.get("/api/v1/getKey");
    const {key} = keyData;
    console.log(key);

    const {data: orderedData} = await axios.post("/api/v1/payment/process", {
        amount
    });
    const {order} = orderedData;
    console.log(order);

    // console.log(orderedData);
    // console.log(keyData);

    // Open Razorpay Checkout
      const options = {
        key: key, // Use the key from the API response
        amount: amount, // Amount is in currency subunits.
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: order.id, // This is the order_id created in the backend
        callback_url: '/api/v1/paymentVerification', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();

}

const Products = ({ data }) => {
  console.log(data);
  return (
    <div className="products-container">
      {data.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt="product" className="product-image" />
          <h3 className="product-title">{item.title}</h3>
          <p className="product-price">
            Price <strong>{item.price} Rs</strong>
          </p>
          <button className="pay-button" onClick={()=>checkOutHandler(item.price)}>Pay {item.price}/-</button>
        </div>
      ))}

      {/* <div className="product-card">
        <img src={data[0].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[0].title}</h3>
        <p className="product-price">
          Price <strong>{data[0].price}</strong>
        </p>
        <button className="pay-button">Pay {data[0].price}/-</button>
      </div>

      <div className="product-card">
        <img src={data[1].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[1].title}</h3>
        <p className="product-price">
          Price <strong>{data[1].price}</strong>
        </p>
        <button className="pay-button">Pay {data[1].price}/-</button>
      </div>

      <div className="product-card">
        <img src={data[2].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[2].title}</h3>
        <p className="product-price">
          Price <strong>{data[2].price}</strong>
        </p>
        <button className="pay-button">Pay {data[2].price}/-</button>
      </div>

      <div className="product-card">
        <img src={data[3].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[3].title}</h3>
        <p className="product-price">
          Price <strong>{data[3].price}</strong>
        </p>
        <button className="pay-button">Pay {data[3].price}/-</button>
      </div>

      <div className="product-card">
        <img src={data[4].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[4].title}</h3>
        <p className="product-price">
          Price <strong>{data[4].price}</strong>
        </p>
        <button className="pay-button">Pay {data[4].price}/-</button>
      </div>

      <div className="product-card">
        <img src={data[5].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[5].title}</h3>
        <p className="product-price">
          Price <strong>{data[5].price}</strong>
        </p>
        <button className="pay-button">Pay {data[5].price}/-</button>
      </div>

      <div className="product-card">
        <img src={data[6].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[6].title}</h3>
        <p className="product-price">
          Price <strong>{data[6].price}</strong>
        </p>
        <button className="pay-button">Pay {data[6].price}/-</button>
      </div>

      <div className="product-card">
        <img src={data[7].image} alt="product" className="product-image" />
        <h3 className="product-title">{data[7].title}</h3>
        <p className="product-price">
          Price <strong>{data[7].price}</strong>
        </p>
        <button className="pay-button">Pay {data[7].price}/-</button>
      </div> */}

    </div>
  );
};

export default Products;
