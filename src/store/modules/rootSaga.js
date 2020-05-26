import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

/*
  join all sagas
*/
export default function* rootSaga() {
  return yield all([cart])
}
