import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 282px 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 396px;
  align-items: center;
  justify-content: center;
  padding: 85px 60px 105px;
  border-radius: 30px;
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.primaryGrey};
  padding: 10px;
  color: ${({ theme }) => theme.primaryBlack};
  border: none;
  border-radius: 3px;
  width: 100%;
  margin: 18px 0 15px;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.primaryPink};
  display: block;
`

export const Span = styled.span`
  font-size: 10px;
  line-height: 13px;
  color: ${({ theme }) => theme.primaryRed};
  margin-bottom: 15px;
`

export const Button = styled.button`
  padding: 15px;
  background-color: ${({ theme }) => theme.primaryPink};
  color: ${({ theme }) => theme.primaryWhite};
  min-width: 160px;
  text-align: center;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  line-height: 1.66;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s ease-in;
  
  &:disabled {
    background-color: ${({ theme }) => theme.primaryGrey};
    color: ${({ theme }) => theme.secondaryGrey};
    cursor: default;
  }
  
  &:hover {
    opacity: .8;
  }
  &:hover:disabled {
    opacity: 1;
  }
`
