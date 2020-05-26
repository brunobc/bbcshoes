import { call, select, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import { formatPrice } from '../../../util/format'

import { addToCartSuccess, updateAmount } from './actions'

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  )
  if (productExists) {
    const amount = productExists.amount + 1
    yield put(updateAmount(id, amount))
  } else {
    const response = yield call(api.get, `/products/${id}`)

    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    }

    yield put(addToCartSuccess(data))
  }
}

/* takeLatest: automatically cancels any previous
saga task started previously if it's still running.
First param: what action to listener
Second param: action to dispatch
 */

// all: registering various linteners -> takeLatest
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)])
