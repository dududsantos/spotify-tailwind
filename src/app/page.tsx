import Image from 'next/image'
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1 ml-auto mr-8">
              <ChevronRight />
            </button>
          </div>

          <h1 className=" mt-10 font-semibold text-3xl ">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://m.media-amazon.com/images/I/81wSpWSGbVL._AC_SL1400_.jpg"
                alt=""
              />
              <strong>Goodbye & Good Riddance</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://images.genius.com/8b673f80818e4cc1b975e8d8cd81344c.1000x1000x1.png"
              />
              <strong>?</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://i1.sndcdn.com/artworks-QrueNkDLRCNylbNP-s04csQ-t500x500.jpg"
              />
              <strong>Contradições</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://upload.wikimedia.org/wikipedia/pt/8/88/Na_Ilha_da_Magia.jpg"
              />
              <strong>Ao vivo na Ilha da Magia</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img className='w-24' src='https://m.media-amazon.com/images/I/81nFF-rXdRL._AC_SL1500_.jpg' />
              <strong>Astroworld</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img className='w-24' src="https://cdns-images.dzcdn.net/images/cover/cd87ca9c839c661e5e3da0ad13ba5348/500x500.jpg" alt="" />
              <strong>Meu Sonho - Parte 1</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className=" mt-10 font-semibold text-2xl ">Made for You</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'></div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
