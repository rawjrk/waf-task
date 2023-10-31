import { useEffect, useCallback } from 'react'

export default (controls) => {
  const handleUserKeyPress = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.code)
    if (e.code in controls) controls[e.code]()
    else console.log('Unassigned')
  })

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  })
}
