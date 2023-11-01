import { useEffect, useCallback } from 'react'

export default (controls) => {
  const handleUserKeyPress = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()

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
