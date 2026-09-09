import { Outlet } from 'react-router-dom'
import Navbar3D from './Navbar3D'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#08080c]">
      <Navbar3D />
      <main className="md:pl-16 pb-24 md:pb-0">
        <Outlet />
      </main>
    </div>
  )
}
