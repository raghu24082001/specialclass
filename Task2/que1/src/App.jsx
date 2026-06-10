import React, { useState } from 'react'
import Product from "./Product"
import Student from './Student'

const App = () => {
  const [data,setdata] = useState({
     email:'',
     password:''
  })

  const handlechange = (e)=>(
    setdata({...data, [e.target.name]: e.target.value})
  )

  const handlesubmit = (e)=>{
      e.preventDefault()
      if(data.password.length < 6){
        alert('need six character for password')
        return
      }
    
      if(data.email && data.password){
        alert('login sucessful')
        return
      }

  }


  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="email" value={data.email}  onChange={handlechange} name='email' />
      <input type="password" value={data.password} onChange={handlechange} name='password'/>
      <input type="submit"  value={"submit"}/>
    </form>
    <Product/>
    <Student/>
    </>
  )
}

export default App