import './Product.css'

const Product = ({ product, onDelete }) => {
  return (
    <div className="product-item">
      <p>{product.title}</p>
      <button className='product-btn' onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  )
}

export default Product
