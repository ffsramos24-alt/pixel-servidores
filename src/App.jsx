import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServersPage from './pages/ServersPage'
import GamePage from './pages/GamePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="servidores" element={<ServersPage />} />
        <Route path="servidores/:gameId" element={<GamePage />} />
      </Route>
    </Routes>
  )
}
