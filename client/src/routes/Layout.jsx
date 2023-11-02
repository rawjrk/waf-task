import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <h1>
        <Link id="homepage-link">SnakeN</Link>
      </h1>
      <Outlet />
    </>
  )
}

export default Layout
