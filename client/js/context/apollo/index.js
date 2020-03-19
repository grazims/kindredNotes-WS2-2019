import client from './client'
import {
  INBOX,
  OUTBOX,
  GET_ACTIVE_USER,
  GET_CITY_COORDS,
  VALIDATE_CITY,
} from './queries'
import {
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  CREATE_NOTE,
  VIEW_NOTE,
  CREATE_NOTE_RESPONSE,
  FAVORITE_NOTE,
} from './mutations'

export default client
export {
  INBOX,
  OUTBOX,
  GET_ACTIVE_USER,
  GET_CITY_COORDS,
  VALIDATE_CITY,
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  CREATE_NOTE,
  VIEW_NOTE,
  CREATE_NOTE_RESPONSE,
  FAVORITE_NOTE,
}
