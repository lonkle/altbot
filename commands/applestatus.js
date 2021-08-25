var webshot = require("webshot");
const fs = require('fs');
module.exports = {
	name: 'applestatus',
	description: 'Checks Apples services.',
	aliases: ['as'],
	cooldown: 30,
	execute(message, args) {
		message.channel.send("Fetching status... <a:loading:718190657579253782>")
			.then(msg => {
				webshot("https://www.apple.com/support/systemstatus/", "status.jpeg", { screenSize: { width: 1920, height: 1080 }, shotSize: { width: 990, height: 810 }, shotOffset: { left: 464, top: 98 } }, function () {
					msg.edit("https://www.apple.com/support/systemstatus/");
					message.channel.send({ files: ["status.jpeg"] });
					setTimeout(() => {
						try {
							fs.unlinkSync("status.jpeg")
						} catch (err) {
							console.error(err)
						}
					}, 5000);
				});
			})
	},
};
