import { useEffect, useCallback } from 'react'

export default (controls) => {
  const handleUserKeyPress = useCallback((e) => {
    if (e.code in controls) {
      controls[e.code]()
    }
  })

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  })
}
