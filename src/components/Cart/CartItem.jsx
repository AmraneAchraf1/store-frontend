import React from 'react'
import { Card } from 'react-bootstrap'
import styles from "./cart_item.module.css"
const CartItem = ({data, isLoading}) => {

    const items = data.map(item => {
        
        return (
            <Card key={item.id} className="mb-3">
            
                <div className={styles.cart_body}>
                    
                    <div >
                    <img src={item.image_url} style={{width:"12rem", maxWidth:"200px" , maxHeight:"200px"}} alt={styles.name}/>
                    </div>

                    <div className={styles.product_content} >

                        <div className={styles.product_info} >
                            <span> {item.name} </span>
                            <span>{item.price} MAD</span>
                            
                        </div>

                        <span className={styles.total}  >total : {item.total} MAD</span>

                        <div className={styles.product_details} > 
                            <p> {item.description} </p>

                            <div className={styles.quantity}>
                            <label>quantity : </label>
                            <input type="text" defaultValue={item.quantity} readOnly/>
                            </div>
                        </div>


                    </div>
                    
                </div>
            </Card>
        )
    })


  return (
        <>
            {items}
        </>
  )
}

export default CartItem