export const getScoreList = async (options = {}) => {
  const { offset = 0, limit = 5 } = options

  try {
    const response = await fetch(`/api?limit=${limit}&offset=${offset}`)
    const json = await response.json()

    const { status, message, data } = json
    if (status !== 200) {
      throw Error(message)
    }
    return data
  } catch (error) {
    console.error(error)
  }
}

export const addScore = async (name, points, feedOption) => {
  try {
    const data = { name, points, feedOption }
    const response = await fetch('/api/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const json = await response.json()

    const { status, message } = json
    if (status !== 200) {
      throw Error(message)
    }
  } catch (error) {
    console.error(error)
  }
}
