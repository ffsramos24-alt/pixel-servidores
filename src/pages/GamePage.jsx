import { useParams, useNavigate } from 'react-router-dom'
import { games } from '../data/servers'
import { Copy, Check, Users, Wifi, Clock, ArrowLeft, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function GamePage() {
  const { gameId } = useParams()
  const nav = useNavigate()
  const game = games.find(g => g.id === gameId)
  const [copied, setCopied] = useState(null)

  if (!game) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-black text-white mb-4">404</h1>
        <button onClick={() => nav('/servidores')} className="px-6 py-3 rounded-lg bg-orange-500 text-white font-bold">Voltar</button>
      </div>
    </div>
  )

  const copy = (text, i) => {
    navigator.clipboard.writeText(text)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(./images/bg.jpg)' }} />
      <div className="fixed inset-0 bg-black/80" />
      
      <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto">
        <button onClick={() => nav('/servidores')} className="flex items-center gap-2 text-white/50 hover:text-white mb-6 font-display text-[10px]">
          <ArrowLeft className="w-4 h-4" /> VOLTAR
        </button>

        <div className="flex items-center gap-4 mb-8">
          <img src={game.heroImage} alt={game.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2" style={{ borderColor: `${game.color}44` }} />
          <div>
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black tracking-wider" style={{ color: game.color }}>
              {game.name.toUpperCase()}
            </h1>
            <p className="font-display text-[8px] sm:text-[10px] text-white/40 tracking-wider">{game.tagline}</p>
          </div>
        </div>

        <div className="space-y-4">
          {game.servers.map((s, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/8 p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wider">{s.name}</h3>
                <div className="flex items-center gap-3 text-[10px] font-display">
                  <span className="flex items-center gap-1 text-green-400"><Users className="w-3 h-3" /> {s.players}/{s.maxPlayers}</span>
                  <span className="flex items-center gap-1 text-white/40"><Wifi className="w-3 h-3" /> {s.ping}ms</span>
                  <span className="flex items-center gap-1 text-white/40"><Clock className="w-3 h-3" /> {s.wipe}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 font-display text-[10px] text-white/50">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{s.ip}</span>
                </div>
                <button
                  onClick={() => copy(s.ip, i)}
                  className="px-3 py-2 rounded-lg border transition-all"
                  style={{
                    borderColor: copied === i ? '#00ff8840' : `${game.color}30`,
                    background: copied === i ? '#00ff8810' : `${game.color}08`,
                    color: copied === i ? '#00ff88' : game.color,
                  }}
                >
                  {copied === i ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
