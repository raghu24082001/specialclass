import React, { useState } from 'react';

const Product = () => {
  const [data, setData] = useState({
    products: '',
    price: '',
    quantity: '',
  });

  const [show, setShow] = useState(false);
  const [total, setTotal] = useState({});

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (isNaN(data.price) || isNaN(data.quantity)) {
      alert('Type a valid number');
      return;
    }

    const totalvalue = Number(data.price) * Number(data.quantity);

    setTotal({
      products: data.products,
      totalvalue: totalvalue,
    });

    setShow(true);
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={data.products}
          onChange={handlechange}
          name="products"
          placeholder="Product"
          required
        />

        <input
          type="text"
          value={data.price}
          onChange={handlechange}
          name="price"
          placeholder="Price"
          required
        />

        <input
          type="text"
          value={data.quantity}
          onChange={handlechange}
          name="quantity"
          placeholder="Quantity"
          required
        />

        <input type="submit" value="Submit" />
      </form>

      <p>
        {show
          ? `${total.products} value is ${total.totalvalue}`
          : ''}
      </p>
    </>
  );
};

export default Product;