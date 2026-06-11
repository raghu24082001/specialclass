import React, { useEffect } from 'react'
import { useState } from 'react'

const Fetchdata = () => {

     const [show,setShow] = useState([])
     const [toggle,setToggle] = useState(false)
useEffect(()=>{
   
    setTimeout(()=>{
     const getdata = async()=>{
        try{
            const data1 = await fetch('https://jsonplaceholder.typicode.com/users')
            const data2 = await data1.json()
            setShow(data2)
        }catch(error){
           console.log(err)
        }
    }

   getdata()
    },2000)

},[])

const handletoggle =()=>{
    setToggle(!toggle)
}

  return (
    <>
       <div style={toggle ? {background:'red'} : {background: 'blue'}}>
        <div>{show.length > 0 ?  show.map((e,i)=>{
        return <li key={i}>{e.name}</li>
       }): 'Loading....'}</div>
       <button onClick={handletoggle}>{toggle ? "light" : "dark"}</button>
       </div>
    </>
  )
}

export default Fetchdata