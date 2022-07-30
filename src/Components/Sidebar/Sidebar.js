import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import styles from "./sidebar.module.css"
import { useEffect, useState } from 'react';
import cn from 'classnames'
import {Menu} from 'react-feather'
const Sidebar = () => {
    const menu = ["Dashboard", "Appoinments", "Tokens", "Profile"]
    const [width, setWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(true)


    const handleSideBar = ()=>{
        setOpen(true)
    
    }

    const updateDimensions= ()=>{
        setWidth(window.innerWidth)
        if(window.innerWidth < 600){
            setOpen(false)
        }

    }

    const sideDrawerDisplayCondition = ()=>{
        if(width < 600 && open){
            return true
        }
        else{
            return false
        }
    }

    const handleClose  = ()=>{
        setOpen(!open)
    }


    useEffect(()=>{
        window.addEventListener("resize",updateDimensions)
        return ()=>{
            window.removeEventListener("resize",updateDimensions)
        }

    },[])

    return (
        <>

            <Drawer
                anchor={'left'}
                open={open}
                onClose={handleClose}
                variant={width<600 ? "temporary":"permanent"}
            >

                <div className={cn(styles.container)} style={sideDrawerDisplayCondition? {display:"block"}:{display:"none"}}>

                    {menu.map(item => (
                        <div className={cn(styles.menuItem)}>
                            <p>{item}</p>
                        </div>
                    ))}



                </div>

            </Drawer>
            <div className={styles.hamburgerMenu} onClick={handleSideBar} style={width<600?{display:"block"}:{display:"none"}}>
                <Menu color='white'/>
            </div>
        

        </>



    );
}

export default Sidebar;