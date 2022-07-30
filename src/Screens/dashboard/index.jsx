import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./dashboard.module.css"

const DashView = () => {
    return (

        <>
            
          
            <Sidebar></Sidebar>
            <div className={styles.body}>
                hi
            </div>


        </>

    );
}

export default DashView;