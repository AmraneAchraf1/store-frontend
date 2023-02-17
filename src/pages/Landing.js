import React, {  useEffect, useRef } from "react";


import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Route, useLocation, useResolvedPath } from "react-router-dom";

import Button from "../components/Button/Button";
import CardProduct from "../components/CardProduct/CardProduct";
import Carousel from "../components/Carousel/Carousel";
import HeadLine from "../components/HeadLine/HeadLine";
import Nav from "../components/Nav/Nav";
import Qoba from "../components/Qoba";
import { getProducts } from "../store/Reducer/Product/ProductSlice";

import styles from "./landing.module.css";


const Landing = () => {

  //  Refs for navigation and scrolling
  const homeRef = useRef(null)
  const eventsRef = useRef(null)
  const lastProductsReef = useRef(null)
  
  const dispatch = useDispatch()
  const {product} = useSelector((state)=> state)

  useEffect(()=> {
      dispatch(getProducts())
  },[dispatch])

  return (
    <>
      <Nav ref={{homeRef, eventsRef, lastProductsReef}} />
      <Container>
        {/* Home section */}
        <section className={styles.home} id="home" name="home" ref={homeRef}>
          <div>
            <h1>
              COOP <br /> DAHADDA
            </h1>

            <p>
              Debdou is a town in Morocco. It is known for its multi-ethnic
              population, including Berbers and Moroccan Jews. The Ait Urtajjen.
            </p>
            <Button.Group>
              
                <Link to="products" >
                <Button >Shop now</Button>
                
                
                </Link>
              
                <Link to="" >
                <Button direction={"left"} variant={"black"}>Contact Us</Button>
                
                
                </Link>
            </Button.Group>
          </div>
          
          <div>
            <Qoba className={styles.qoba} />
          </div>
        </section>
      </Container>

      <HeadLine ref={eventsRef}>
      Offres et Evénements
      </HeadLine>

    <Container>
    {/* offers Section */}
        <Carousel/>
        <p className={styles.paragraph}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente autem velit et expedita. Praesentium necessitatibus deleniti culpa consequuntur quod nulla, accusamus autem veniam ex non ad provident voluptates quam. </p>
        <Button>Voir Plus</Button>
    </Container>

    <HeadLine ref={lastProductsReef}>
    Dernier Produits
      </HeadLine>
    <Container >

      <CardProduct data= {product.data} newProduct={true} grid={true}/>

    </Container>
    </>
  );
};

export default Landing;
