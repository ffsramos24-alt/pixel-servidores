import { games } from '../data/servers'
import { useNavigate } from 'react-router-dom'

export default function ServersPage() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(./images/bg.jpg)' }} />
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black tracking-wider text-rainbow mb-2">
            SERVIDORES
          </h1>
          <p className="font-display text-[8px] sm:text-[10px] text-white/30 tracking-widest">ESCOLHA SEU JOGO E JOGUE AGORA</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => nav(`/servidores/${game.id}`)}
              className="group text-left rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%)',
                boxShadow: `0 0 40px ${game.color}08`,
              }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src={game.heroImage} alt={game.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="font-display text-lg sm:text-xl font-black tracking-wider" style={{ color: game.color }}>
                    {game.name.toUpperCase()}
                  </h2>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
