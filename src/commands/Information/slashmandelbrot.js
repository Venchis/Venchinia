const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const ApplicationCommand = require("../../structure/ApplicationCommand");

module.exports = new ApplicationCommand({
    command: {
        name: 'mandelbrot',
        description: 'Displays information about the Mandelbrot set in an embed.',
        type: 1,
        options: []
    },
    options: {
        cooldown: 10000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
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

        await interaction.reply({ embeds: [embed] });
    }
}).toJSON();
