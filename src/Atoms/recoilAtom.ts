import { atom } from 'recoil'

export const isCommunityWrite = atom<boolean>({
  key: 'isCommunityWrite',
  default: false,
})
