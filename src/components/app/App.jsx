//import appStyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import { ErrorHandler } from '../error-handler/error-handler';
import { Main } from '../main/main';
import { ProtectedRoute } from '../protected-route/protected-route'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import {
  ForgotPasswordPage,
  HomePage, LoginPage, NotFound404, ProfilePage, RegisterPage, ResetPasswordPage
} from '../../pages';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { IngredientDetailsPage } from '../../pages/ingredient-details';


function App() {
  return (
    
    <Router>
      <div className="App">
        <AppHeader />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <ProtectedRoute role={0} path="/profile" exact>
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/forgot-password" exact>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPasswordPage />
          </Route>
          <Route path="/ingredients/:id" exact>
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
