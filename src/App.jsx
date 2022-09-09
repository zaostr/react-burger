import { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

function App() {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients')
    .then(res => res.json())
    .then(dataJson => setIngredientsList(dataJson.data));

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
    </div>
  );
}

export default App;
