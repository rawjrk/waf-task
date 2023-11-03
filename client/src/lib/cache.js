const save = (storage, key, data) => {
  storage.setItem(key, JSON.stringify(data))
}

const read = (storage, key) => {
  return JSON.parse(storage.getItem(key))
}

export const localSave = (key, data) =>
  save(localStorage, `snaken-local-${key}`, data)

export const localRead = (key) => read(localStorage, `snaken-local-${key}`)

export const sessionSave = (key, data) =>
  save(sessionStorage, `snaken-session-${key}`, data)

export const sessionRead = (key) =>
  read(sessionStorage, `snaken-session-${key}`)
