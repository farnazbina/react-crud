import React, { useEffect, useState } from "react"
import ProductList from "./components/ProductList/ProductList"
import AddProduct from "./components/AddProduct/AddProduct"

const App = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getData = async () => {
            const response = await fetch('http://localhost:8080/products')

            const data = await response.json()

            setProducts(data)
        }   
        getData()
    },[])

    const handleAddNewProduct = async (title) => {
        const response = await fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(title)
        })

        const data = await response.json()

        setProducts([...products, data])
    }

    const handleDeleteProduct = async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE'
        })

        setProducts(products.filter((item) => item.id !== id))
    }

    return (
        <div className="my-app">
            <h2>React CRUD app</h2>
            <AddProduct onAddProduct={handleAddNewProduct} />
            <ProductList products={products} onDelete={handleDeleteProduct}/>
        </div>
    )
}

export default App;