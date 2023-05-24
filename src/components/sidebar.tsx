import {
  Home as HomeIcon,
  Search,
  Library,
} from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          className="flex items-center gap-3 text-sn font-semibold text-zinc-200"
          href=""
        >
          <HomeIcon /> Home
        </a>
        <a
          className="flex items-center gap-3 text-sn font-semibold  text-zinc-200"
          href=""
        >
          {' '}
          <Search />
          Search
        </a>
        <a
          className="flex items-center gap-3 text-sn font-semibold  text-zinc-200"
          href=""
        >
          {' '}
          <Library /> Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Rap Caviar
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Trap BR
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Hot Hits Brasil
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Bregadeira
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Potência Sertaneja
        </a>
        <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">
          Pagodinho
        </a>
      </nav>
    </aside>
  )
}