import { useState } from 'react'
import { localSave, localRead, sessionSave, sessionRead } from '../cache'

export default (initialState, cacheType, cacheKey) => {
  const [save, read] =
    cacheType === 'local'
      ? [localSave, localRead]
      : cacheType === 'session'
      ? [sessionSave, sessionRead]
      : []

  let initialCachedState = read(cacheKey)
  if (initialCachedState === undefined || initialCachedState === null) {
    initialCachedState = initialState
  }

  const [state, setState] = useState(initialCachedState)

  const setCachedState = (newState) => {
    save(cacheKey, newState)
    setState(newState)
  }

  return [state, setCachedState]
}
