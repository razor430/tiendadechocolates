import { useState } from "react"
import estilo from "./Item.module.css"
import { Link } from "react-router-dom";


const Item = ({id,title, price, image, mostrar = true}) => {

  const [contador, setContador] = useState(0);
  const incrementar = () => { setContador(contador + 1) };
  
  const decrementar = () => {
    if(contador > 0) 
      setContador(contador - 1) 
  };

  return (
    <div className={estilo.card}>
      <div className={estilo.thumbnail}>
      <h2>
        {title}: AR${price}
      </h2>
      <img src={image} alt={title} />
      </div>
      <div className={estilo.botones}>
        <button onClick={decrementar}> - </button>
        <p className={estilo.contador}>{contador}</p>
        <button onClick={incrementar}> + </button>
      </div>
      {mostrar && <Link className="btn btn-outline-dark  align-self-center" to={`/producto/${id}`}>ver detalle</Link>}
  
    </div>
  );
}

export default Item