const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Règles du serveur !')
            .setTitle('Règle a respecter sous peine de sanction !')
            .setDescription('Règle serveur EwozZ_YT : ')
            .setColor('RANDOM')
            .addField(`Toute , insultes est passible de sanctions.
            Le racisme, sexisme, discrimination ou autre sera sanctionné d'un warn.
            Tout caractère choquant ou pornographiques, etc sont interdites. 
             le respect des membres et du staff est obligatoire aussi.
             L' harcèlement ou les menaces sont interdites.`, true)
            .setAuthor('Miku | By EwozZ_YT', 'https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg')
            .setFooter('Mention || @everyone ||', 'https://cdn.discordapp.com/attachments/858745744030957609/859155711677562940/OIP_1.jpg')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}