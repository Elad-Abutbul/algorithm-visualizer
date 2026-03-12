import AppLayout from '@/components/layout/AppLayout'
import BfsPage from '@/pages/BfsPage'
import DfsPage from '@/pages/DfsPage'
import DijkstraPage from '@/pages/DijkstraPage'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bfs" element={<BfsPage />} />
        <Route path="/dfs" element={<DfsPage />} />
        <Route path="/dijkstra" element={<DijkstraPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
