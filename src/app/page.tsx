import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'
import { Sidebar } from '@/components/sidebar'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
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
              <button className=" w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible relative left-24 ">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://images.genius.com/8b673f80818e4cc1b975e8d8cd81344c.1000x1000x1.png"
              />
              <strong>?</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible relative left-72">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group ">
              <img
                className="w-24"
                src="https://i1.sndcdn.com/artworks-QrueNkDLRCNylbNP-s04csQ-t500x500.jpg"
              />
              <strong>Contradições</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible relative left-48">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://upload.wikimedia.org/wikipedia/pt/8/88/Na_Ilha_da_Magia.jpg"
              />
              <strong>Ao vivo na Ilha da Magia</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible relative left-28">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://m.media-amazon.com/images/I/81nFF-rXdRL._AC_SL1500_.jpg"
              />
              <strong>Astroworld</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible relative left-52">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 cursor-pointer transition-colors group">
              <img
                className="w-24"
                src="https://cdns-images.dzcdn.net/images/cover/cd87ca9c839c661e5e3da0ad13ba5348/500x500.jpg"
                alt=""
              />
              <strong>Meu Sonho - Parte 1</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1  rounded-full bg-green-400 text-black invisible group-hover:visible relative left-36">
                <Play />
              </button>
            </a>
          </div>

          <h2 className=" mt-10 font-semibold text-2xl ">Made for You</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img
                className="w-full"
                src="https://m.media-amazon.com/images/I/816raO8yvrL._AC_SL1400_.jpg"
                alt=""
              />
              <strong className="font-semibold">Death Race for Love</strong>
              <span className="text-sm text-zinc-400">Juice Wrld</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img
                className="w-full"
                src="https://m.media-amazon.com/images/I/91duom08xrL._AC_SL1500_.jpg"
                alt=""
              />
              <strong className="font-semibold">17</strong>
              <span className="text-sm text-zinc-400">XXXTentacion</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img
                className="w-full"
                src="https://i.scdn.co/image/ab67616d0000b27324c59299d5e83424a2f35be5"
                alt=""
              />
              <strong className="font-semibold">prévias.zip</strong>
              <span className="text-sm text-zinc-400">Teto</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img
                className="w-full"
                src="https://akamai.sscdn.co/uploadfile/letras/albuns/0/6/9/1/1095521623769999.jpg"
                alt=""
              />
              <strong className="font-semibold">We All Shine</strong>
              <span className="text-sm text-zinc-400">YNW Melly</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img
                className="w-full"
                src="https://media.pitchfork.com/photos/613214a114458bf5df99f2a9/1:1/w_3000,h_3000,c_limit/Drake-Certified-Lover-Boy.png"
                alt=""
              />
              <strong className="font-semibold">Certified Lover Boy</strong>
              <span className="text-sm text-zinc-400">Drake</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
