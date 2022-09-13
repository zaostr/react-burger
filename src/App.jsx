import { useState, useEffect, useReducer } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ErrorHandler } from './components/error-handler/error-handler';
import { getIngredients } from './utils/burger-api';
import { ConstructorContext } from './services/constructorContext'
import { ingredients } from './utils/data';

function orderReducer(state, action) {
  switch (action.type) {
    case 'addIngredient':
      if ( action.payload.type == 'bun' ) {
        let ingredientsWithoutBun = state.ingredients.filter(x => x.type !== 'bun');
        ingredientsWithoutBun.push(action.payload);
        return {
          ...state,
          ingredients: ingredientsWithoutBun
        }
      } else {
        state.ingredients.filter((x,index,arr) => {
          if (x._id === action.payload._id) {
            let newIngredients = arr[index].count++;
            return {
              ...state,
              ingredients: newIngredients
            }
          }
        })
        let newIngredients = state.ingredients.push({
          ...action.payload,
          count: 1
        });

        return {
          ...state,
          ingredients: newIngredients
        }
      }
    case 'removeIngredient':
      if ( action.payload.type !== 'bun' ) {
        state.ingredients.filter((x,index,arr) => {
          if (x._id === action.payload._id) {
            if (arr[index].count > 1) { 
              let newIngredients = arr[index].count--;
              return {
                ...state,
                ingredients: newIngredients
              }
            } else {
              let newIngredients = arr.splice(index, 1);
              return {
                ...state,
                ingredients: newIngredients
              }
            }
          }
        })
      }
    case 'clear':
      return orderInitialState

    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
  /*if (action.type == 'add') {
    if (action.payload.type == 'bun') {

    }
  }*/
}

const orderInitialState = {ingredients: []};

function App() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [requestErrorText, setRequestErrorText] = useState(false);
  const [orderState, dispatchOrderState] = useReducer(orderReducer, orderInitialState);


  console.log(orderState);

  useEffect(() => {
    getIngredients()
    .then(dataJson => {
      setIngredientsList(dataJson.data);
      setRequestErrorText(false);
    })
    .catch(err => setRequestErrorText(err.message));
    dispatchOrderState({type: 'addIngredient', payload: {_id: 1,test: 1}});
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className='main pl-5 pr-5'>
        <div>
          <BurgerIngredients data={ingredientsList} />
        </div>
        <div>
          <ConstructorContext.Provider value={{}}>
            <BurgerConstructor data={ingredientsList} />
          </ConstructorContext.Provider>
        </div>
      </main>
      <ErrorHandler errorMessage={requestErrorText} />
    </div>
  );
}

export default App;
