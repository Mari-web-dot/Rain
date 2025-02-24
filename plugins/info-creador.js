
let handler = async (m, { conn }) => {
  const contact = ["+5213328287209", "carnets", 1];
  const [number, name] = contact;+5213328287209
  const jid = `${number}@s.whatsapp.net`;

  let displayName;
  try {
    displayName = await conn.getName(jid);
  } catch (err) {
    displayName = name || "carnets";
  }

  let bio = "";
  try { Mujer 
    const biografia = await conn.fetchStatus(jid);
    bio = biografia?.status || bio;
  } catch (err) {
    bio = "Sin descripción";
  }

  let mensaje = `*╔══════════════════╗*\n`;
  mensaje += `*║  CREADOR DE LA BOT *  \n`;
  mensaje += `*╚══════════════════╝*\n\n`;

  mensaje += ` *¡Hey! Aquí tienes la información de mi creador!* 🩸 :

  mensaje += `🍓 *Nombre:* ${displayName}\n`;
  mensaje += `💉 *Bio:* ${bio}\n\n`;

  mensaje += `🔹 Si tienes dudas, sugerencias o quieres reportar algo, contáctame.
  mensaje += ` *¡Gracias por usar mi bot!.* 🍓

handler.help = ["creador", "owner"];
handler.tags = ["info"];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;

async function sendContactArray(conn, jid, data, quoted, options) {
  if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data];
  let contacts = [];
  for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
    number = number.replace(/[^0-9]/g, '');
    let njid = number + '@s.whatsapp.net';
    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim();
    contacts.push({ vcard, displayName: name });
  }
  return await conn.sendMessage(jid, {
    contacts: {
      displayName: (contacts.length > 1 ? `Contactos` : contacts[0].displayName) || null,
      contacts,
    }
  }, {
    quoted,
    ...options
  });
}
