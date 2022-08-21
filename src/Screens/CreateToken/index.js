import { useState } from "react";
import styles from "./createtoken.module.css"
import {axiosInstance} from "../../API/api"
import { getAuthToken } from "../../utils/helper";
import { CircularProgress } from "@mui/material";
import Form from "./Form";
const CreateToken = () => {
    const [cardUrl, setCardUrl] = useState("")
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(false)
    const [form, setForm] = useState(false)
    const handleChange = (e)=>{
        setCardUrl(e.target.value)
    }
    const config = {
        headers: {
            Authorization: getAuthToken()
        }
    }

    const handleUrlSubmit = ()=>{
        setLoader(true)
        const payload = {
            cardUrl
        }
        if(cardUrl){
            axiosInstance.post("/api/v1/cards/checkForCard",payload,config).then(res=>{
                console.log(res)
                setForm(true)
                setLoader(false)
                setError(null)
            }).catch(err=>{
                console.log(err)
                setError(err?.response?.data?.message)
                setLoader(false)
            })
            
        }

    }
    return ( 
    <>
    {!form &&     <div className={styles.body}>
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
                        <div className={styles.url} >
                            <p className={styles.errorHandler}>{error}</p>
                        </div>
                        <div className={styles.buttonArea}>
                            <button className={styles.create}
                            onClick={handleUrlSubmit}
                            disabled={loader}
                            >
                                Create
                            </button>
                            <div>
                            {loader? <CircularProgress color="primary" size={20}/> :""}
                            </div>
                        
                        </div>

                        

            </div>

        </div>
        
    </div>}
    
    {form && <Form cardUrl={cardUrl}/>}
    
    </> );
}
 
export default CreateToken;