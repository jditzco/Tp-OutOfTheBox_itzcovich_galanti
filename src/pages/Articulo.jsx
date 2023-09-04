import './Articulo.css';
import Card from 'react-bootstrap/Card'
import NavBar from '../components/NavBar';

function Articulo() {
  return (
    <>
      <NavBar />
      <div className='row'>
        <div className='mitad'>

          <Card className='articulos' style={{ width: '50rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                El cambio climático se refiere a una variación significativa en los componentes del clima cuando se comparan períodos prolongados, pudiendo ser décadas o más. Por ejemplo, la temperatura media de la década del 50 con respecto a la temperatura media de la década del 90.

                El clima de la Tierra ha variado muchas veces a lo largo de su historia debido a cambios naturales, como las erupciones volcánicas, los cambios en la órbita de traslación de la tierra, las variaciones en la composición de la atmósfera, entre otros.

                Pero, desde los últimos años del siglo XIX, la temperatura media de la superficie terrestre ha aumentado más de 0,6 ºC. Este aumento está vinculado al proceso de industrialización iniciado hace más de un siglo y, en particular, a la combustión de cantidades cada vez mayores de petróleo y carbón, la tala de bosques y algunos métodos de explotación agrícola.

                Un informe del Panel Intergubernamental de Cambio Climático (IPCC) afirma que “el calentamiento desde los niveles preindustriales hasta la década 2006-2015 se estima en 0,87 °C”
                Los Gases de Efecto Invernadero (GEI), entre los que se encuentran el dióxido de carbono (CO2), el óxido nitroso (NO2) y el metano (CH4), tienen la propiedad de absorber y reemitir la radiación infrarroja que la Tierra recibe del sol. Gracias a ellos, ocurre un fenómeno conocido como efecto invernadero natural, que permite que la Tierra mantenga una temperatura promedio 15 ºC. Si no existiera este efecto, la temperatura promedio sería de -18 ºC.

                Si bien algunos de estos gases se encuentran naturalmente en la atmósfera, otros son producidos por el ser humano (de origen antrópico) como resultado de actividades vinculadas a la generación de energía, el transporte, el uso del suelo, la industria, el manejo de los residuos, etc. La acumulación de estos gases en la atmósfera potencia el efecto invernadero natural y esto se traduce en aumento de la temperatura del planeta.

                De acuerdo con el último inventario de Gases de Efecto Invernadero de la Argentina, el 53 % de las emisiones del país están vinculadas al sector energético; el 37 % agricultura, ganadería y silvicultura y otros usos de la tierra; el 6 % a la industria y el 4 % restante a los residuos..

                Los impactos que hoy sufre el planeta obligan a tomar medidas inmediatas que implican grandes esfuerzos económicos. En general, son los países que aún no han alcanzado su pleno desarrollo quienes sufren con mayor gravedad este fenómeno, a pesar de no ser los principales causantes. En este sentido, el cambio climático incrementa las desigualdades ya existentes entre los diferentes países, pudiendo generar un nuevo obstáculo al desarrollo sostenible de los países.

                Los científicos dejan claro que será necesario un gran cambio institucional y tecnológico para que el calentamiento global no supere los 2 ºC promedio sobre la superficie del planeta y para que exista una mayor probabilidad de evitar la ocurrencia de daños catastróficos e irreversibles.
              </Card.Text>
            </Card.Body>
          </Card>


        </div>
        <div className='mitad'>
          <Card style={{ width: '40rem'}}>
            <Card.Img variant="top" src="https://www.argentina.gob.ar/sites/default/files/pollution-2408234.jpg" />
          </Card>
        </div>
      </div>
    </>


  )
}


export default Articulo