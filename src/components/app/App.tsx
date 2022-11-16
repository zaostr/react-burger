//import appStyles from './App.module.css';
import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import { ErrorHandler } from '../error-handler/error-handler';
import { getIngredients } from '../../services/actions/ingredients';
import { ProtectedRoute } from '../protected-route/protected-route'
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  ForgotPasswordPage,
  LoginPage, NotFound404, ProfilePage, RegisterPage, ResetPasswordPage,
  IngredientDetailsPage,
  HomePage,
  FeedPage
} from '../../pages';
import { useDispatch } from 'react-redux';
import { IngredientDetailsPopup } from '../ingredient-details-popup/ingredient-details-popup';
import { Location, LocationState } from 'history';




function App() {
  const dispatch = useDispatch();
  const location = useLocation<Location & {background?: Location | undefined;}>();

  const background = location.state && location.state?.background;

  useEffect(() => {
    // @ts-ignore
    dispatch( getIngredients() );
  }, [dispatch]);

  return (
      <div className="App">
        <AppHeader />
        <Switch location={background || location}>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <ProtectedRoute role={0} path="/profile*" exact>
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/forgot-password" exact>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPasswordPage />
          </Route>
          <Route path="/ingredients/:id">
            <IngredientDetailsPage />
          </Route>
          <Route path="/feed">
            <FeedPage />
          </Route>
          <Route path="/feed/:id">
            <IngredientDetailsPage />
          </Route>
          <Route path="*" exact>
            <NotFound404 />
          </Route>
        </Switch>
        {background && (
          <Route path="/ingredients/:id" exact component={IngredientDetailsPopup}/>
        )}
        <ErrorHandler />
      </div>
  );
}

export default App;
