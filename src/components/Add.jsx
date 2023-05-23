import { signInWithEmailAndPassword } from "firebase/auth"
import { getDoc ,doc,query,where ,collection, getDocs, addDoc, serverTimestamp, updateDoc} from "firebase/firestore"
import { useState } from "react"
import { useParams,Link } from "react-router-dom"
import { auth, db } from "./firebase.config"
import Swal from 'sweetalert2'

const Add = () => {
   
    const { cat,id,q } = useParams()
    
    const [quantity,setQuantity] = useState()
    const [comment,setComment] = useState(`Added ${cat}`)
   
    const [isError, setError] = useState()
    const handleSumbit = (e) => {
        e.preventDefault()
        const docRef = doc(db, 'categories', id)
        const old = parseInt(q)
        const newnum = parseInt(quantity)
        const sum = old+newnum
        updateDoc(docRef, {
            quantity: sum,
            createdAt: serverTimestamp(),
            comment:comment
        }).then(() => {
            // success
            // alert(`Added ${quantity} ${cat}`)
            Swal.fire(
                'Success',
                `Added ${quantity} ${cat}`,
                'success'
              )
        }).catch(e => {
          
            Swal.fire(
                'error',
                `${e.message}`,
                'error'
              )
        })

        
   }
    return (
        <div className="main-form">
            
            <div className="card form-card">
               
                <form  onSubmit={handleSumbit}>
                    
               
              <br />
                    <h3>Add { cat}</h3> 
                    
        <div className="form-group">
                        <label htmlFor="">Quantity</label>
                        <input
                            required
                            type="number"
                            name="quantity"
                            id=""
                            value={quantity}
                            onChange = {(e)=>{setQuantity(e.target.value)}}
                        />         
           </div>
        <div className="form-group">
                        <label htmlFor="">Comment(Optional)</label>
                        <input
                            
                            type="text"
                            name="comment"
                            id=""
                            value={comment}
                            onChange = {(e)=>{setComment(e.target.value)}}
                        />         
           </div>

                   
                    <button className="submit">Continue</button>
                    {isError && <p className="error">{isError}</p>}  
               
        </form>
             </div>
        </div>
    )
}

export default Add