import styled from 'styled-components';
import closeButt from '../../assets/images/close-button.svg';
import addButt from '../../assets/images/plus-button.svg';

export const StyledProfile = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: green;
`;

export const AddButton = styled.button`
  background-image: url(${addButt});
  width: 40px;
  height: 40px;
  background-size: contain;
  background-color: transparent;
  border: none;
  background-position: center;
  align-self: end;
  margin-right: 30px;
  transition: transform 1s ease;
  
  &:hover {
    cursor: pointer;
    transform: rotate(-90deg);
    opacity: .6;
    transition: opacity .6s ease, transform .6s ease;
  }
`;

export const BackButton = styled.button`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 18px;
  line-height: 1.66;
  background-color: inherit;
  border: none;
  
  &:hover {
    opacity: .8;
    cursor: pointer;
  }
`

export const PopupContainer = styled.div<{ isPopupOpen: boolean }>`
  display: ${(props) => (props.isPopupOpen ? 'flex' : 'none')};
  visibility: ${(props) => (props.isPopupOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isPopupOpen ? '1' : '0')};
  transition: visibility 0s, opacity 0.5s linear;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Container = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 0 30px 30px;
`

export const PopupForm = styled.form`
  width: 430px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  padding: 34px 36px 37px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const ButtonClose = styled.button`
  background-image: url(${closeButt});
  width: 40px;
  height: 40px;
  position: absolute;
  right: -40px;
  top: -40px;
  background-color: transparent;
  border: none;
  background-position: center;
  transition: opacity 0.2s linear;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const TextArea = styled.textarea`
  margin: 0;
  display: block;
  border-radius: 2px;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 1.4;
  min-height: 113px;
  max-height: 100%;
  border: 1px solid grey;
  transition: all 0.3s ease;
  overflow: auto;
  resize: none;
`;

export const ButtonAdd = styled.button`
  margin: 25px 0 0;
  min-width: 160px;
  padding: 15px;
  text-align: center;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  line-height: 1.66;
  font-weight: 700;
  background-color: ${({ theme }) => theme.primaryPink};
  color: ${({ theme }) => theme.primaryWhite};
  position: relative;
  transition-property: transform;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 14px;
  opacity: 0.8;
  margin: 0 0 5px 0;
  color: ${({ theme }) => theme.primaryPink};
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 8px 0 0;
  color: ${({ theme }) => theme.primaryWhite};
  border: none;
  background-color: inherit;
`
