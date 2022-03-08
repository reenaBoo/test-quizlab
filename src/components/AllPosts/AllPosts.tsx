import React from 'react';
import Header from '../Header/Header';
import { StyledAllPosts, ProfileButton } from './AllPosts.styles';
import PostsList from '../PostsList/PostsList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { checkName } from '../../store/userSlice';

function AllPosts() {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const name = useSelector((state: RootState) => state.user.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCheckUser() {
    dispatch(checkName({ name }));
    navigate('/profile');
  }

  return (
    <StyledAllPosts>
      <Header />
      <PostsList allPosts={posts} />
      <ProfileButton onClick={handleCheckUser}>В профиль</ProfileButton>
    </StyledAllPosts>
  );
}

export default AllPosts;
