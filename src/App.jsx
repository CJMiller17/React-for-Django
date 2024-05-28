import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "./authContext"
import {fetchUser} from "./api"

function App() {
  const { auth } = useContext(AuthContext)

  const submit = () => {
    fetchUser({ auth })
  }

  return (
    <div>
      <h1> Home</h1>
      <button onClick={() => submit()}>Fetch Profile</button>
    </div>
  )

}

export default App;

// const CustomerList = ({ customers }) => {
//   return  customers.length > 0 ? (
//     <div>
      
//       <h2>Instructors</h2>
//       {customers.map(inst => {
//         return (
//           <div key={inst.id}>
//             {inst.id} - {inst.first_name} {inst.last_name}
//           </div>
//         );
//       })}

//     </div>
//   ) : (
//       <div>
//         Loading...
//       </div>
//   )

// }

// const NewCustomer = () => {
//   const [first_name, setName] = useState("")

//   const createCustomer = () => {
//     axios.post("http://127.0.0.1:8000/customer/", {
//       first_name: first_name
//     })
//       .then(response => {
//         console.log("Response: ", response)
//       })
//       .catch(error => console.log("Error: ", error))
//   }
  
//   return (
//     <div>
//       <h2> Create a New Customer</h2>
//       <input
//         type="text"
//         onChange={e => setName(e.target.value)}
//         placeholder="Enter Name"
//         value={first_name}
//       />
//       <button
//       onClick={() => createCustomer()}
//       >
//         Create Customer
//       </button>
//     </div>
//   )
// }


// function App() {
  
//   const [customers, setCustomers] = useState([])

//   useEffect(() => {
//     getCustomers()
//   }, [])
  
//   const getCustomers = () => {
//     console.log('Here!')
//     axios.get("http://127.0.0.1:8000/customer/")
//       .then(response => {
//         console.log("Response: ", response)
//         setCustomers(response.data)
//       })
      
//       .catch(error => console.log('ERROR: ', error))
//   }

//   return (
//     <div className="p-5">
      
//       <CustomerList customers={customers} />
//       <NewCustomer />

//     </div>
//   )
// }



