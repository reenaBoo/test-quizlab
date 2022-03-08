import styled from 'styled-components';
import like from '../../assets/images/like-button-active.svg';

export const PostStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 10px;
  align-items: flex-start;
  min-width: 350px;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryWhite};
  margin-bottom: 30px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.primaryBlack};
`;

export const PostText = styled.p`
  font-size: 12px;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.primaryBlack};
`;

export const Paragraph = styled.p`
  font-size: 12px;
  line-height: 1.2;
  color: ${({ theme }) => theme.primaryBlack};
  margin: 8px 0 0 0;
`;

export const LikeButton = styled.button`
  background-image: url(${like});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: inherit;
  width: 22px;
  height: 19px;
  border: none;
  transition: opacity ease-in .2s;
  
  &:hover {
    opacity: .8;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
