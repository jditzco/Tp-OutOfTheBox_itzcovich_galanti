import { Container, Row, Col, Form, InputGroup, Button, ButtonGroup } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Ejercicio from '../components/Ejercicio'
import { useEffect, useRef, useState } from 'react'
import data from '../data/data'

const ListadoArticulos = () => {
    const articulos = data;

    // Lista de ejercicios
    const [listaArticulos, setListaArticulos] = useState([])

    // Los ejercicios de la lista que se están mostrando en pantalla
    const [articulosActivos, setArticulosActivos] = useState([])
    // Filtros
    const [tema, setTema] = useState(0)
    const [busqueda, setBusqueda] = useState('')

    const buscarInput = useRef()

    useEffect(() => async() => {
        setListaArticulos(articulos)
        setArticulosActivos(articulos)
    }, [])

    useEffect(() => { // Filtrar
        var lista = [...listaArticulos]
        if (tema) lista = lista.filter(ej => ej.tema === tema)
        if (busqueda) {
            lista = lista.filter((ej) => (
                ej.titulo.toUpperCase().includes(buscarInput.current.value.toUpperCase())
            ))
        }
        setArticulosActivos(lista)
    }, [busqueda, tema])

    const handleClick = e => setTema(Number(e.target.value))
    const handleChange = e => setBusqueda(e.target.value)

    return (
        <>
            <NavBar />
            <Container fluid className='app-container'>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={9}>
                        <br/>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Buscar..."
                                value={busqueda}
                                onChange={handleChange}
                                ref={buscarInput} />
                            <Button variant="secondary"><i className="bi bi-search"></i></Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className='dificultades-container'>
                        <h4>Problemas</h4>
                        <Button variant="primary" value={0} onClick={handleClick} className='dificulty-button'>Reset</Button>
                        <ButtonGroup aria-label="Basic example" className='dificulty-button'>
                            <Button variant="success" value={1} onClick={handleClick}>Calentamiento</Button>
                            <Button variant="warning" value={2} onClick={handleClick}>Contaminacion</Button>
                            <Button variant="danger" value={3} onClick={handleClick}>inundaciones</Button>
                        </ButtonGroup>
                    </Col>
                    <Col sm={9} className='ejercicios-container'>
                        {articulosActivos.map((ej, key) => (
                            <Ejercicio key={key} idEj={ej.id} titulo={ej.titulo} descripcion={ej.descripcion} tema={ej.tema} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListadoArticulos
