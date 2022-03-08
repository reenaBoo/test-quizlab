import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {RootState} from "../../store";

const ProtectedRoute = ({ component: Component, ...props }: any) => {
  const auth = useSelector((state: RootState) => state.user.authenticated);

  return auth ? <Component {...props}/> : <Navigate to="/login" />;
};

export default ProtectedRoute;
