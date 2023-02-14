export const saveGame = ({ type, levels })=> {
  localStorage.setItem(type, JSON.stringify({ levels }))
}

export const loadGame = ({ type })=> {
  const game = localStorage.getItem(type)
  return game ? JSON.parse(game) : null
}

export const clearGame = ({ type })=> {
  localStorage.removeItem(type)
}