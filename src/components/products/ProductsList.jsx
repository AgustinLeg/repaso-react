import { products } from '../../assets/products'
import { ProductsCard } from './ProductsCard'

import estilos from './ProductList.module.css'

const ProductsList = () => {
  return (
    <>
      <h1 className={estilos.title}>Lista de productos</h1>
      <div className={estilos.container}>
        {products.map(({ id, image, title, description, price, category }) => (
          <ProductsCard
            key={`product-${id}`}
            image={image}
            title={title}
            description={description}
            price={price}
            category={category}
            id={id}
          />
        ))}
      </div>
    </>
  )
}

export default ProductsList
