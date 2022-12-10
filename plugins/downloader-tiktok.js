/* let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://vm.tiktok.com/ZSRtNxugp`
if (!args[0].includes("tiktok")) return m.reply(`Link Invalid`)
   let rest = await fetch(`https://malesin.xyz/tiktok?url=${args[0]}`)
   let res = await rest.json()
   let { title, author, video, audio, videoWM } = res
m.reply('Sedang diproses...')
conn.sendFile(m.chat, video, 'tiktok.mp4', `*Tiktok Downloader*

*Title :* ${title}
*Link :* ${await shortlink(video)}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(tt|tik(tok)?(dl)?)$/i
module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}
*/
let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(API('lol', '/api/tiktok', { url: args[0] }, 'apikey'))
  let json = await res.json()
  m.reply('Sedang diproses...')
  let txt = `*Link :* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  await conn.sendFile(m.chat, json.result.link, 'tiktok.mp4', txt, m )
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(tt|tik(tok)?(dl)?)$/i
module.exports = handler