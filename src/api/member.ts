import { GetServerSidePropsContext } from 'next'
import { toast } from 'react-toastify'
import { apiClient } from 'utils/Libs/apiClient'
import { MemberController } from 'utils/Libs/requestUrls'
import { setToken } from 'utils/Libs/setToken'

export const signup = async (
  email: string | undefined,
  password1: string | undefined,
  password2: string | undefined,
) => {
  try {
    const { data } = await apiClient.post(MemberController.signup, {
      email: email,
      password1: password1,
      password2: password2,
    })
    return toast.success(data.detail)
  } catch (e: any) {
    if (e.message === 'Request failed with status code 400') {
      toast.warning('이미 가입된 유저입니다.')
    }
    return false
  }
}

export const signin = async (
  email: string | undefined,
  password: string | undefined,
) => {
  try {
    const { data } = await apiClient.post(MemberController.signin, {
      email: email,
      password: password,
    })
    setToken(data.access, data.refresh, null)
    return toast.success('로그인이 되었습니다.')
  } catch (e: any) {
    if (e.message === 'Request failed with status code 400') {
      toast.warning('이메일 또는 비밀번호가 다릅니다.')
    }
    return false
  }
}

export const tokenRefresh = async (
  refreshToken: string | undefined,
  ctx: GetServerSidePropsContext | null,
) => {
  let newAuthorization: string
  try {
    const { data } = await apiClient.post(MemberController.refresh, {
      refresh: refreshToken,
    })
    newAuthorization = data.accessToken
    refreshToken = data.refreshToken
    console.log('tokenrefresh')
    setToken(newAuthorization, refreshToken, ctx)
    return { newAuthorization }
  } catch (e: any) {
    console.log('tokenrefresh fail')
  }
}

export const getUserInfo = async () => {
  try {
    const { data } = await apiClient.get(MemberController.user)
    return { data }
  } catch (e: any) {}
}
