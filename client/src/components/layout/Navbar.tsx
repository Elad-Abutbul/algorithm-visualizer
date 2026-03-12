import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/bfs', label: 'BFS' },
  { to: '/dfs', label: 'DFS' },
  { to: '/dijkstra', label: 'Dijkstra' },
]

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-6 py-4">
        <span className="text-sm font-semibold">Algorithm Visualizer</span>
        <nav className="ml-auto flex flex-wrap gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 text-sm ${
                  isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
