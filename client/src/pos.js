export const matchPosition = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  return x1 === x2 && y1 === y2
}

export const includesPosition = (coordList, { x, y }) => {
  return Boolean(coordList.find((coord) => coord.x === x && coord.y === y))
}

export const randomPosition = (limit, excluded) => {
  let x, y

  do {
    x = Math.round(Math.random() * (limit.x - 1))
    y = Math.round(Math.random() * (limit.y - 1))
  } while (includesPosition(excluded, { x, y }))

  return { x, y }
}
