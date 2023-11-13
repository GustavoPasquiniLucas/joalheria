import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/5411883/pexels-photo-5411883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Colar 1</Card.Title>
        <Card.Text>
         Colar 
        </Card.Text>
        <Button variant="primary">R$1500,00</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;