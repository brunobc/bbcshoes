import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-ultraboost-20-masculino/06/NQQ-3290-006/NQQ-3290-006_zoom2.jpg?ts=1587073224&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nice titulo muito grande para quebra de linha</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart siz={16} color="#FFF" /> 5
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-ultraboost-20-masculino/06/NQQ-3290-006/NQQ-3290-006_zoom2.jpg?ts=1587073224&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nice</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart siz={16} color="#FFF" /> 5
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-ultraboost-20-masculino/06/NQQ-3290-006/NQQ-3290-006_zoom2.jpg?ts=1587073224&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nice</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart siz={16} color="#FFF" /> 5
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-ultraboost-20-masculino/06/NQQ-3290-006/NQQ-3290-006_zoom2.jpg?ts=1587073224&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nice</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart siz={16} color="#FFF" /> 5
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-ultraboost-20-masculino/06/NQQ-3290-006/NQQ-3290-006_zoom2.jpg?ts=1587073224&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nice</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart siz={16} color="#FFF" /> 5
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-ultraboost-20-masculino/06/NQQ-3290-006/NQQ-3290-006_zoom2.jpg?ts=1587073224&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis nice</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart siz={16} color="#FFF" /> 5
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  )
}
