let axios = require('axios');
let handler = async (m, { conn, args }) => {
    if (!args[0]) throw m.reply('Putting *URL* Tiktok...')
    if (!args[0].match(/tiktok/gi)) throw `Invalid *URL*`
    let res = (await axios.get(API('can', '/api/download/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    await m.reply('Sedang diproses...')
    await conn.sendMessage(m.chat, { video: { url: res?.video?.url?.no_wm }, caption: `${res?.video?.loves || 'unknown'} Likes, ${res?.video?.views || 'unknown'} Views, ${res?.video?.comments || 'unknown'} Comments, ${res?.video?.shares || 'unknown'} Shares. Tiktok Video From ${res?.author?.name || 'unknown'} (${res?.author?.username || 'unknown'})\n\nSound : ${res?.backsound?.name || 'unknown'}\nLink : ${res?.backsound?.url || 'unknown'}`}, { quoted: m })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt)$/i
handler.limit = true
handler.group = false
module.exports = handler