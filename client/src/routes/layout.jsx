import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <h1>SnakeN</h1>
      <Outlet />
    </>
  )
}

export default Layout
