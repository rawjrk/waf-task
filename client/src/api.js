export const getScoreList = async () => {
  try {
    const data = await fetch('/api')
    const result = await data.json()
    return result
  } catch {
    console.error(error)
  }
}

export const addScore = () => {}
