import { useState } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ErrorHandler } from './components/error-handler/error-handler';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



function App() {
  const [requestErrorText, setRequestErrorText] = useState(false);

  return (
    <div className="App">
      <AppHeader />
      <main className='main pl-5 pr-5'>
        <DndProvider backend={HTML5Backend}>
          <div>
              {/* <button onClick={() =>{dispatchCartState({type: 'removeIngredient', payload: ingredients[Math.floor(Math.random() * 5)]});console.log(cartState)}}>minus</button>
              <strong>{cartState.ingredients.length}</strong>
              <button onClick={()=>{dispatchCartState({type: 'addIngredient', payload: ingredients[Math.floor(Math.random() * 15)]});console.log(cartState)}}>plus</button>
              <button onClick={()=>{dispatchCartState({type: 'removeIngredient', payload: ingredients[Math.floor(Math.random() * 10)]});console.log(cartState)}}>test</button> */}
            <BurgerIngredients />
          </div>
          <div>
              <BurgerConstructor />
          </div>
        </DndProvider>
      </main>
      <ErrorHandler errorMessage={requestErrorText} />
    </div>
  );
}

export default App;
