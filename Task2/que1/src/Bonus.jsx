import React, { useState } from 'react';

const Bonus = () => {
  const [data, setData] = useState({
       name : '',
       salary:''
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
    let bonus = 0
    if(data.salary >30000){
        bonus = 5000
    }else if(data.salary >20000){
        bonus = 3000
    }else{
        bonus = 1000
    }
    setTotal({
        name: data.name,
        salary: data.salary,
        bonus : bonus
    })
    setShow(true)
    
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={data.name}
          onChange={handlechange}
          name="name"
          placeholder="name"
          required
        />

        <input
          type="text"
          value={data.salary}
          onChange={handlechange}
          name="salary"
          placeholder="salary"
          required
        />


        <input type="submit" value="Submit" />
      </form>

      <p>
       {show ? `${total.name} salary is ${total.salary} and bonus is ${total.bonus}` :'' }
      </p>
    </>
  );
};

export default Bonus