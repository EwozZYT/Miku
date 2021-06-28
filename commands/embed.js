const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Miku Bot')
            .setDescription(`Dev By EwozZ_YT`)
            .setColor('#990000')
            .setAuthor('EwozZ_YT', 'https://cdn.discordapp.com/attachments/842497309194715220/858757418729472040/2Q.png', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/842497309194715220/858757418729472040/2Q.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/842497309194715220/858757418729472040/2Q.png')
            .setFooter('Miku : By EwozZ_YT', 'https://cdn.discordapp.com/attachments/842497309194715220/858757418729472040/2Q.png')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}