import React, { useState, useEffect } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { formatPrice } from '../../util/format'
import api from '../../services/api'

import { ProductList } from './styles'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('products')
        const data = response.data.map((product) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }))
        setProducts(data)
      } catch (e) {
        console.log(e)
      }
    }
    getProducts()
  }, [])
  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart siz={16} color="#FFF" /> 5
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
