import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { useDispatch } from 'react-redux'
import { removeProduct, updateProduct } from '../store/Reducer/Product/ProductSlice'


const AdminCardProduct = ({data}) => {

    const dispatch = useDispatch()

   
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState();
  
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const [type, setType] = useState("");
    //const [option, setOption] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const [error, setError] = useState("");
  
    const handleClose = () => setShow(false);

    const handleShow = (data) => {
        setDescription(data.description);
        setName(data.name);
        setType(data.type);
        setPrice(data.price);
        setId(data.id);

        setShow(true)
    };


    const handelSubmit = (e) => {
      e.preventDefault();
  
      const data = {
        id,
        name,
        type,
        price,
        description,
        image,
      };
      
      if(!data.image){
        setError("Image not found")
      }else{
        setError("")
        dispatch(updateProduct(data))
        
      }
  
    }

    const handelDelete = (id) => {
        if(id){
            const deleteProduct = async ()=>{

                await dispatch(removeProduct(id))
            }

         deleteProduct()
        }
    }
    
    const product = data.map((p)=> {
        //const option = JSON.parse(p.options)
        
        return (
        <Card style={{ width: '18rem',}} key={p.id}>

        <Card.Img variant="top" src={p.image_url} />

        <Card.Body>
            <Card.Title>
                {p.name}
            </Card.Title>
            <Card.Text style={{overflow:"hidden",height:"115px", wordBreak:"break-word"}} >
            {p.description}

            </Card.Text>
            <Button className='w-100 mb-2' variant="primary"  onClick={()=>handleShow({"id":p.id, "name":p.name ,"type":p.type , "description":p.description , "price":p.price , "image":p.image_url})}>edit</Button>
            <Button className='w-100' variant="danger" onClick={()=>handelDelete(p.id)} >delete</Button>
        </Card.Body>
      
        </Card>
        )
    })


  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Form method="post" encType="multipart/form-data" onSubmit={handelSubmit}>
          <Modal.Header closeButton>
            <Modal.Title> {error ? <span className='text-danger'> {error}</span> : "Update Product "} </Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <Form.Group className="mb-3 " controlId="name">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" 
                onChange={(e) => setName(e.target.value)} value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="type">
              <Form.Label>type</Form.Label>
              <Form.Control type="text" placeholder="Enter type" 
                onChange={(e) => setType(e.target.value)} value={type}
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
              <Form.Control type="text" placeholder="Enter Description" value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="price">
              <Form.Label>price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" 
                onChange={(e) => setPrice(e.target.value)} value={price} 
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="image">
              <Form.Label>image</Form.Label>
              <Form.Control type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required={true}
              />
            </Form.Group>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" type="reset" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary" type="submit"  onClick={handelSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
        {product}
    </>
  )
}

export default AdminCardProduct