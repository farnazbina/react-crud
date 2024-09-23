import { useState } from 'react'

import './AddProduct.css'

const AddProduct = ({ onAddProduct }) => {
  const [title, setTitle] = useState('')

  const submitForm = (event) => {
    event.preventDefault()

    onAddProduct({ title })

    setTitle('')
  }

  return (
    <div>
      <form className="add-product-form" onSubmit={submitForm}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Add New Product"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="form-btn">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddProduct
