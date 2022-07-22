const { time } = require('console');
const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require('constants');
const Discord = require('discord.js');
const { createServer } = require('http');
const { send } = require('process');
const client = new Discord.Client();
const { token } = require('./config.json');

new Discord.DMChannel(client, 'I am a bot');

let gamingChannles = [ 'Duo', 'Trio', 'Squad', 'Gaming room', 'Minecraft', 'Pubg', 'Roblox', 'Among Us', 'Fortnite' ];

let gamingChannlesUserLimit = [ 2, 3, 4, 99, 99, 4, 99, 15, 99 ];

let meme = [ 'Video memes', 'Text memes', 'NSFW memes', 'Dank memer' ];

let gamingTextChannel = [ 'Duo', 'Trio', 'Squad', 'Minecraft', 'Pubg', 'Roblox', 'Among Us', 'Fortnite' ];

let chill = [ 'Movie Night', 'Cafeteria', 'Chill Zone', 'Friendly people' ];

let chillUserLimit = [ 99, 99, 50, 99 ];

let music = [ 'Music Commands', 'Music Zone', 'Music Zone 1' ];

let MusicUserLimit = [ 0, 20, 80 ];

let Datingshow = [ 'Dating room', 'Dating room 1' ];

let DatingshowUserLimit = [ 2, 2 ];

let staffChannel = [ 'staff discussion', 'Metting room', 'Music', 'Gaming', 'Movie Night' ];

let staffChannelUserLimit = [ 0, 99, 99, 50, 50, 99 ];

let stream = [ 'Streaming Chat', 'Streaming room #1', 'Streaming room #2', 'Streaming room #3' ];

let streamUserLimit = [ 0, 30, 30, 99 ];

let serverImprovement = [ 'Suggestions', 'Complaints', 'Announcements' ];

let sharework = [ 'Art', 'Meme', 'Photographs' ];

let welcome = [ 'Welcome', 'Server Rules', 'Announcements' ];

let roleList = [
	'Members',
	'Youtuber',
	'Twitch Streamer',
	'Single',
	'Trusted Members',
	'Boosters',
	'Bots',
	'Moderator',
	'Sr. Moderator',
	'Admin',
	'Owner'
];

let roleColors = [
	'#E08C85',
	'#ff0006',
	'#6441a4',
	'#7A95B1',
	'#6BD4CE',
	'#E2E2E2',
	'#B3CD8E',
	'#49BCD9',
	'#4984B7',
	'#DEEF5A',
	'#F7874A'
];

// const command = require('./command');

client.on('guildCreate', (guild) => {
	let ownerId = `${guild.ownerID}`;

	// console.log(ownerId);

	const dmEmbed = new Discord.MessageEmbed()
		.setAuthor('Discord Server Setup', 'https://imgur.com/HwPI8nX')
		.setTitle('My bot commands')
		.setColor('#FF2D00')
		.setDescription('`To setup your server, my role should be at the top position of the server.`')
		.addFields({ name: 'To get a list of commands in the ' + `${guild.name}` + ' Server type:', value: '`$help`' });

	// .setThumbnail('https://example.png')
	// .setFooter('This is a example footer', 'https://example.png');

	// let owner = client.guilds.cache.get('717026383230140540');

	client.users.fetch(`${ownerId}`, false).then((user) => {
		user.send(dmEmbed);
	});

	// guild.owner.send(dmEmbed);

	// owner.send(dmEmbed);
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	client.user.setActivity('Creating server for you.');

	client.guilds.cache.forEach((guild) => {
		console.log(guild.name);
	});

	client.on('guildMemberAdd', (guildMember) => {
		let role = guildMember.guild.roles.cache.find((role) => role.name === 'Members');

		guildMember.roles.add(role);
	});

	client.on('message', (receivedMessage) => {
		let member = receivedMessage.guild.roles.cache.get('Members');

		if (receivedMessage.content.startsWith('$')) {
			let basicId = `${receivedMessage.channel.id}`;

			let basicChannel = client.channels.cache.get(basicId);
			processCommand(receivedMessage, basicChannel, member);
		}
	});
});

function processCommand(receivedMessage, basicChannel, member) {
	let fullCommand = receivedMessage.content.substr(1);
	let splitCommand = fullCommand.split(' ');
	let primaryCommand = splitCommand[0];
	let arguments = splitCommand.splice(1);

	if (primaryCommand == 'create' && arguments == 'server') {
		// CREATES Channels
		category(receivedMessage);
		category1(receivedMessage);
		category2(receivedMessage);
		category3(receivedMessage);
		category4(receivedMessage);
		category5(receivedMessage);
		category6(receivedMessage);
		category7(receivedMessage);
		category8(receivedMessage);
		category9(receivedMessage);
		category10(receivedMessage);

		// CREATES Roles

		roles(receivedMessage, member);
	} else if (primaryCommand == 'create' && arguments == 'roles') {
		roles(receivedMessage, member);
	} else if (primaryCommand == 'create' && arguments == 'channels') {
		// category(receivedMessage);
		// category1(receivedMessage);
		// category2(receivedMessage);
		// category3(receivedMessage);
		// category4(receivedMessage);
		// category5(receivedMessage);
		// category6(receivedMessage);
		// category7(receivedMessage);
		// category8(receivedMessage);
		// category9(receivedMessage);
		category10(receivedMessage);
	} else if (primaryCommand == 'delete' && arguments == 'channels') {
		receivedMessage.guild.channels.cache.forEach((channel) => channel.delete());
	} else if (primaryCommand == 'delete' && arguments == 'roles') {
		receivedMessage.guild.roles.cache.forEach((roles) => {
			roles.delete().then((deleted) => console.log(`Deleted role ${deleted.name}`)).catch(console.error);
		});
	} else if (primaryCommand == 'help' && arguments == '') {
		const helpEmbed = new Discord.MessageEmbed()
			.setAuthor('My bot', 'https://cdn.iview.abc.net.au/thumbs/i/zw/ZW2025A_5e4cc7db4632d_1280.jpg')
			.setTitle('My bot commands')
			.setColor('#FF2D00')
			.addFields(
				{ name: 'Roles', value: '`$help roles`', inline: true },
				{ name: 'Channels', value: '`$help channel`', inline: true },
				{ name: 'Server Setup', value: '`$help server`', inline: true }
			);

		// .setThumbnail('https://example.png')
		// .setFooter('This is a example footer', 'https://example.png');

		receivedMessage.channel.send(helpEmbed);
	} else if (primaryCommand == 'help' && arguments == 'roles') {
		const roleEmbed = new Discord.MessageEmbed()
			.setAuthor('My bot', 'https://cdn.iview.abc.net.au/thumbs/i/zw/ZW2025A_5e4cc7db4632d_1280.jpg')
			.setTitle('My bot commands | Roles')
			.setColor('#FF2D00')
			// .setDescription('Use `$create roles` to create the follwing roles: ')
			.addFields(
				{ name: 'To create pre-made Roles:', value: '`$create roles`' },
				{ name: 'To delete all roles in your server:', value: '`$delete roles`' },
				{
					name  : 'Pre-made Roles that will be created:',
					value :
						'`Member`' +
						', ' +
						'`Youtuber`' +
						', ' +
						'`Twitch Streamer`' +
						', ' +
						'`Single`' +
						', ' +
						'`Trusted Members`' +
						', ' +
						'`Boosters`' +
						', ' +
						'`Bots`' +
						', ' +
						'`Moderator`' +
						', ' +
						'`Sr.Moderator`' +
						', ' +
						'`Admin`' +
						', ' +
						'`Owner`' +
						'.'
				}
			);

		// .setThumbnail('https://example.png')
		// .setFooter('This is a example footer', 'https://example.png');

		receivedMessage.channel.send(roleEmbed);
	} else if (primaryCommand == 'help' && arguments == 'channels') {
		const channelEmbed = new Discord.MessageEmbed()
			.setAuthor('My bot', 'https://cdn.iview.abc.net.au/thumbs/i/zw/ZW2025A_5e4cc7db4632d_1280.jpg')
			.setTitle('My bot commands | Channels')
			.setColor('#FF2D00')
			// .setDescription('Use `$create roles` to create the follwing roles: ')
			.addFields(
				{ name: 'To create pre-made Categories with channels included:', value: '`$create categories`' },
				{
					name  : 'To delete all categoires including all channels in your server:',
					value : '`$delete channels`'
				},
				{
					name  : 'Pre-made Categories that will be created:',
					value :
						'`Welcome`' +
						', ' +
						'`Memes`' +
						', ' +
						'`Share your work`' +
						', ' +
						'`Server Improvement`' +
						', ' +
						'`Gaming`' +
						', ' +
						'`Dating Show`' +
						',' +
						'`Chill Zone`' +
						', ' +
						'`Music Zone`' +
						', ' +
						'`Staff Only`' +
						', ' +
						'`Streaming`' +
						'.'
				}
			);

		// .setThumbnail('https://example.png')
		// .setFooter('This is a example footer', 'https://example.png');

		receivedMessage.channel.send(channelEmbed);
	} else if (primaryCommand == 'help' && arguments == 'server') {
		const channelEmbed = new Discord.MessageEmbed()
			.setAuthor('My bot', 'https://cdn.iview.abc.net.au/thumbs/i/zw/ZW2025A_5e4cc7db4632d_1280.jpg')
			.setTitle('My bot commands | Server Setup')
			.setColor('#FF2D00')
			// .setDescription('Use `$create roles` to create the follwing roles: ')
			.addFields(
				{ name: 'To create pre-made Categories and roles:', value: '`$create server`' },
				{
					name  : 'Pre-made Categories that will be created:',
					value :
						'`Welcome`' +
						', ' +
						'`Memes`' +
						', ' +
						'`Share your work`' +
						', ' +
						'`Server Improvement`' +
						', ' +
						'`Gaming`' +
						', ' +
						'`Dating Show`' +
						',' +
						'`Chill Zone`' +
						', ' +
						'`Music Zone`' +
						', ' +
						'`Staff Only`' +
						', ' +
						'`Streaming`' +
						'.'
				},
				{
					name  : 'Pre-made Roles that will be created:',
					value :
						'`Member`' +
						', ' +
						'`Youtuber`' +
						', ' +
						'`Twitch Streamer`' +
						', ' +
						'`Single`' +
						', ' +
						'`Trusted Members`' +
						', ' +
						'`Boosters`' +
						', ' +
						'`Bots`' +
						', ' +
						'`Moderator`' +
						', ' +
						'`Sr.Moderator`' +
						', ' +
						'`Admin`' +
						', ' +
						'`Owner`' +
						'.'
				}
			);

		// .setThumbnail('https://example.png')
		// .setFooter('This is a example footer', 'https://example.png');

		receivedMessage.channel.send(channelEmbed);
	} else {
		const User = client.users.cache.get(`${client.user.id}`).displayName;
		const embed = new Discord.MessageEmbed()
			.setAuthor('My bot', 'https://cdn.iview.abc.net.au/thumbs/i/zw/ZW2025A_5e4cc7db4632d_1280.jpg')
			.setTitle('I am not sure what are you talking about. Try `$help` for a list of commands')
			.setColor('#FF2D00');

		// .setThumbnail('https://example.png')
		//
		// .setFooter('This is a example footer', 'https://example.png');

		receivedMessage.channel.send(embed);
	}
}

// Welcome Category

function category(receivedMessage, member) {
	receivedMessage.guild.channels
		.create('🥰 Welcome', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			// //

			createChannel(receivedMessage, categoryId, member);
		});
}

function createChannel(receivedMessage, categoryId, member) {
	for (let i = 0; i <= welcome.length; i++) {
		receivedMessage.guild.channels
			.create(welcome[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.catch(() => {
				console.error;
			});
	}
}

// Meme Category

function category1(receivedMessage) {
	receivedMessage.guild.channels
		.create('😂Memes', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			// //

			createChannel1(receivedMessage, categoryId);
		});
}

function createChannel1(receivedMessage, categoryId) {
	for (let i = 0; i <= meme.length; i++) {
		receivedMessage.guild.channels
			.create(meme[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.then((channel) => {
				if (i == 2) {
					channel.edit({ nsfw: !channel.nsfw });
				}
			})
			.catch(() => {
				console.error;
			});
	}
}

function category2(receivedMessage) {
	receivedMessage.guild.channels
		.create(' 🖌️ Share You Work', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			// //

			createChannel2(receivedMessage, categoryId);
		});
}

function createChannel2(receivedMessage, categoryId) {
	for (let i = 0; i <= sharework.length; i++) {
		receivedMessage.guild.channels
			.create(sharework[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.catch(() => {
				console.error;
			});
	}
}

//  SERVER Improvement Category

function category3(receivedMessage) {
	receivedMessage.guild.channels
		.create('📈 Server Improvement', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel3(receivedMessage, categoryId);
		});
}

function createChannel3(receivedMessage, categoryId) {
	for (let i = 0; i <= serverImprovement.length; i++) {
		receivedMessage.guild.channels
			.create(serverImprovement[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.catch(() => {
				console.error;
			});
	}
}

// GAMING TEXT category

function category4(receivedMessage) {
	receivedMessage.guild.channels
		.create('🖱️💬 Gaming Chat', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel4(receivedMessage, categoryId);
		});
}

function createChannel4(receivedMessage, categoryId) {
	for (let i = 0; i <= gamingTextChannel.length; i++) {
		receivedMessage.guild.channels
			.create(gamingTextChannel[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.catch(() => {
				console.error;
			});
	}
}

//  Gaming Voice Category

function category5(receivedMessage) {
	receivedMessage.guild.channels
		.create('🎧🎤Gaming', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel5(receivedMessage, categoryId);
		});
}

function createChannel5(receivedMessage, categoryId) {
	for (let i = 0; i <= gamingChannles.length; i++) {
		receivedMessage.guild.channels
			.create(gamingChannles[i], {
				parent               : `${categoryId}`,
				type                 : 'Voice',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				],
				userLimit            : gamingChannlesUserLimit[i]
			})
			.catch(() => {
				console.error;
			});
	}
}

// Streaming Category

function category6(receivedMessage) {
	receivedMessage.guild.channels
		.create('📺 Streaming', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel6(receivedMessage, categoryId);
		});
}

function createChannel6(receivedMessage, categoryId) {
	for (let i = 0; i <= 0; i++) {
		receivedMessage.guild.channels
			.create(stream[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.then(() => {
				for (let i = 1; i <= stream.length; i++) {
					receivedMessage.guild.channels.create(stream[i], {
						parent               : `${categoryId}`,
						type                 : 'Voice',
						permissionOverwrites : [
							{
								id    : receivedMessage.author.id,
								deny  : [ 'VIEW_CHANNEL' ],
								allow : [ 'SEND_MESSAGES' ]
							}
						],
						userLimit            : streamUserLimit[i]
					});
				}
			});
	}
}

// CHILL ZONE Category

function category7(receivedMessage) {
	receivedMessage.guild.channels
		.create('☕ Chill Zone', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel7(receivedMessage, categoryId);
		});
}

function createChannel7(receivedMessage, categoryId) {
	for (let i = 0; i <= chill.length; i++) {
		receivedMessage.guild.channels.create(chill[i], {
			parent               : `${categoryId}`,
			type                 : 'Voice',
			permissionOverwrites : [
				{
					id    : receivedMessage.author.id,
					deny  : [ 'VIEW_CHANNEL' ],
					allow : [ 'SEND_MESSAGES' ]
				}
			],
			userLimit            : chillUserLimit[i]
		});
	}
}

// DATING Show Category

function category8(receivedMessage) {
	receivedMessage.guild.channels
		.create('💑 Dating Show', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel8(receivedMessage, categoryId);
		});
}

function createChannel8(receivedMessage, categoryId) {
	for (let i = 0; i <= Datingshow.length; i++) {
		receivedMessage.guild.channels.create(Datingshow[i], {
			parent               : `${categoryId}`,
			type                 : 'Voice',
			permissionOverwrites : [
				{
					id    : receivedMessage.author.id,
					deny  : [ 'VIEW_CHANNEL' ],
					allow : [ 'SEND_MESSAGES' ]
				}
			],
			userLimit            : DatingshowUserLimit[i]
		});
	}
}

function category9(receivedMessage) {
	receivedMessage.guild.channels
		.create('🎶 Music Zone', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel9(receivedMessage, categoryId);
		});
}

function createChannel9(receivedMessage, categoryId) {
	for (let i = 0; i <= 0; i++) {
		receivedMessage.guild.channels
			.create(music[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.then(() => {
				for (let i = 1; i <= music.length; i++) {
					receivedMessage.guild.channels.create(music[i], {
						parent               : `${categoryId}`,
						type                 : 'Voice',
						permissionOverwrites : [
							{
								id    : receivedMessage.author.id,
								deny  : [ 'VIEW_CHANNEL' ],
								allow : [ 'SEND_MESSAGES' ]
							}
						],
						userLimit            : MusicUserLimit[i]
					});
				}
			});
	}
}

function category10(receivedMessage) {
	receivedMessage.guild.channels
		.create('🚫 Staff Only', {
			type : 'category'
		})
		.then((category) => {
			const categoryId = category.id;

			//

			createChannel10(receivedMessage, categoryId);
		})
		.catch(console.error);
}

function createChannel10(receivedMessage, categoryId) {
	for (let i = 0; i <= 0; i++) {
		receivedMessage.guild.channels
			.create(staffChannel[i], {
				parent               : `${categoryId}`,
				type                 : 'text',
				permissionOverwrites : [
					{
						id    : receivedMessage.author.id,
						deny  : [ 'VIEW_CHANNEL' ],
						allow : [ 'SEND_MESSAGES' ]
					}
				]
			})
			.then((channel) => {
				for (let i = 1; i <= staffChannel.length; i++) {
					receivedMessage.guild.channels.create(staffChannel[i], {
						parent               : `${categoryId}`,
						type                 : 'Voice',
						permissionOverwrites : [
							{
								id    : receivedMessage.author.id,
								allow : [ 'SEND_MESSAGES', 'VIEW_CHANNEL' ]
							}
						],
						userLimit            : staffChannelUserLimit[i]
					});
				}
			})
			.catch(console.error);
	}
}

function roles(receivedMessage) {
	for (let i = roleList.length - 1; i >= 0; i--) {
		if (roleList[i] == 'Youtubers') {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [
						'ADD_REACTIONS',
						'STREAM',
						'VIEW_CHANNEL',
						'SEND_MESSAGES',
						'EMBED_LINKS',
						'ATTACH_FILES',
						'READ_MESSAGE_HISTORY',
						'MENTION_EVERYONE',
						'CONNECT',
						'SPEAK'
					]
				},
				reason : 'we needed a role for Streamers'
			});
		} else if (roleList[i] == 'Twitch Streamer') {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [
						'ADD_REACTIONS',
						'STREAM',
						'VIEW_CHANNEL',
						'SEND_MESSAGES',
						'EMBED_LINKS',
						'ATTACH_FILES',
						'READ_MESSAGE_HISTORY',
						'MENTION_EVERYONE',
						'CONNECT',
						'SPEAK'
					]
				},
				reason : 'we needed a role for Streamers'
			});
		} else if (roleList[i] == 'Moderator') {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [
						'ADD_REACTIONS',
						'STREAM',
						'VIEW_CHANNEL',
						'SEND_MESSAGES',
						'EMBED_LINKS',
						'ATTACH_FILES',
						'READ_MESSAGE_HISTORY',
						'MENTION_EVERYONE',
						'CONNECT',
						'SPEAK',
						'CREATE_INSTANT_INVITE',
						'KICK_MEMBERS',
						'BAN_MEMBERS',
						'MANAGE_CHANNELS',
						'ADD_REACTIONS',
						'PRIORITY_SPEAKER',
						'SEND_TTS_MESSAGES',
						'MANAGE_MESSAGES',
						'USE_EXTERNAL_EMOJIS',
						'VIEW_GUILD_INSIGHTS',
						'MUTE_MEMBERS',
						'DEAFEN_MEMBERS',
						'MOVE_MEMBERS',
						'CHANGE_NICKNAME',
						'MANAGE_NICKNAMES',
						'MANAGE_EMOJIS'
					]
				},
				reason : 'we needed a role for Moderators'
			});
		} else if (roleList[i] == 'Sr. Moderator') {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [ 'ADMINISTRATOR' ]
				},
				reason : 'we needed a role for Owner'
			});
		} else if (roleList[i] == 'Admin') {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [ 'ADMINISTRATOR' ]
				},
				reason : 'we needed a role for Owner'
			});
		} else if (roleList[i] == 'Owner') {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [ 'ADMINISTRATOR' ]
				},
				reason : 'we needed a role for Owner'
			});
		} else if (roleList[i] == 'Boosters') {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [
						'ADD_REACTIONS',
						'STREAM',
						'VIEW_CHANNEL',
						'SEND_MESSAGES',
						'EMBED_LINKS',
						'ATTACH_FILES',
						'READ_MESSAGE_HISTORY',
						'MENTION_EVERYONE',
						'CONNECT',
						'SPEAK',
						'USE_EXTERNAL_EMOJIS',
						'CHANGE_NICKNAME'
					]
				},
				reason : 'we needed a role for Boosters of server'
			});
		} else {
			receivedMessage.guild.roles.create({
				data   : {
					name        : roleList[i],
					color       : roleColors[i],
					permissions : [
						'ADD_REACTIONS',
						'VIEW_CHANNEL',
						'SEND_MESSAGES',
						'EMBED_LINKS',
						'ATTACH_FILES',
						'READ_MESSAGE_HISTORY',
						'MENTION_EVERYONE',
						'CONNECT',
						'SPEAK'
					]
				},
				reason : 'we needed a role for Super Cool People'
			});
		}
	}
}

client.login(token);
