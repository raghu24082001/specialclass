import React, { useState } from 'react';

const Student = () => {
  const [data, setData] = useState({
    studentname: '',
    mark: '',
  });

  const [show , setShow] = useState(false)
  const [final , setFinal] = useState({})
 

 
  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let result = ''
    if(data.mark >= 90){
       result= 'Grade A'
    }else if(data.mark>= 70){
          result= 'Grade B'
    }else if(data.mark>= 50){
          result= 'Grade C'
    }else{
         result= 'Fail'
    }
   
    setShow(true)
    setFinal({
        name : data.studentname,
        finalresult : result
    })


  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={data.studentname}
          onChange={handlechange}
          name="studentname"
          placeholder="studentname"
          required
        />

        <input
          type="text"
          value={data.mark}
          onChange={handlechange}
          name="mark"
          placeholder="mark"
          required
        />

       

        <input type="submit" value="Submit" />
      </form>

      <p>
        {show ? `${final.name} grade is ${final.finalresult}` : ''}
      </p>
    </>
  );
};

export default Student