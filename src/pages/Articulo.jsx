import './Articulo.css';
import Card from 'react-bootstrap/Card'
import NavBar from '../components/NavBar';
import { useParams } from 'react-router';
import { useState } from 'react';
import data from '../data/data';

function Articulo() {
  const [ejercicio] = useState(([...data].filter(({id}) => id === Number(useParams().articuloId)))[0])

  return (
    <>
      <NavBar />
      <div className='row'>
        <div className='mitad'>

          <Card className='articulos' style={{ width: '50rem' }}>
            <Card.Body>
              <Card.Title>{ejercicio.titulo}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ejercicio.descripcion}</Card.Subtitle>
              <Card.Text>
                {`ID: ${ejercicio.id}`}
    
              </Card.Text>
            </Card.Body>
          </Card>


        </div>
        <div className='mitad'>
          <Card style={{ width: '40rem'}}>
            <Card.Img variant="top" src={ejercicio.imagen} />
          </Card>
        </div>
      </div>
    </>


  )
}


export default Articulo