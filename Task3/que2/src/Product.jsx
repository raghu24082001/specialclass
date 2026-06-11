import { useState } from 'react';

const Product = () => {
  const [state, setState] = useState('');
  const [show, setShow] = useState([]);

  const data = ['table', 'pen', 'eraser', 'stand', 'z'];

  const handlechange = (e) => {
    const value = e.target.value;

    setState(value);

    const checkdata = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setShow(checkdata);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="name"
          value={state}
          onChange={handlechange}
          name="name"
        />
      </form>

      <ul>
        {show.length > 0 ? (
          show.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          <li>No data</li>
        )}
      </ul>
    </>
  );
};

export default Product;