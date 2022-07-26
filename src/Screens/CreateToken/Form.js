import styles from "./createtoken.module.css"
import {useState} from 'react'
import {Upload,} from 'react-feather'
import {storage} from "../../Firebase"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getAuthToken } from "../../utils/helper";
import { axiosInstance } from "../../API/api";
const Form = ({cardUrl}) => {

    const [profilePhoto, setProfilePhoto] = useState(null)
    const [details, setDetails] = useState(
        {
            name:"",
            description:"",
            street:"",
            district:"",
            state:"",
            pincode:"",
            country:""


        }
    )

    const handleDetails = (e)=>{
        setDetails({...details,[e.target.name]:e.target.value})

    }

    const handleSubmit=()=>{
        const config = {
            headers: {
                Authorization: getAuthToken()
            }
        }
        const payload = {
            name:details.name,
            description:details.description,
            cardUrl,
            address: `${details.street} ${details.state} ${details.district} ${details.state} ${details.pincode}`,
            profilePicUrl:profilePhoto

        }

        axiosInstance.post("/api/v1/cards/addCard",payload,config).then(res=>{
            alert("success")
        }).catch(err=>{
            alert("error")
        })

    }
    const handleFileClick = ()=>{
        document.getElementById("file").click()
    }

    const handleFileUpload = (e)=>{
       
        const file = e.target.files[0]
        if (!file){
            return null
        }
        const storageRef = ref(storage, `files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log("hii");
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
            setProfilePhoto(downloadURL)
          });
        }
      );

    }
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
                                    onChange={handleDetails}
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
                                    onChange={handleDetails}
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
                                    onChange={handleDetails}
                                    placeholder="Street 10"
                                    className={styles.inputArea}

                                />
                                <input
                                    type="text"
                                    name="district"
                                    onChange={handleDetails}
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
                                    onChange={handleDetails}
                                    placeholder="Goa"
                                    className={styles.inputArea}

                                />
                                <input
                                    type="text"
                                    name="pincode"
                                    onChange={handleDetails}
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
                                    onChange={handleDetails}
                                    placeholder="India"
                                    className={styles.inputArea}

                                />
                        </div>

                        <div className={styles.formControl}>
                        <input type="file" id="file" name="file" className={styles.hiddenFile} onChange={handleFileUpload}></input>
                            <div className={styles.uploadContainer} onClick={handleFileClick}>
                                {!profilePhoto &&
                                <>
                                    <Upload />
                                    <p>Click to upload a photo</p>
                                </>


                                }
                                {profilePhoto &&  <img src={profilePhoto} className={styles.profilePhoto}/>}
                                

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
                            onClick={handleSubmit}

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