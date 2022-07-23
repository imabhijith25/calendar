import styles from "./registerLogin.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    //#6a62d2
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const onHandleSubmit = ()=>{
        console.log(email + password)
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