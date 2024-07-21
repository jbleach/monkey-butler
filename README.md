<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

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
-   `commands/faq/leapmedals.js`: Requires integer parameter for current talent points and returns the medals required to complete a legendary fighter leap.
-   `commands/faq/epicleap.js`: Returns the information reqarding leap requirements for epic fighters.
-   `commands/faq/epicleapmedals.js`: Requires integer parameter for current talent points and returns the medals required to complete an epic fighter leap.

-   `commands/points/interstellarspeedpoints.js`: Requires integer parameter for desired points and returns number of speeds needed to earn them.

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jbleach/signup.svg?style=for-the-badge
[contributors-url]: https://github.com/jbleach/signup/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jbleach/signup.svg?style=for-the-badge
[forks-url]: https://github.com/jbleach/signup/network/members
[stars-shield]: https://img.shields.io/github/stars/jbleach/signup.svg?style=for-the-badge
[stars-url]: https://github.com/jbleach/signup/stargazers
[issues-shield]: https://img.shields.io/github/issues/jbleach/signup.svg?style=for-the-badge
[issues-url]: https://github.com/jbleach/signup/issues
[license-shield]: https://img.shields.io/github/license/jbleach/signup.svg?style=for-the-badge
[license-url]: https://github.com/jbleach/signup/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/james-leach-4ab085280/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 