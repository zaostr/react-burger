import { useState } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ErrorHandler } from './components/error-handler/error-handler';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className='main pl-5 pr-5'>
        <DndProvider backend={HTML5Backend}>
          <div>
            <BurgerIngredients />
          </div>
          <div>
              <BurgerConstructor />
          </div>
        </DndProvider>
      </main>
      <ErrorHandler />
    </div>
  );
}

export default App;
