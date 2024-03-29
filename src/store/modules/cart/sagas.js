import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from 'axios'
import history from '../../../services/history'
import { formatPrice } from '../../../util/format'

import { addToCartSuccess, updateAmountSuccess } from './actions'

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  )

  const stock = yield call(api.get, `./api/stock/${id}`)

  const stockAmount = stock.data.amount
  const currentAmount = productExists ? productExists.amount : 0

  const amount = currentAmount + 1

  if (amount > stockAmount) {
    toast.error('Estoque insuficiente')
    return
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount))
  } else {
    const response = yield call(api.get, `/api/product/${id}`)

    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    }

    yield put(addToCartSuccess(data))

    history.push('/cart')
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return

  const stock = yield call(api.get, `/api/stock/${id}`)
  const stockAmount = stock.data.amount

  if (amount > stockAmount) {
    toast.error('Estoque insuficiente')
    return
  }

  yield put(updateAmountSuccess(id, amount))
}

/* takeLatest: automatically cancels any previous
saga task started previously if it's still running.
First param: what action to listener
Second param: action to dispatch
 */

// all: registering various linteners -> takeLatest
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
])
