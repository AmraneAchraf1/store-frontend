import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./sidebar.module.css"

const SideBar = () => {
  
  return (
  
      <aside>
          <div className={styles.content}>

          <div className={styles.logo}>
            <span>Aromatic herbs</span>
          </div>

              <nav>
                    <ul>
                      <li> <NavLink to="/admin/products" end className={({isActive}) => isActive ? styles.active : ""} >Products</NavLink> </li>

                      <li> <NavLink to="/admin/users" className={({isActive}) => isActive ? styles.active : ""}>Users</NavLink> </li>
                    </ul>
              </nav>

          </div>
      </aside>
    
  )

};


export default SideBar