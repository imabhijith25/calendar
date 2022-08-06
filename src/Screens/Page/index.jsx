import { useEffect } from "react";
import { axiosInstance } from "../../API/api";
import { getAuthToken } from "../../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../../Redux/userSlicer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./page.module.css"
const Page = ({ children }) => {
    //this is for protected routing
    const dispatch = useDispatch()
    const config = {
        headers: {
            Authorization: getAuthToken()
        }
    }
    useEffect(() => {
        axiosInstance.get("/api/v1/authentication/getProfile", config).then((res) => {
            console.log(res)
            dispatch(setUserData(res?.data?.data))
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (

        <>
            <div className={styles.bodyLayout}>
                <Sidebar></Sidebar>
                <div className={styles.children}>
                    {children}
                </div>
            </div>

        </>

    );
}

export default Page;