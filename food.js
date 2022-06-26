import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()  // 0 is technically outside of the grid  
const EXPANSION_RATE = 2

export function update() {
  if (onSnake(food)) {              // if food meets snake
    console.log("SNAKE HAD FOOD")
    expandSnake(EXPANSION_RATE)     //    expand snake
    food = getRandomFoodPosition()  //    renew food position
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
} 

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}