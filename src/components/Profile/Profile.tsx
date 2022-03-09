import React, { useState } from 'react';
import {
  PopupContainer,
  StyledButton,
  StyledProfile,
  PopupForm,
  ButtonClose,
  TextArea,
  ButtonAdd,
  Label,
  FormContainer,
  AddButton,
  BackButton,
  Container,
  Title,
} from './Profile.styles';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from '../PostsList/PostsList';
import { RootState } from '../../store';
import { addPost } from '../../store/postsSlice';
import { useNavigate } from 'react-router-dom';

function Profile({ handleSignOut }: any) {
  const user = useSelector((state: RootState) => state.user.user);
  const userCheck = useSelector((state: RootState) => state.userName.userName);
  // @ts-ignore
  const posts = useSelector((state: RootState) => state.posts.posts.filter((p) => p.name === userCheck.name));
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [post, setPost] = useState('');
  const dispatch = useDispatch();

  function handleOpenPopup() {
    setIsPopupOpen(true);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  function handleAddPost(e: React.FormEvent) {
    e.preventDefault();
    dispatch(addPost({ post, user }));
    setPost('');
    handleClosePopup();
  }

  function handleChange(e: any) {
    setPost(e.target.value);
  }

  return (
    <StyledProfile>
      <Container>
        <Title as="button">
          {/*@ts-ignore*/}
          {userCheck.name}
        </Title>
      </Container>
      <StyledButton onClick={handleSignOut}>Выйти</StyledButton>
      <PopupContainer isPopupOpen={isPopupOpen}>
        <FormContainer>
          <ButtonClose onClick={handleClosePopup} />
          <PopupForm onSubmit={handleAddPost}>
            <Label htmlFor="post">Текст поста</Label>
            <TextArea id="post" name="post" required onChange={handleChange} value={post} />
            <ButtonAdd>Опубликовать</ButtonAdd>
          </PopupForm>
        </FormContainer>
      </PopupContainer>
      <PostsList allPosts={posts} />
      <AddButton onClick={handleOpenPopup} />
      <BackButton onClick={() => navigate('/posts')}>В ленту</BackButton>
    </StyledProfile>
  );
}

export default Profile;
