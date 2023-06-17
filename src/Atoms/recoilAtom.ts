import { atom } from 'recoil'

export const isCommunityWrite = atom<boolean>({
  key: 'isCommunityWrite',
  default: false,
})

export const statusValue = atom<string>({
  key: 'statusValue',
  default: '0',
})
