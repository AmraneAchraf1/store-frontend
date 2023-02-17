import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../store/Reducer/Cart/CartSlice";
import styles from "./card.module.css";

import Button from "../Button/Button";
import { FiShoppingCart } from "react-icons/fi";

const CardProduct = ({ data, newProduct, grid }) => {
  const { isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addProductToCart = (id) => {
    if (id) {
      dispatch(addToCart(id));
    }
  };

  const product = data.map((p) => {
    return (
      <div key={p.id} className={styles.cart}>
        <div className={styles.top}>
          {newProduct ? <div className={styles.new}>New</div> : ""}
          <div className={styles.image}>
            <img src={p.image_url} alt={p.name} />
          </div>
        </div>

        <div className={styles.price}>
            {p.price} <span>MAD</span>
        </div>

        <div className={styles.info}>
            <h1>
                {p.name}
            </h1>

            <p title={p.description}>
              {p.description}  
            </p>
        </div>

        <div className={styles.btn}>
        <Button variant={"black"} onClick={()=> addProductToCart(p.id)} disabled={isLoading} > <FiShoppingCart /> Add To Cart</Button>
        </div>
      </div>
    );
  });

  return <div className={grid ? styles.grid : ""}>{newProduct ? product.reverse().slice(0,6): product}</div>;
};

export default CardProduct;
