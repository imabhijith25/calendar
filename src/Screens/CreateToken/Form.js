import styles from "./createtoken.module.css"
import {Upload,} from 'react-feather'
const Form = () => {
    return (

        <>
            <div className={styles.body}>
                <div className={styles.formContainer}>
                    <div className={styles.urlInfo}>
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
                                    style={{ resize: "none" }}
                                    className={styles.inputArea}

                                />
                            </div>

                        </div>


                        <div className={styles.formControl}>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: "100%" }}>
                                    <p>Street</p>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <p>District</p>
                                </div>

                            </div>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <input
                                    type="text"
                                    name="street"

                                    placeholder="Street 10"
                                    className={styles.inputArea}

                                />
                                <input
                                    type="text"
                                    name="district"

                                    placeholder="Trivandrum"
                                    className={styles.inputArea}

                                />

                            </div>
                            


                        </div>

                        <div className={styles.formControl}>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: "100%" }}>
                                    <p>State</p>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <p>Pincode</p>
                                </div>

                            </div>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <input
                                    type="text"
                                    name="state"

                                    placeholder="Goa"
                                    className={styles.inputArea}

                                />
                                <input
                                    type="text"
                                    name="pincode"

                                    placeholder="123"
                                    className={styles.inputArea}

                                />

                            </div>
                            


                        </div>
                        <div className={styles.formControl}>
                            <p>Country</p>
                        <input
                                    type="text"
                                    name="country"

                                    placeholder="India"
                                    className={styles.inputArea}

                                />
                        </div>

                        <div className={styles.formControl}>
                            <div className={styles.uploadContainer}>
                               <Upload/>
                                <p>Click to upload a photo</p>

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