import React, { forwardRef } from 'react'
import styles from './nav.module.css';

import {AiOutlineGift, AiOutlineHome} from 'react-icons/ai';
import {FiShoppingBag} from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';


const Nav = (ref, props) => {
  const navigate = useNavigate()

  const handelScroll =  (section)=>{
    if(section === "home"){
      
      props.homeRef.current?.scrollIntoView({ behavior: 'smooth' }) 
      navigate("")
    }else if(section === "events"){

    props.eventsRef.current?.scrollIntoView({ behavior: 'smooth',  }) 
    navigate("events")
    }else if(section === "lastProducts"){

      props.lastProductsReef.current?.scrollIntoView({ behavior: 'smooth',  }) 
      navigate("lastProducts")
      }
  }
  return (
    <nav className={styles.nav} >

        <ul className={styles.links}>
            <li>

            <NavLink end to={""} className={({isActive}) => isActive ? styles.active : "" }  onClick={()=>handelScroll("home")}> <AiOutlineHome/> </NavLink>
                
            </li>
            <li>
            <NavLink to={"events"}  className={({isActive}) => isActive ? styles.active : ""} onClick={()=>handelScroll("events")}> <AiOutlineGift/> </NavLink>
                
            </li>
            <li>
            <NavLink to={'lastProducts'} className={({isActive}) => isActive ? styles.active : ""}  onClick={()=>handelScroll("lastProducts")}>   <FiShoppingBag/> </NavLink>
            </li>
        </ul>
    
    </nav>
  )
}

export default forwardRef(Nav)