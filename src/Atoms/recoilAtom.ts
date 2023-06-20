import { atom } from 'recoil'
import { CommunityDetailProps } from 'types/components/Community'
import { EmployDetailProps } from 'types/components/Detail'

export const isCommunityWrite = atom<boolean>({
  key: 'isCommunityWrite',
  default: false,
})

export const statusValue = atom<string>({
  key: 'statusValue',
  default: '0',
})

export const pageNum = atom<string>({
  key: 'pageNum',
  default: '1',
})

export const isLoginValue = atom<boolean>({
  key: 'isLoginValue',
  default: false,
})

export const userName = atom<string>({
  key: 'userName',
  default: '',
})

export const userId = atom<string>({
  key: 'userId',
  default: '',
})

export const userProfile = atom<string>({
  key: 'userProfile',
  default: '',
})

export const filterMenu = atom<string>({
  key: 'filterMenu',
  default: '개발 전체',
})

export const postFilterMenu = atom<string>({
  key: 'postFilterMenu',
  default: '전체',
})
export const coFilterMenu = atom<string>({
  key: 'coFilterMenu',
  default: '전체',
})

export const coDetailData = atom<CommunityDetailProps | null>({
  key: 'coDetailData',
  default: null,
})

export const applyState = atom<boolean>({
  key: 'applyState',
  default: true,
})

export const likeState = atom<boolean>({
  key: 'likeState',
  default: true,
})

export const coTitle = atom<string | undefined>({
  key: 'coTitle',
  default: '',
})

export const coContent = atom<string | undefined>({
  key: 'coContent',
  default: '',
})

export const isCommunityModify = atom<boolean>({
  key: 'isCommunityModify',
  default: false,
})
