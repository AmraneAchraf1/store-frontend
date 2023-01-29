import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
const CardProduct = ({data}) => {


    const product = data.map((p)=> {
        return (
            <Card style={{ width: '18rem' }} key={p.id}>
              <Card.Img variant="top" src={p.image_url} />
              <Card.Body>
                <Card.Title>
                    {p.name}
                </Card.Title>
                <Card.Text>
                  {p.description}
                </Card.Text>
                <Button variant="primary">Add To Card</Button>
              </Card.Body>
            </Card>
        )
    })

  return (
<>
    {product}
</>
  )
}

export default CardProduct