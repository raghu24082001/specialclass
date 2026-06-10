import React, { useEffect, useState } from 'react'

const Fetch = () => {

  const [show,setShow] = useState([])
  const [filter,setFilter] = useState({filname:''})
  
  useEffect(() => {
  const fetchdata = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setShow(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchdata();
}, []);

const handlechange = (e)=>{
    setFilter({[e.target.name]:e.target.value})
}

const handlesubmit =(e)=>{
   e.preventDefault()
   const filtereddata = show.filter((sa)=>{
     return sa.name.includes(filter.filname)
      
   }
   
  )
   console.log(filtereddata)
   setShow(filtereddata)
}
   
  return (
    <>
       <form onSubmit={handlesubmit}>
        <input type="text" name='filname' value={filter.filname} onChange={handlechange} />
        <input type="submit" value={'submit'}/>
       </form>
       <ul>
          {show.map((e)=>(
            <li key={e.id}>{e.name}</li>
          ))}
       </ul>
    </>
  )
}

export default Fetch