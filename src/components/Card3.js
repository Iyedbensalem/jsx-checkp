import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card3() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0665/2971/products/TheBoysHat_1.jpg?v=1599667926" />
    <Card.Body>
      <Card.Title>Hats</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Title>20 TND</Card.Title>
      <Button variant="primary">buy</Button>
    </Card.Body>
  </Card>
  )
}

export default Card3