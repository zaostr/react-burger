import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className='main pl-5 pr-5'>
        <div>
          <BurgerIngredients />
        </div>
        <div>
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;
