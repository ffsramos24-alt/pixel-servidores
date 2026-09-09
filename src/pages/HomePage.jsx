export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(./images/bg.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="text-center px-4 sm:px-6 relative z-10 w-full max-w-2xl mx-auto">
        <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black tracking-[0.05em] sm:tracking-[0.1em] mb-2 sm:mb-3 text-rainbow leading-tight">
          PIXEL SERVIDORES
        </h1>
        <p className="font-display text-[7px] sm:text-[9px] md:text-[10px] text-white/40 tracking-[0.2em] sm:tracking-[0.4em]">NETWORK</p>
      </div>
    </div>
  )
}
