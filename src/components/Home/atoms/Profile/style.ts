import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 197px;
  height: 280px;
  border-radius: 8px;
  border: 1px solid #eaedf4;
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  p {
    font-size: 10px;
    font-weight: 300;
    cursor: pointer;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`
