//import appStyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import { ErrorHandler } from '../error-handler/error-handler';
import { Main } from '../main/main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  HomePage, LoginPage, RegisterPage
} from '../../pages';


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
          <Route path="/profile" exact>
            <Main />
          </Route>
          <Route path="/forgot-password" exact>
            <Main />
          </Route>
          <Route path="/reset-password" exact>
            <Main />
          </Route>
          <Route path="*" exact>
            <Main />
          </Route>
        </Switch>
        
        
        <ErrorHandler />
      </div>
    </Router>
    
  );
}

export default App;
