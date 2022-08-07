import styles from "./createtoken.module.css"
const Form = () => {
    return ( 

        <>
            <div className={styles.body}>
        <div className={styles.formContainer}>
            <div>
            <p>Great!! Your url is available. Fill your organization details</p>
            </div>
           
            <div className={styles.formCard}>

                <div className={styles.formControl}>
                <p>Name</p>
                        <div>
                            <input
                                type="text"
                                name="name"
                              
                                placeholder="Joseph"
                                className={styles.inputArea}
                           
                            />
                        </div>

                </div>

                <div className={styles.formControl}>
                <p>Description</p>
                        <div>
                            <textarea
                              
                                name="description"
                              
                                placeholder="I am a really cool dentist!!"
                                style={{resize:"none"}}
                                className={styles.inputArea}
                           
                            />
                        </div>

                </div>


                        <div className={styles.url}>
                            <p>Your url will be: <b>tropic.com/u/</b></p>
                        </div>
                        <div className={styles.url} >
                            <p className={styles.errorHandler}></p>
                        </div>
                        <div className={styles.buttonArea}>
                            <button className={styles.create}

                            >
                                Create
                            </button>
                 
                        
                        </div>

                        

            </div>

        </div>
        
    </div>
        
        
        
        
        </>
     );
}
 
export default Form;