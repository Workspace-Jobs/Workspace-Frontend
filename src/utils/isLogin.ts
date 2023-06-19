import { getToken } from './Libs/getToken'

export const isLogin = async () => {
  const { Authorization } = await getToken(null)
  return Authorization ? true : false
}
