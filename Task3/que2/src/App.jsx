
import { useState } from 'react'
import Product from './Product'
import Fetchdata from './Fetchdata'
import Fetch from './Fetch'

const App = () => {


  const [state,setState] = useState({
     name:'',
     department:'',
     salary:''
  })
 const [show,setShow] = useState([])
 




  const handlesubmit =(e)=>{
      e.preventDefault()
     setShow([...show,state] )
     console.log(show)
  }

  const handlechange =(e)=>{
     setState({...state,[e.target.name]:e.target.value})
  }

  return (
    <>
       <form onSubmit={handlesubmit}>
           <input type="text" placeholder='name' value={state.name} onChange={handlechange}  name='name'/>
           <input type="text" placeholder='salary' value={state.salary}  onChange={handlechange} name='salary'/>
           <input type="text" placeholder='department' value={state.department}  onChange={handlechange} name='department'/>
           <input type="submit" value={'submit'} />
       </form>
       <ul>
        {show.map((e,i)=>{
          return <li key={i}>{e.name}</li>
        })}
       </ul>
       <p>{show.length}</p>
       <Product/>
       <Fetchdata/>
       <Fetch/>
    </>
  )
}

export default App