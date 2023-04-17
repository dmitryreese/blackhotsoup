import { Api } from './api'
import { SIGNIN_ENDPOINT } from './endpoints'

const EMAIL = 'example@mail.com'
const PASSWORD = 'password'

export const signInPostRequest = async (email: string, password: string) => {
  await Api.post(SIGNIN_ENDPOINT, {
    body: JSON.stringify({ email, password }),
  })

  if (email !== EMAIL || password !== PASSWORD) {
    throw new Error('')
  }
}
