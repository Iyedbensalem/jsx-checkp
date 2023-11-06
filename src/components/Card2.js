import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card2() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/413wMTyzNAL._AC_SR300,300.jpg" />
    <Card.Body>
      <Card.Title>shoes</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Title>100 TND</Card.Title>
      <Button variant="primary">buy</Button>
    </Card.Body>
  </Card>
  )
}

export default Card2