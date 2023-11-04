export const getScoreList = async (options = {}) => {
  const { offset = 0, limit = 5 } = options

  try {
    const data = await (
      await fetch(`/api?limit=${limit}&offset=${offset}`)
    ).json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const addScore = async (name, points, feedOption) => {
  try {
    const data = { name, points, feedOption }
    await fetch('/api/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error(error)
  }
}
