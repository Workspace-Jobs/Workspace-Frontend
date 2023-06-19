import { atom } from 'recoil'

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
