import styles from "./registerLogin.module.css"
import { Link } from "react-router-dom";
import {useState} from 'react'
import { axiosInstance } from "../../API/api";
const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName]  = useState("")
    const [password, setPassword] = useState()
    //#6a62d2



    const handleSubmit = ()=>{
        const payload = {
            email,
            name,
            password
        }
        axiosInstance.post("/api/v1/authentication/register",payload).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        
    }
    return ( 
        <>
        <div className={styles.background}>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Register</h3>
                    <p>Already have an account? <Link to="/login">Sign in</Link></p> 

                    <div className={styles.input}>
                        <input
                        type="text"
                        placeholder="Email"
                        className={styles.inputarea}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        className={styles.inputarea}
                        onChange = {(e)=>{
                            setPassword(e.target.value)
                        }}
                        />

                        <input
                            type="text"
                            placeholder="Full Name"
                            className={styles.inputarea}
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                        />

                        <button
                        onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                        

                    </div>


                   <div className={styles.input}>
                    <div className={styles.cardHeader}>
                        <p>Or</p>

                    </div>
                    <button className={styles.google}>
                            Sign Up With Google
                    </button>
                   </div>
                </div>
                 
            </div>


        </div>
        
        </>
     );
}
 
export default Register;