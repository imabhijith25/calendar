import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./dashboard.module.css"
import { useSelector, useDispatch } from "react-redux";
const DashView = () => {
    const userData = useSelector((state)=>state.user)
    console.log(userData)
    return (

        <>
            
          
            <Sidebar></Sidebar>
            <div className={styles.body}>
                
            </div>


        </>

    );
}

export default DashView;