let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  let siji = await conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*${isLimit ? 'Pakai ': ''}Link:* ${await shortlink(dl_link)}
`.trim(), m)
    if (!isLimit) await conn.sendMessage(m.chat, { document: { url: dl_link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: siji})
}
handler.help = ['mp3','a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 6
handler.limit = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}