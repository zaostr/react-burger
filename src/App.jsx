import { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ErrorHandler } from './components/error-handler/error-handler';
import { baseUrl } from './utils/constants';

function App() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [requestErrorText, setRequestErrorText] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/api/ingredients`)
    .then(res => res.json())
    .then(dataJson => {
      setIngredientsList(dataJson.data);
      setRequestErrorText(false);
    })
    .catch(err => setRequestErrorText(err.message));
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className='main pl-5 pr-5'>
        <div>
          <BurgerIngredients data={ingredientsList} />
        </div>
        <div>
          <BurgerConstructor data={ingredientsList} />
        </div>
      </main>
      <ErrorHandler errorMessage={requestErrorText} />
    </div>
  );
}

export default App;
