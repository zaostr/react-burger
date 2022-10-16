//import appStyles from './App.module.css';
import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import { ErrorHandler } from '../error-handler/error-handler';
import { getIngredients } from '../../services/actions/ingredients';
import { ProtectedRoute } from '../protected-route/protected-route'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  ForgotPasswordPage,
  LoginPage, NotFound404, ProfilePage, RegisterPage, ResetPasswordPage,
  IngredientDetailsPage
} from '../../pages';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getIngredients() );
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <AppHeader />

        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <ProtectedRoute role={0} path={["/profile","/profile/*"]} exact>
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/forgot-password" exact>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPasswordPage />
          </Route>
          <Route path={["/", "/ingredients/:id"]} exact>
            <IngredientDetailsPage />
          </Route>
          <Route path="*" exact>
            <NotFound404 />
          </Route>
        </Switch>
        <ErrorHandler />
      </div>
    </Router>
  );
}

export default App;
