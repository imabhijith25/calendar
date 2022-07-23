import styles from "./registerLogin.module.css"
import { Link } from "react-router-dom";
const Register = () => {
    //#6a62d2
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
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        className={styles.inputarea}
                        />

                        <input
                            type="text"
                            placeholder="Full Name"
                            className={styles.inputarea}
                        />

                        <button>
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