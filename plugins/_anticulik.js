let handler = m => m
handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*• INVITE GROUP •*

• 5 Hari 4k
• 2 Minggu 10k
• 1 Bulan 17k
• 1 Tahun 50k

⩩ 𝗣𝗔𝗬♡
┈┈┈┈┈┈┈         ͜͡               𖤣
➘
    *All*            ☁︎     ♡
  *Payment*                        ✧
                  இ
✧
┬ 📮 Note :
│ ɪ ᴍᴀʏ ʙᴇ ꜱʟᴏᴡ ᴛᴏ ʀᴇꜱᴘᴏɴᴅ ˄.  ̫.˄
╰━━━━━━━━━━━━━━━━┈─◂
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}
module.exports = handler