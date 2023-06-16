import { useState } from 'react'
import * as S from './style'
import * as SVG from 'assets/svg'
import FilterMenuModal from 'components/Employment/atoms/FilterMenuModal'

const Filter = () => {
  const [filterModal, setFilterModal] = useState(false)
  const [filterMenu, setFilterMenu] = useState('개발 전체')

  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>개발</S.Title>
        <S.FilterName>{filterMenu}</S.FilterName>
        <S.FilterBtn
          active={filterModal}
          onClick={() => setFilterModal((pre) => !pre)}
        >
          <SVG.FilterBtn />
        </S.FilterBtn>
        {filterModal && (
          <FilterMenuModal
            menu={filterMenu}
            onClick={setFilterMenu}
            modalState={filterModal}
            setModalState={setFilterModal}
          />
        )}
      </S.Wrapper>
    </S.Section>
  )
}

export default Filter
