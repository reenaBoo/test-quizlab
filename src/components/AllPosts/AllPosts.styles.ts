import styled from "styled-components";

export const StyledAllPosts = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfileButton = styled.button`
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
