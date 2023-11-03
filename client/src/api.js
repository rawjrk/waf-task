export const getScoreList = async () => {
  try {
    const data = await (await fetch('/api')).json()
    return data
  } catch {
    console.error(error)
  }
}

export const addScore = async (name, points) => {
  try {
    const data = { name, points }
    await fetch('/api/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch {
    console.error(error)
  }
}
