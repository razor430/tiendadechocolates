import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const DetalleProducto = () =>{
    const {id} = useParams();
    const [producto, setProducto] = useState([]);


    useEffect(() => {
        fetch('/datos/productos.json')
        .then(res => res.json())
        .then(datos => {
            const encontrado = datos.find(p => p.id === Number(id));
            setProducto(encontrado);
        })
        .catch(error => console.log(error))
    },[id])
    return (
        <>
            <Container className="d-flex justify-content-center mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.image} />
                    <Card.Body>
                        <Card.Title>{producto.title}</Card.Title>
                        <Card.Text>
                            ${producto.price}
                        </Card.Text>
                        <Button variant="outline-dark">añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </Container>

        </>
    )
}
export default DetalleProducto;