const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Règles du serveur !')
            .setTitle('Règle a respecter sous peine de sanction !')
            .setDescription('[Recherche Google](https://google.fr) **bonjour**')
            .setColor('RANDOM')
            .addField(`
            ─━━━━━━⊱❉⊰━━━━━━─
            ↦𝚁é𝚐𝚕𝚎𝚖𝚎𝚗𝚝 𝙶é𝚗é𝚛𝚊𝚕
            ─━━━━━━⊱❉⊰━━━━━━─
            
            ▸ Toute provocation, insultes est passible de sanctions en fonction de la gravité.
            ▸ Le racisme, sexisme, discrimination ou autre sera sanctionné d'un warn. (voir plus)
            ▸ Tout caractère choquant ou pornographiques, etc sont interdites. 
            ▸ Le non respect du staff sera punie d'un warn, le respect des membres est obligatoire aussi.
            ▸ L' harcèlement ou les menaces sont interdites.`, true)
            .addField(`              ' Deuxièmement nous voulons des salons propre et lisible donc :
            
            ▸ Le spam est interdit.
            ▸ En cas de soucis entre deux personnes aller en message privé ou nous le reporté 
            ▸ Le flood est interdit
             -> voici pour les interdiction passible par un mute. 
            
              ' Troisièmement les messages privé ¦ channel vocaux
            
            ▸ La pub en message privé est interdite.
            ▸ Menaces ou intimidations interdites.
            ▸ Merci de ne pas crié, insulter dans les vocaux.
            -> voici les interdictions ou nous allons voir pour la sanction, selon la gravité.`,true )
            .setAuthor('Miku | By EwozZ_YT', 'https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg')
            .setFooter('Mention || @everyone ||', 'https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}