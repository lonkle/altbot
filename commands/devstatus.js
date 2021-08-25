const Discord = require('discord.js');
var webshot = require("webshot");
const fs = require('fs');
module.exports = {
	name: 'devstatus',
	description: 'Checks Apples services.',
	aliases: ['ds'],
	cooldown: 30,
	execute(message, args) {
		message.channel.send("Fetching status... <a:loading:718190657579253782>")
			.then(msg => {
				webshot("https://developer.apple.com/system-status/", "dstatus.jpeg", { screenSize: { width: 1920, height: 1080 }, shotSize: { width: 984, height: 708 }, shotOffset: { left: 467, top: 98 } }, function () {
					msg.edit("https://developer.apple.com/system-status/");
					message.channel.send({ files: ["dstatus.jpeg"] });
					setTimeout(() => {
						try {
							fs.unlinkSync("dstatus.jpeg")
						} catch (err) {
							console.error(err)
						}
					}, 5000);
				});
			})
	},
};
