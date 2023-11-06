import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card4() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2023/4/301366024/NZ/XX/AC/1971563/boys-fashion-jeans.jpg" />
    <Card.Body>
      <Card.Title>Pants</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Title>65 TND</Card.Title>
      <Button variant="primary">buy</Button>
    </Card.Body>
  </Card>
  )
}

export default Card4