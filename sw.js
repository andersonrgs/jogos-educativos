const CACHE_NAME = 'jogos-kids-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './aventura_familia.html',
  './char_henrique.png',
  './char_anderson.png',
  './char_mamae.png',
  './char_vovo.png',
  './avatar_henrique.png',
  './icon-192.png',
  './icon-512.png',
  './Abc_Divertido.html',
  './matematica_divertida.html',
  './Organizar_Bagunca.html',
  './Pinguim.html',
  './estoura_baloes.html',
  './jogo_memoria.html',
  './rango_monstro.html',
  './sinfonia_animais.html',
  './sons/vaca.mp3',
  './sons/cao.mp3',
  './sons/gato.mp3',
  './sons/porco.mp3',
  './sons/ovelha.mp3',
  './sons/cavalo.mp3',
  './sons/leao.mp3',
  './sons/elefante.mp3',
  './sons/macaco.mp3',
  './sons/sapo.mp3',
  './sons/galo.mp3',
  './sons/pato.mp3',
  './sons/carro.mp3',
  './sons/buzina.mp3',
  './sons/trem.mp3',
  './sons/moto.mp3',
  './sons/helicoptero.mp3',
  './sons/trex.mp3',
  './sons/triceratops.mp3',
  './sons/raptor.mp3',
  './sons/stegossauro.mp3',
  './sons/pescocudo.mp3',
  './sons/violao.mp3',
  './sons/piano.mp3',
  './sons/trompete.mp3',
  './sons/flauta.mp3',
  './sons/xilofone.mp3',
  './sons/bateria.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => console.log('Cache warn:', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => cachedResponse);
    })
  );
});
