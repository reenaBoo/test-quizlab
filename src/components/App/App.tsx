import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, signOut } from '../../store/userSlice';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { theme } from '../../utils/theme';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Profile from '../Profile/Profile';
import AllPosts from '../AllPosts/AllPosts';
import { RootState } from '../../store';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.authenticated.authenticated);

  const [value, setValue] = useState('');

  const loginUser = () => {
    dispatch(addUser({ value }));
    navigate('/posts');
    setValue('');
  };

  function handleSignOut() {
    dispatch(signOut());
    navigate('/login');
  }

  useEffect(() => {
    if (!loggedIn) {
      navigate('/posts');
    }
  }, [loggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} handleSignOut={handleSignOut} />}
        />
        <Route path="/posts" element={<ProtectedRoute component={AllPosts} />} />
        <Route path="/login" element={<Login value={value} setValue={setValue} onSubmit={loginUser} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
