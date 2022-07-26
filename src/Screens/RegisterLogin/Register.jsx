import styles from "./registerLogin.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { axiosInstance } from "../../API/api";
import { setAuthToken } from "../../utils/helper";
const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState()
    const [error, setError] = useState(null)
    //#6a62d2



    const handleSubmit = () => {
        const payload = {
            email,
            name,
            password
        }
        axiosInstance.post("/api/v1/authentication/register", payload).then(res => {
            if (res?.data?.success) {
                setAuthToken(res?.data?.token)
                navigate("/dashboard", { replace: true })
            }
        }).catch(err => {
            const errorType = err?.response?.data?.type
            if(errorType=="email"){
                setError({...error, "email":err?.response?.data?.message})
            }
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
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />

                            {
                                error?.email && 
                                <>
                                    <div className={styles.error}>
                                        <p>{error?.email}</p>
                                    </div>
                                </>
                            }
                 

                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.inputarea}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />

                            <input
                                type="text"
                                placeholder="Full Name"
                                className={styles.inputarea}
                                onChange={(e) => {
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