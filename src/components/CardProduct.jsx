import React from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { addToCart } from "../store/Reducer/Cart/CartSlice";

const CardProduct = ({ data }) => {

  const { isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const product = data.map((p) => {
    return (
      <Card style={{ width: "18rem" }} key={p.id}>
        <Card.Img variant="top" src={p.image_url} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Text style={{ fontWeight: "bold" }}>
            <span style={{ fontSize: "20px" }}> {p.price}</span> MAD
          </Card.Text>
          <Card.Text>{p.description}</Card.Text>

          <Button
            variant="primary"
            className="w-100 d-flex align-items-center justify-content-center gap-2"
            disabled={isLoading}

            onClick={() =>
              addProductToCart({
                id: p.id,
                name: p.name,
                description: p.description,
                price: p.price,
              })
            }
          >
            <RiShoppingCart2Fill /> {isLoading ? "Loading..." : "Add To Cart "}
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return <>{product}</>;
};

export default CardProduct;
