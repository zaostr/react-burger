import { useState, useEffect, useReducer } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ErrorHandler } from './components/error-handler/error-handler';
import { getIngredients } from './utils/burger-api';
import { ConstructorContext } from './services/constructorContext'
import { ingredients } from './utils/data';
/*
function orderReducer(state, action) {
  switch (action.type) {
    case 'addIngredient':
      if ( action.payload.type == 'bun' ) {
        let ingredientsWithoutBun = state.ingredients.filter(x => x.type !== 'bun');
        ingredientsWithoutBun.push({
          ...action.payload,
          count: 2
        });
        return {
          ...state,
          ingredients: ingredientsWithoutBun
        }
      } else {
        let newIngredients = [];
        if ( state.ingredients.filter(ingredient => ingredient._id === action.payload._id).length ) {
          newIngredients = state.ingredients.map(ingredient => {
            return (ingredient._id === action.payload._id) ? 
              {
                ...ingredient,
                count: ingredient.count + 1
              }
               : 
              {
                ...ingredient
              }
          })
          return {
            ...state,
            ingredients: newIngredients
          }
        } else {
          state.ingredients.push({
            ...action.payload,
            count: 1
          });
          return {
            ...state
          }
        }
      }
    case 'removeIngredient':
      if ( action.payload.type !== 'bun' ) {
        let newIngredients = state.ingredients.filter(x => !(x._id === action.payload._id && x.count === 1));
        newIngredients = newIngredients.map(ingredient => {
          if (ingredient._id === action.payload._id) {
            if (ingredient.count > 1) {
              return {
                ...ingredient,
                count: ingredient.count - 1
              }
            }
          } else {
            return {
              ...ingredient
            }
          }
        })
        return {
          ...state,
          ingredients: newIngredients
        }
      }
    case 'clear':
      return {
        ...state,
        ingredients: []
      }

    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}
*/

function cartReducer(state, action) {
  switch (action.type) {
    case 'addIngredient':
      if ( action.payload.type == 'bun' ) {
        let ingredientsWithoutBun = state.ingredients.filter(x => x.type !== 'bun');
        let newIngredients = [
          ...ingredientsWithoutBun,
          action.payload
        ];
        return {
          ...state,
          ingredients: newIngredients
        }
      } else {
        let newIngredients = [
          ...state.ingredients,
          action.payload
        ];
        return {
          ...state,
          ingredients: newIngredients
        }
      }
      case 'removeIngredient':
        if ( action.payload.type !== 'bun' ) {
          let newIngredients = state.ingredients.filter((x,key) => key !== action.payload.index);
          return {
            ...state,
            ingredients: newIngredients
          }
        }
      case 'clear':
        return {
          ...state,
          ingredients: []
        }

      default:
        throw new Error(`Wrong type of action: ${action.type}`);
  }
}

const orderInitialState = {ingredients: []};

function App() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [requestErrorText, setRequestErrorText] = useState(false);
  const [cartState, dispatchCartState] = useReducer(cartReducer, orderInitialState);


  useEffect(() => {
    getIngredients()
    .then(dataJson => {
      setIngredientsList(dataJson.data);
      setRequestErrorText(false);
      //setCartState(dataJson.data);
    })
    .catch(err => setRequestErrorText(err.message));
  }, []);

  useEffect(() => {
    ingredientsList.map(item => dispatchCartState({type: 'addIngredient', payload: item}));
  }, [JSON.stringify(ingredientsList)]);

  return (
    <div className="App">
      <AppHeader />
      <main className='main pl-5 pr-5'>
        <div>
            {/* <button onClick={() =>{dispatchCartState({type: 'removeIngredient', payload: ingredients[Math.floor(Math.random() * 5)]});console.log(cartState)}}>minus</button>
            <strong>{cartState.ingredients.length}</strong>
            <button onClick={()=>{dispatchCartState({type: 'addIngredient', payload: ingredients[Math.floor(Math.random() * 15)]});console.log(cartState)}}>plus</button>
            <button onClick={()=>{dispatchCartState({type: 'removeIngredient', payload: ingredients[Math.floor(Math.random() * 10)]});console.log(cartState)}}>test</button> */}
          <BurgerIngredients data={ingredientsList} />
        </div>
        <div>
          <ConstructorContext.Provider value={{cartState, dispatchCartState}}>
            <BurgerConstructor />
          </ConstructorContext.Provider>
        </div>
      </main>
      <ErrorHandler errorMessage={requestErrorText} />
    </div>
  );
}

export default App;
