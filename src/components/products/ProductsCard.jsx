import './Card.css'

export const ProductsCard = ({
  image,
  title,
  price,
  category,
  description,
  id,
}) => {
  // const { image, title, price, category, description, id } = product
  // if(price){
  //   consol
  // }

  return (
    <div className="card__container">
      <img src={image} />
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p
        className="price"
        style={{
          color: price > 50 ? 'red' : 'green',
          backgroundColor: id === 1 && 'orange',
        }}
      >
        {price}
      </p>
      <p className="category">{category}</p>
    </div>
  )
}
