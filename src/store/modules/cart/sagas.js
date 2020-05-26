import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

import { addToCartSuccess } from './actions'

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`)

  yield put(addToCartSuccess(response.data))
}

/* takeLatest: automatically cancels any previous
saga task started previously if it's still running.
First param: what action to listener
Second param: action to dispatch
 */

// all: registering various linteners -> takeLatest
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)])
