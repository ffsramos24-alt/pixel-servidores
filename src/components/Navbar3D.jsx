import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Server, Users, MessageCircle, Shield } from 'lucide-react'

export default function Navbar3D() {
  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState(null)
  const [isTouch, setIsTouch] = useState(false)
  const nav = useNavigate()

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, color: '#ff3b3b' },
    { id: 'servidores', label: 'Servidores', icon: Server, color: '#a855f7' },
    { id: 'comunidade', label: 'Comunidade', icon: Users, color: '#ff9500' },
    { id: 'discord', label: 'Discord', icon: MessageCircle, color: '#5865F2' },
    { id: 'suporte', label: 'Suporte', icon: Shield, color: '#00e676' },
  ]

  const getIndex = (id) => tabs.findIndex(t => t.id === id)
  const getScale = (id) => {
    if (!hovered) return 1
    const dist = Math.abs(getIndex(id) - getIndex(hovered))
    if (dist === 0) return 1.4
    if (dist === 1) return 1.15
    return 1
  }

  const handleTap = (id) => {
    if (isTouch) setHovered(hovered === id ? null : id)
    setActive(id)
    if (id === 'home') nav('/')
    else if (id === 'servidores') nav('/servidores')
  }

  return (
    <>
      <style>{`
        .dock-sidebar { perspective: 800px; }
        .dock-item-side {
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), margin 0.2s ease;
          transform-origin: left center;
          -webkit-tap-highlight-color: transparent;
        }
        .dock-shelf-side {
          background: linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.2) 100%);
          box-shadow: 1px 0 0 rgba(255,255,255,0.10) inset, -1px 0 0 rgba(0,0,0,0.3) inset, 4px 0 16px rgba(0,0,0,0.4);
        }
        .dock-tooltip-side { animation: tooltipSideIn 0.15s ease-out; }
        @keyframes tooltipSideIn { from { opacity: 0; transform: translateX(4px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>

      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 pointer-events-none">
        <div className="flex items-center pl-2 sm:pl-3 pointer-events-auto">
          <div className="dock-sidebar">
            <div className="dock-shelf-side rounded-2xl sm:rounded-3xl py-2 sm:py-3 px-1.5 sm:px-2 flex flex-col items-start justify-center">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isHov = hovered === tab.id
                const scale = getScale(tab.id)
                return (
                  <div key={tab.id} className="relative flex items-center">
                    {isHov && !isTouch && (
                      <div className="dock-tooltip-side absolute left-full ml-3 bg-black/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10 z-50"
                        style={{ boxShadow: `0 4px 12px ${tab.color}33` }}>
                        {tab.label}
                      </div>
                    )}
                    <button
                      onClick={() => handleTap(tab.id)}
                      onMouseEnter={() => !isTouch && setHovered(tab.id)}
                      onMouseLeave={() => !isTouch && setHovered(null)}
                      className="dock-item-side relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center cursor-pointer"
                      style={{
                        transform: `scale(${scale})`,
                        marginLeft: `${(scale - 1) * 14}px`,
                        background: `linear-gradient(135deg, ${tab.color}cc 0%, ${tab.color}88 100%)`,
                        boxShadow: active === tab.id
                          ? `0 0 20px ${tab.color}66, 4px 0 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)`
                          : `2px 0 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)`,
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-lg mx-auto px-2 pb-2 pointer-events-auto">
          <div className="dock-shelf-side rounded-2xl px-2 py-1.5 flex items-center justify-center gap-1"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.2) 100%)', boxShadow: '0 -2px 16px rgba(0,0,0,0.4)' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTap(tab.id)}
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${tab.color}cc 0%, ${tab.color}88 100%)`,
                    boxShadow: active === tab.id ? `0 0 16px ${tab.color}66, inset 0 1px 0 rgba(255,255,255,0.2)` : `inset 0 1px 0 rgba(255,255,255,0.15)`,
                    border: '1px solid rgba(255,255,255,0.15)',
                    transform: active === tab.id ? 'translateY(-4px)' : 'none',
                  }}
                >
                  <Icon className="w-5 h-5 text-white drop-shadow-lg" />
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
