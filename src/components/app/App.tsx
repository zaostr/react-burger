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
import { Location } from 'history';
import { OrderDetailsPopup } from '../order-details-popup/order-details-popup';
import { OrderDetailsPage } from '../../pages/order-details-page';
import { UserOrderDetailsPopup } from '../user-order-details-popup/user-order-details-popup';
import { LogoutPage } from '../../pages/logout-page';




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
          <ProtectedRoute onlyAuth={false} path="/login" exact>
            <LoginPage />
          </ProtectedRoute>
          <ProtectedRoute onlyAuth={false} path="/register" exact>
            <RegisterPage />
          </ProtectedRoute>
          <ProtectedRoute onlyAuth={true} path='/profile/orders/:id' exact>
            <OrderDetailsPage />
          </ProtectedRoute>
          <ProtectedRoute onlyAuth={true} path="/profile*" exact>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute onlyAuth={false} path="/forgot-password" exact>
            <ForgotPasswordPage />
          </ProtectedRoute>
          <ProtectedRoute onlyAuth={false} path="/reset-password" exact>
            <ResetPasswordPage />
          </ProtectedRoute>
          <ProtectedRoute onlyAuth={true} path="/logout" exact>
            <LogoutPage />
          </ProtectedRoute>
          <Route path="/ingredients/:id" exact>
            <IngredientDetailsPage />
          </Route>
          <Route path="/feed" exact>
            <FeedPage />
          </Route>
          <Route path="/feed/:id" exact>
            <OrderDetailsPage />
          </Route>
          <Route path="*" exact>
            <NotFound404 />
          </Route>
        </Switch>
        {background && (
          <Route path="/ingredients/:id" exact component={IngredientDetailsPopup}/>
        )}
        {background && (
          <Route path="/feed/:id" exact component={OrderDetailsPopup}/>
        )}
        {background && (
          <Route path="/profile/orders/:id" exact component={UserOrderDetailsPopup}/>
        )}
        <ErrorHandler />
      </div>
  );
}

export default App;
