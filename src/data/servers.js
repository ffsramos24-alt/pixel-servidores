export const games = [
  {
    id: 'rust',
    name: 'Rust',
    tagline: 'Sobreviva. Construa. Domine.',
    color: '#ff6a00',
    heroImage: './games/rust.jpg',
    servers: [
      { name: 'RUST // BR LOBBY', ip: '185.25.180.10:28015', map: "Oxum's Isle", players: 142, maxPlayers: 200, ping: 32, wipe: 'Sexta 20:00' },
      { name: 'RUST // PVP ARENA', ip: '185.25.180.11:28016', map: 'Arid Mountains', players: 87, maxPlayers: 100, ping: 28, wipe: 'Quarta 18:00' },
    ],
  },
  {
    id: 'dayz',
    name: 'DayZ',
    tagline: 'Pós-apocalipse realista.',
    color: '#00ff88',
    heroImage: './games/dayz.jpg',
    servers: [
      { name: 'DAYZ // CHERNARUS', ip: '185.25.180.20:2302', map: 'Chernarus+', players: 58, maxPlayers: 80, ping: 45, wipe: 'Quinzenal' },
      { name: 'DAYZ // LIVONIA', ip: '185.25.180.21:2303', map: 'Livonia DLC', players: 34, maxPlayers: 60, ping: 42, wipe: 'Quinzenal' },
    ],
  },
  {
    id: 'scum',
    name: 'SCUM',
    tagline: 'Metabolismo real. Combate brutal.',
    color: '#ff3355',
    heroImage: './games/scum.jpg',
    servers: [
      { name: 'SCUM // BREEZEHILL', ip: '185.25.180.30:7022', map: 'Isle of Liurnia', players: 64, maxPlayers: 128, ping: 38, wipe: 'Semanal' },
    ],
  },
  {
    id: 'humanitz',
    name: 'HumanitZ',
    tagline: 'Sobrevivência em mundo aberto.',
    color: '#00b4ff',
    heroImage: './games/humanitz.jpg',
    servers: [
      { name: 'HUMANITZ // SURVIVAL', ip: '185.25.180.40:27015', map: 'Nova Terra', players: 45, maxPlayers: 100, ping: 55, wipe: 'Mensal' },
    ],
  },
  {
    id: 'conan',
    name: 'Conan Exiles',
    tagline: 'Conquiste. Escravize. Domine.',
    color: '#ffc800',
    heroImage: './games/conan.jpg',
    servers: [
      { name: 'CONAN // EXILED LANDS', ip: '185.25.180.50:7777', map: 'Exiled Lands', players: 38, maxPlayers: 70, ping: 48, wipe: 'Quinzenal' },
      { name: 'CONAN // ISLE OF SIPTAH', ip: '185.25.180.51:7778', map: 'Isle of Siptah', players: 22, maxPlayers: 70, ping: 50, wipe: 'Quinzenal' },
    ],
  },
]
