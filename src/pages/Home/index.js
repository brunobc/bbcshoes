import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { MdAddShoppingCart } from 'react-icons/md'

import { formatPrice } from '../../util/format'
import api from '../../services/api'

import * as CartActions from '../../store/modules/cart/actions'

import { ProductList } from './styles'

const Home = ({ dispatch }) => {
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

  const handleAddProduct = (product) => {
    dispatch(CartActions.addToCart(product))
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
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

export default connect()(Home)
