import { toast } from 'react-toastify'
import { removeToken } from 'utils/Libs/removeToken'

export const logout = () => {
  removeToken()
  toast.success('로그아웃되었습니다.')
  location.reload()
}
