let fs = require('fs') 
let chalk = require('chalk')

let waifu = JSON.parse(fs.readFileSync('./media/waifu.json'))

owner = [
  ['6285785705233'],
  ['6285785705233'],
  ['6285785705233', 'Chandra XD', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here

lolkey = 'YourKey' // Registrasi atau beli di web https://api.lolhuman.xyz
viokey = 'beta' // Ini gausah diubah udh bener

mods = [] // Want some help?
prems = [] // Premium user has unlimited limit
APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org',
  zeks: 'https://api.zeks.me',
  ana: 'https://anabotofc.herokuapp.com',
  gimez: 'https://masgimenz.my.id',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  violetics : 'https://violetics.pw',
  lol: 'https://api.lolhuman.xyz',
  males : 'https://malesin.xyz'
}
APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyaine',
  'https://anabotofc.herokuapp.com': 'AnaBot',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.lolhuman.xyz': 'apikamu',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://violetics.pw': 'beta'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '© 𝙄𝙩𝙨𝙪𝙠𝙖𝘽𝙤𝙩-𝙈𝙙'
  var sticker_author = '𝘾𝙝𝙖𝙣𝙙𝙧𝙖 𝙓𝘿'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Yang rapi dong dek :v 
global.img = pickRandom(waifu)
global.dtu = 'ᴅᴏɴᴀᴛᴇ'
global.urlnya = "https://chandra-xd.github.io/trakteer.me"
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 857-8570-5233'

// Sticker WM
packname = sticker_name
author = sticker_author
wm = `Jangan lupa donasi kak\nSaweria : https://saweria.co/pnggilajacn\nTrakteer : https://trakteer.id/pnggilajacn\n\n© 𝙄𝙩𝙨𝙪𝙠𝙖𝘽𝙤𝙩-𝙈𝙙 | 𝘾𝙝𝙖𝙣𝙙𝙧𝙖 𝙓𝘿`
wm2 = '© 𝙄𝙩𝙨𝙪𝙠𝙖𝘽𝙤𝙩-𝙈𝙙 | 𝘾𝙝𝙖𝙣𝙙𝙧𝙖 𝙓𝘿'
jepang = '私はボットチャンドラです'

Intervalmsg = 1900 // Ini semacam antispam udh biarin aja ngab
multiplier = 100 // Makin tinggi makin susah bang
rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
