import { PostFilterData } from 'assets/data/FilterData'
import * as S from './style'
import FilterItem from 'components/common/atoms/FilterItem'
import { ModalOverayWrapper } from 'components/common/atoms/ModalOverayWrapper/style'
import { EmployFilterType } from 'types/components/Employment'

const FilterMenuModal = ({
  menu,
  onClick,
  modalState,
  setModalState,
}: EmployFilterType) => {
  return (
    <>
      <ModalOverayWrapper
        isClick={modalState}
        onClick={() => setModalState(false)}
      />
      <S.Wrapper>
        {PostFilterData.map((e, ind) => (
          <FilterItem
            key={ind}
            menu={e}
            active={`${menu == e}`}
            onClick={onClick}
          />
        ))}
      </S.Wrapper>
    </>
  )
}

export default FilterMenuModal
