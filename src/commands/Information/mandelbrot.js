const { EmbedBuilder } = require('discord.js');
const DiscordBot = require("../../client/DiscordBot");
const MessageCommand = require('../../structure/MessageCommand');

module.exports = new MessageCommand({
    command: {
        name: 'mandelbrot',
        description: 'Displays information about the Mandelbrot set in an embed.',
        aliases: ['mb'],
        permissions: ['SendMessages']
    },
    options: {
        cooldown: 5000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {Message} message 
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        const embed = new EmbedBuilder()


            .setColor('#0099ff')
            .setTitle('Mandelbrot Set')
            .setDescription('The Mandelbrot set is a fascinating and complex mathematical object. It is a set of complex numbers for which the function does not diverge when iteratively applied.')
            .addFields(
                { name: 'Fractal Geometry', value: 'The Mandelbrot set exhibits self-similarity at various levels of magnification. No matter how much you zoom in, the same intricate patterns repeat infinitely.' },
                { name: 'Mathematical Beauty', value: 'The Mandelbrot set is aesthetically pleasing and demonstrates the beauty of mathematics. Its intricate and infinitely complex patterns have captivated mathematicians and artists alike.' }
            )
            .setTimestamp()
            .setFooter({ text: 'Powered by Math' });

        await message.reply({ embeds: [embed] });
    }
}).toJSON();