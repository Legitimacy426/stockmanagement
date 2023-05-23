import { signInWithEmailAndPassword } from "firebase/auth"
import { getDoc ,doc,query,where ,collection, getDocs} from "firebase/firestore"
import { useState } from "react"
import { useParams,Link } from "react-router-dom"
import { auth, db } from "./firebase.config"
import Swal from 'sweetalert2'

const Login = () => {
   
 
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [isError, setError] = useState()
    const handleSumbit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
            // success
                const uid = cred.user.uid
                localStorage.setItem("uid", uid)
                window.location.href = 'dashboard'

                
            }).catch((e) => {
                Swal.fire(
                    'error',
                    `${e.message}`,
                    'error'
                  )
        })
   }
    return (
        <div className="main main-form">
            
            <div className="card form-card">
               
                <form  onSubmit={handleSumbit}>
                    
               
              <br />
                        <h3>Login to Kapenguria Stores </h3> 
                    
        <div className="form-group">
                        <label htmlFor="">Email Address</label>
                        <input
                            required
                            type="email"
                            name="email"
                            id=""
                            value={email}
                            onChange = {(e)=>{setEmail(e.target.value)}}
                        />         
           </div>
        <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input
                            required
                            type="password"
                            name="password" id=""
                            value={password}
                            onChange = {(e)=>{setPassword(e.target.value)}}
                        />         
                    </div>
                   
                    <button className="submit">Login</button>
                    {isError && <p className="error">{isError}</p>}  
               
        </form>
             </div>
        </div>
    )
}

export default Login