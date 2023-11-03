const getStringOfLength = (num, length) => num.toString().padStart(length, '0')

export const formatScore = (points, feedOption) =>
  `${getStringOfLength(points, 4)}/${getStringOfLength(feedOption, 2)}`
