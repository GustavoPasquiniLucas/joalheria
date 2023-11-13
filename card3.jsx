import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample3() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/9463359/pexels-photo-9463359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Brinco</Card.Title>
        <Card.Text>
        Brinco 
        </Card.Text>
        <Button variant="primary">R$3000,00</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample3;