//"Importa" as informações do arquivo JSON
const {prefix, token} = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();


//Printa a mensagem, quando o bot termina de iniciar
client.once('ready', () => {
    console.log("Olá, mundo! Eu estou pronta! :D");
});


//Checa se o usuário esta usando o prefix e se a condição for verdadeira execulta o comando
client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.')
    }

    else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }

    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
});  


client.on('message', message => {
    if (message.content === `hehehe`) {
        message.channel.send(`https://tenor.com/view/emoji-planning-evil-gif-11503561`);
    } 

    else if (message.content === `LETS FUCKING GO`) {
        message.channel.send(`https://tenor.com/view/lets-go-lets-goo-lest-gooooooooooooooooo-gif-19416648`)
    }
});

/* Responde ao usuários com "pong" quando digitam "(prefix)ping" mas sem ser estritos 
client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.')
    }

    else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    }
}); 
*/



client.login(token)