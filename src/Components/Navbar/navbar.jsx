import React,{useState} from 'react'
import styles from "./navbar.module.css"
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai"
import Logo from "../../images/logo.png"
function Navbar() {
    const [nav,setNav]=useState(false)
    return (
        <header className={styles.navbar}>
            <img src={Logo} alt=''></img>
            <nav>
                <ul className={nav?[styles.menu,styles.active].join(' '):styles.menu} >
                    <li>
                        <a href='#'>Learn more</a>
                    </li>
                    <li>
                        <a href='#'>Log in</a>
                    </li>
                    <li>
                        <a href='#'>Sign up</a>
                    </li>
                   
                    <li>
                       <AiOutlineSearch size={25} style={{marginTop:'6px'}}></AiOutlineSearch>
                    </li>
                    <li>
                        <AiOutlineUser size={25} style={{marginTop:'6px'}}></AiOutlineUser>
                    </li>

                </ul>
            </nav>
            <div className={styles.mobile_btn} onClick={()=>setNav(!nav)}>
               {nav?<AiOutlineClose></AiOutlineClose>: <AiOutlineMenu size={25}></AiOutlineMenu>}

            </div>

        </header>
    )
}

export default Navbar