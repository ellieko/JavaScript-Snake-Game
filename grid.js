const GRID_SIZE = 21

export function randomGridPosition() {
  return {
    // Math.random() gives us a num
    // between 0 and 0.99999 --> between 0 and 20.99999
    // floor --> between 0 and 20
    x: Math.floor(Math.random() * GRID_SIZE) + 1,   // between 1 and 21
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}