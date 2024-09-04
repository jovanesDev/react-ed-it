import { useParams, Navigate } from 'react-router-dom'
import { products } from '../../constants/products'

const Product = () => {
  const { id } = useParams()
  //123123123123123123123123
  //Brake hasta 20:35hs 
  const producto = products.find((p) => p.id === Number(id))

  if(!producto){
    return <Navigate to="/producto-inexistente" />
  }

  if(producto){
    console.log('esto es el producto',producto)
  }
  // 1 y '1' 

  // {name:Profe}



  return (
    <div>
      <h1>Detalle del Producto</h1>

      <img style={{margin:'28px auto',width:'600px',objectFit:'cover'}} src={producto.img} alt={producto.name} />
    </div>
  )
}

export default Product

//www.google.com/?q=messi&&camiseta=argentina => query 