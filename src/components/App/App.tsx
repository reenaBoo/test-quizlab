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
import { RootState } from '../../store';
import AllPosts from '../AllPosts/AllPosts';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const users = useSelector((state: RootState) => state.users.users);
  const user = useSelector((state: RootState) => state.user.user);

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
    console.log(users);
  }, [users]);

  useEffect(() => {
    console.log('curr', user);
  }, [user]);

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
