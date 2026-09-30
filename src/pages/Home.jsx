import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"

const Home = () =>{
    return (
        <>
            <div style={{backgroundImage: `url("/assets/fotos/cacao-calidad-fondo.jpg")`}}  class="bg-light p-5 rounded-0 w-100 m-0 jumbo">
                <h1 class="display-4 mio">Bienvenidos a Tienda de Chocolates.</h1>
                <p class="lead"></p>
                <hr class="my-4" />
                <p className="mio">Estos son nuestros favoritos</p>
                <a class="btn btn-outline-dark btn-lg" href="#" role="button">Aprender más</a>
            </div>
            <Container>
                <Carousel>
                    <Carousel.Item>
                       <img
                        src="/assets/fotos/marroc.jpg"
                        className="d-block w-100"
                        alt="Chocolate"
                        style={{ height: "60vh", objectFit: "cover" }}
  />  
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Container>
        </>
    )
}
export default Home;