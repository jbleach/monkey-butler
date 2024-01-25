
# Monkey Butler

A Discord bot designed to respond to slash commands built on the [discord.js](https://github.com/discordjs/discord.js) library. The included commands are made specifically for servers of the Age of Apes game community.


## Requirements
To use this project, you will need:
- [Node.js](https://nodejs.org/)

Node installation will include [NPM](https://npmjs.com/) to handle all dependencies.
## Setup

### Discord Prerequisites
Please refer to the [discord.js documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html) for detailed instructions covering setup of your bot application via Discord's web portal. In short:
- create a Discord application
- create and configure your bot
- add your bot to your server
- enable Developer Mode in Discord

### Project Configuration
After completing the steps above create a `.env` file in your project root and add your client ID, server ID, and bot token:

```plaintext
CLIENTID=1234
SERVERID=1234
TOKEN=1234
```

These environment variables are used to keep sensitive data, like your bot token, out of your code. This is especially important if you're sharing your code with others or storing your code publicly on GitHub. (note `.env` is included in `.gitignore`.)
## Deployment

Before you run the bot on your discord server you need to deploy the slash commands to the server. To deploy your commands run the following:

```
  node .\deploy-commands.js
```

You only have to deploy your slash commands once. If the commands are changed (altering descriptions, modifying options, adding new commands), then run `deploy-commands.js` again.

Once your commands have been deployed, then you can run your bot!
```
  node .\bot.js
```
## Features
### Main Elements
-   `bot.js`: Handles interactions with Discord and executes commands.
-   `deploy-commands.js`: Registers slash commands with the Discord API.
-   `commands/`: Contains the slash command scripts.

### Slash Commands
-   `commands/hello.js`: A simple command used to test communication with the bot.
-   `commands/serverinfo.js`: Returns the server name and the number of members. (can be modified to add additional information about the discord server)
-   `commands/utc.js`: Returns the current time in UTC.
-   `commands/life.js`: Answers the ultimate question of life, the universe, and everything.
-   `commands/time/day2mins.js`: Requires an integer parameter for number days and returns days converted into minutes.
-   `commands/time/min2days.js`: Requires an integer parameter for number of minutes and returns minutes converted into days.
-   `commands/faq/leap.js`: Returns the information reqarding leap requirements for legendary fighters.
-   `commands/faq/leapmedals.js`: Requires integer parameter for current talent points and returns the medals required to complete a fighter leap.

## Documentation

- [discord.js Guide](https://discordjs.guide/)
- [discord.js Documenation](https://discord.js.org/docs/packages/discord.js/main)
- [Discord Developer Portal](https://discord.com/developers/applications/)
## Authors

- [@jbleach](https://www.github.com/jbleach)


## Acknowledgements

 - [Discord](https://discord.com)
 - [discord.js](https://github.com/discordjs)
 - [Age of Apes - tap4fun](https://www.tap4fun.com/game/en)
 - [Coding Train](https://github.com/CodingTrain)
 - [Readme.so](https://readme.so/)