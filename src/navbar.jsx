import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
      <>
        <Navbar variant="dark" style={{ backgroundColor: 'red' }}>
          <Container >
            <Navbar.Brand href="/">Joalheria Pasquini</Navbar.Brand>
            <Nav className="me-auto">
            <div className='svg'>
              <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30124038/jewelry1.png" alt="" width={200} height={60}/>
            </div>
              <div className='direita'>

              <Nav.Link href="/home">Entrar</Nav.Link>
              <Nav.Link href="/login">Cadastro Produto</Nav.Link>
              
              </div>
            </Nav>
          </Container>
        </Navbar>
    
      </>
    );
  }
  
  export default ColorSchemesExample;