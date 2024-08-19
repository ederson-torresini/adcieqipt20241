// Choose a cache name
const cacheName = 'cache-v1'

// List the files to precache
const precacheResources = [
  './',
  './assets/baixo.png',
  './assets/cima.png',
  './assets/coruja-branca.png',
  './assets/coruja-cinza.png',
  './assets/coruja.mp3',
  './assets/direita.png',
  './assets/esquerda.png',
  './assets/fundo.png',
  './assets/iniciar.mp3',
  './assets/logo/128.gif',
  './assets/logo/128.png',
  './assets/logo/192.gif',
  './assets/logo/192.png',
  './assets/logo/256.gif',
  './assets/logo/256.png',
  './assets/logo/384.gif',
  './assets/logo/384.png',
  './assets/logo/512.gif',
  './assets/logo/512.png',
  './assets/mapa.mp3',
  './assets/mapa/blocos.png',
  './assets/mapa/grama.png',
  './assets/mapa/itens.png',
  './assets/mapa/mapa.json',
  './assets/mapa/paredes.png',
  './assets/mapa/pedras.png',
  './assets/mapa/personagem.png',
  './assets/mapa/plantas.png',
  './assets/mapa/sombras-plantas.png',
  './assets/mapa/sombras.png',
  './assets/nuvem.png',
  './index.css',
  './index.html'
]

self.addEventListener('install', (event) => {
  console.log('Service worker install event!')
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)))
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!')
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
