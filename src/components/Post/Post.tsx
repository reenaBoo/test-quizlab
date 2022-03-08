import React, { useState } from 'react';
import { PostStyles, Title, PostText, Paragraph, LikeButton, Container } from './Post.styles';
import { useDispatch, useSelector } from 'react-redux';
import { IPostProps } from './IPostProps';
import { RootState } from '../../store';
import { likePost } from '../../store/postsSlice';
import { useNavigate } from 'react-router-dom';
import { checkName } from '../../store/userSlice';

function Post({ name, message, index }: IPostProps & { index: number }) {
  const user = useSelector((state: RootState) => state.user.user);
  const likes = useSelector((state: RootState) => state.posts.posts[index].likes.join(', '));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addLike() {
    dispatch(likePost({ user, index }));
  }

  function handleCheckName() {
    dispatch(checkName({ name }));
    navigate('/profile');
  }

  return (
    <PostStyles>
      <Container>
        <Title onClick={handleCheckName}>{name}</Title>
        <LikeButton onClick={addLike} />
      </Container>
      <PostText>{message}</PostText>
      <Paragraph>{`Понравилось: ${likes ?? ''}`}</Paragraph>
    </PostStyles>
  );
}

export default Post;
