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
                        style={{ height: "50vh", objectFit: "contain" }} />  
                        <Carousel.Caption>
                        <h3>Marroc</h3>
                        <p>Delicioso bocadito de crema de maní.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src="/assets/fotos/mecano.jpg"
                        className="d-block w-100"
                        alt="Chocolate"
                        style={{ height: "50vh", objectFit: "contain" }} />
                        <Carousel.Caption>
                        <h3>Mecano</h3>
                        <p>Riquisima tuerca de chocolate rellna de dulce de leche.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src="/assets/fotos/bocadito.jpg"
                        className="d-block w-100"
                        alt="Chocolate"
                        style={{ height: "50vh", objectFit: "contain" }} />
                        <Carousel.Caption>
                        <h3>Bocadito</h3>
                        <p>
                            Bocadito de chocolate relleno de dulce de leche.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Container>
        </>
    )
}
export default Home;