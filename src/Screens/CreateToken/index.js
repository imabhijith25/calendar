import { useState } from "react";
import styles from "./createtoken.module.css"
const CreateToken = () => {
    const [cardUrl, setCardUrl] = useState("")
    const handleChange = (e)=>{
        setCardUrl(e.target.value)
    }
    return ( 
    <>
    <div className={styles.body}>
        <div className={styles.formContainer}>
            <h4>Create your page</h4>
            
            <div className={styles.formCard}>
                        <p>Enter a link name</p>
                        <div>
                            <input
                                type="text"
                                name="cardUrl"
                                value={cardUrl}
                                placeholder="Eg: drJosephClinic"
                                className={styles.inputArea}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.url}>
                            <p>Your url will be: <b>tropic.com/u/{cardUrl}</b></p>
                        </div>
                        <div className={styles.buttonArea}>
                            <button className={styles.create}>Create</button>
                        </div>

            </div>

        </div>
        
    </div>
    
    
    </> );
}
 
export default CreateToken;