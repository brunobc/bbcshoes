import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MdAddShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../util/format'
import api from 'axios'

import * as CartActions from '../../store/modules/cart/actions'

import { ProductList } from './styles'

const Home = ({ addToCartRequest, amount }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/api/products')
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

  const handleAddProduct = (id) => {
    addToCartRequest(id)
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart siz={16} color="#FFF" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {}),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
