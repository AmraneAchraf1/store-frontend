import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminCardProduct from "../../components/AdminCardProduct";

import { addProducts, getProducts } from "../../store/Reducer/Product/ProductSlice";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  const [show, setShow] = useState(false);
  
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  //const [option, setOption] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      type,
      price,
      description,
      image,
    };
    
    if(data){
      dispatch(addProducts(data))
    }

  }



  useEffect(() => {

    const product = async () =>{
      await dispatch(getProducts());
    }

    product()
  }, [dispatch]);

 

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form method="post" encType="multipart/form-data" onSubmit={handelSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <Form.Group className="mb-3 " controlId="name">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" 
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="type">
              <Form.Label>type</Form.Label>
              <Form.Control type="text" placeholder="Enter type" 
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3 " controlId="option">
              <Form.Label>option</Form.Label>
              
              <Form.Control type="text" placeholder="Enter first name"
                onChange={(e) => setOption(e.target.value)}
               />
            </Form.Group> */}

            <Form.Group className="mb-3 " controlId="description">
              <Form.Label>description </Form.Label>
              <Form.Control type="text" placeholder="Enter Description" 
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="price">
              <Form.Label>price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" 
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="image">
              <Form.Label>image</Form.Label>
              <Form.Control type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" type="reset" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary" type="submit"  onClick={handleClose}>
              Add Product
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Container
        fluid
        className="pt-3 d-flex "
        style={{ flexDirection: "column" }}
      >
        <Button className="w-25 m-auto" type="button" onClick={handleShow}>
          Add Product
        </Button>

        <div className="d-flex  pt-3 gap-5">
          {product.isLoading ? (
            "Loading...."
          ) : (
            <AdminCardProduct
              data={product.data}
              isLoading={product.isLoading}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default AdminProducts;
