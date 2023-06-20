import { useState } from 'react'
import * as S from './style'
import * as SVG from 'assets/svg'
import FilterMenuModal from 'components/Employment/atoms/FilterMenuModal'
import { useRecoilState } from 'recoil'
import { filterMenu } from 'Atoms/recoilAtom'

const Filter = () => {
  const [filterModal, setFilterModal] = useState(false)
  const [menu, setMenu] = useRecoilState(filterMenu)

  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>개발</S.Title>
        <S.FilterName>{menu}</S.FilterName>
        <S.FilterBtn
          active={filterModal}
          onClick={() => setFilterModal((pre) => !pre)}
        >
          <SVG.FilterBtn />
        </S.FilterBtn>
        {filterModal && (
          <FilterMenuModal
            menu={menu}
            onClick={setMenu}
            modalState={filterModal}
            setModalState={setFilterModal}
          />
        )}
      </S.Wrapper>
    </S.Section>
  )
}

export default Filter
