import styled from '@emotion/styled'
import { Palette } from 'styles/globals'
import { MenuStateType } from 'types/components/Header'

export const Header = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  z-index: 2;
`

export const HeaderWrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg,
  p {
    cursor: pointer;
  }
`

export const MenuWrapper = styled.nav`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 50px;
`

export const Menu = styled.div<MenuStateType>`
  padding: 0.3rem;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 2px solid
    ${({ state }) => (state === 'true' ? Palette.PRIMARY_P2 : Palette.WHITE)};
  cursor: pointer;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  p {
    font-size: 14px;
    font-weight: 700;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
`

export const ProfilImg = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  img {
    border-radius: 50%;
  }
`
