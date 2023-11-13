import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Anel</Card.Title>
        <Card.Text>
         Anel
        </Card.Text>
        <Button variant="primary">R$1000,00</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample2;