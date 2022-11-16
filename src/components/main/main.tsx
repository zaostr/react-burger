import React from 'react'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import mainStyles from './main.module.css'

export const Main = () => {
  return (
    <main className={`${mainStyles.main} pl-5 pr-5`}>
        <DndProvider backend={HTML5Backend}>
            <div>
            <BurgerIngredients />
            </div>
            <div>
                <BurgerConstructor />
            </div>
        </DndProvider>
    </main>
  )
}
