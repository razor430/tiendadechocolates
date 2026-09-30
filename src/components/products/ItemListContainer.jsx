import { useState, useEffect } from "react";
import ItemList from "./ItemList"

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('/datos/productos.json')
      .then(res => res.json())
      .then(datos => setProductos(datos))
      .catch(error => console.log(error))
  },[])
  
  return <ItemList productos ={productos} />
}

export default ItemListContainer;