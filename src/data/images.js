// Centralised premium imagery (Unsplash). Tuned crops for a luxury travel feel.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  hero: 'https://res.cloudinary.com/kmadmin/image/upload/v1628587313/kiomoi/Dibrugarh_1628587311314.jpg', // cinematic mountain road
  heroAlt: u('1469474968028-56623f02e42e', 1920),

  // Routes
  duliajan: u('1605649487212-47bdab064df7'),
  tinsukia: u('1597466599360-3b9775841aec'),
  pasighat: u('1506905925346-21bda4d32df4'),
  namsai: u('1518709268805-4e9042af9f23'),
  digboi: u('1441974231531-c6227db76b6e'),
  sivasagar: 'https://i0.wp.com/traveldreams.live/wp-content/uploads/2022/06/32.jpg?resize=1300%2C779&ssl=1',
  moran: u('1470770841072-f978cf4d019e'),
  roing: u('1464822759023-fed622ff2c3b'),

  // Tours
  anini: u('1626621341517-bbf3d9990a23', 1400),
  mechuka: u('1571401835393-8c5f35328320', 1400),
  tawang: 'https://www.indiantempletour.com/wp-content/uploads/2023/03/Tawang-Tour-Package.jpg',

  // Services
  airport: u('1436491865332-7a61a109cc05'),
  taxi: u('1549317661-bd32c8ce0db2'),
  rental: u('1503376780353-7e6692767b70'),
  netours: u('1480714378408-67cf0d13bc1b'),
  family: u('1488646953014-85cb44e25828'),
  outstation: u('1449965408869-eaa3f722e40d'),

  // Fleet
  fleetSuv: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10818/1755775730308/front-left-side-47.jpg',
  fleetSedan: u('1552519507-da3b142c6e3d', 1400),
  fleetInnova: 'https://images.overdrive.in/wp-content/uploads/2023/05/Untitled-design-10-900x506.png',
  fleetTempo: u('1464219789935-c2d9d9aba644', 1400),
  fleetLuxury: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',
  fleetDzire: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/11/5-3.webp?ssl=1',
  fleetBolero:'https://imgd.aeplcdn.com/642x336/n/cw/ec/210987/bolero-exterior-right-front-three-quarter-3.png?isig=0&q=80',

  // Gallery
  g1: u('1488646953014-85cb44e25828', 900),
  g2: u('1502920917128-1aa500764cbd', 900),
  g3: u('1454496522488-7a8e488e8606', 900),
  g4: u('1582719478250-c89cae4dc85b', 900),
  g5: u('1436491865332-7a61a109cc05', 900),
  g6: u('1469854523086-cc02fe5d8800', 900),
  g7: u('1533692328991-08159ff19fca', 900),
  g8: u('1501785888041-af3ef285b470', 900),

  // Misc
  cta: u('1517524008697-84bbe3c3fd98', 1600),
  about: u('1485291571150-772bcfc10da5', 1200),
}
