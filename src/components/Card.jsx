import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Ejercicio({ titulo, descripcion, dificultad, idEj }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}<br />
          Dificultad: {dificultad}
        </Card.Text>
        <Button variant="success"><Link to={`/Articulo/${idEj}`} className='link'>Ingresar</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Ejercicio;