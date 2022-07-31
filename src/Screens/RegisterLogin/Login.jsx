import styles from "./registerLogin.module.css"
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../../API/api";
import { setAuthToken } from "../../utils/helper";
const Login = () => {
    //#6a62d2
    const navigate = useNavigate()
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const onHandleSubmit = ()=>{
        const payload = {
            email,
            password
        }
       axiosInstance.post("/api/v1/authentication/login", payload).then(res=>{
        if(res?.data?.success){
            setAuthToken(res?.data?.token)
            navigate("/dashboard", { replace: true })
        }

       }).catch(err=>{
        console.log(err)

       })
    }
    return (
        <>
            <div className={styles.background}>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h3>Login</h3>
                        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>

                        <div className={styles.input}>
                            <input
                                type="text"
                                placeholder="Email"
                                className={styles.inputarea}
                                onChange={(e)=>{
                                    SetEmail(e.target.value)
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.inputarea}
                                onChange={(e)=>{
                                    SetPassword(e.target.value)
                                }}
                            />

                            <button
                            onClick={onHandleSubmit}
                            >
                                Login
                            </button>


                        </div>


                        <div className={styles.input}>
                            <div className={styles.cardHeader}>
                                <p>Or</p>

                            </div>
                            <button className={styles.google}>
                                Login With Google
                            </button>
                        </div>
                    </div>

                </div>


            </div>

        </>
    );
}

export default Login;