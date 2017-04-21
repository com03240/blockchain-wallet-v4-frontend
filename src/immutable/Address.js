import * as R from 'ramda'
import * as crypto from '../WalletCrypto'
import { Map } from 'immutable'
import { typeDef } from '../util'

/* Address :: {
  priv :: String
  addr :: String
} */

function Address (x) {
  this.__internal = Map(x)
}

const { guard, define } = typeDef(Address)

export const priv = define('priv')
export const addr = define('addr')

export const selectPriv = R.view(priv)
export const selectAddr = R.view(addr)

export const toJS = R.pipe(guard, (address) => {
  return address.__internal.toJS()
})

// encrypt :: Number -> String -> String -> Address -> Address
export const encrypt = R.curry((iterations, sharedKey, password, address) => {
  const cipher = crypto.encryptSecPass(sharedKey, iterations, password)
  return R.over(priv, cipher, address)
})

export default Address
