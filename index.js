#!/usr/bin/env node

const gradient = require('gradient-string');
const chalk = require('chalk');

const xmasTree = `
$$\      $$\
$$$\    $$$ |
$$$$\  $$$$ | $$$$$$\   $$$$$$\   $$$$$$\  $$\   $$\
$$\$$\$$ $$ |$$  __$$\ $$  __$$\ $$  __$$\ $$ |  $$ |
$$ \$$$  $$ |$$$$$$$$ |$$ |  \__|$$ |  \__|$$ |  $$ |
$$ |\$  /$$ |$$   ____|$$ |      $$ |      $$ |  $$ |
$$ | \_/ $$ |\$$$$$$$\ $$ |      $$ |      \$$$$$$$ |
\__|     \__| \_______|\__|      \__|       \____$$ |
                                           $$\   $$ |
                                           \$$$$$$  |
                                            \______/
$$\   $$\ $$\      $$\  $$$$$$\   $$$$$$\
$$ |  $$ |$$$\    $$$ |$$  __$$\ $$  __$$\
\$$\ $$  |$$$$\  $$$$ |$$ /  $$ |$$ /  \__|
 \$$$$  / $$\$$\$$ $$ |$$$$$$$$ |\$$$$$$\
 $$  $$<  $$ \$$$  $$ |$$  __$$ | \____$$\
$$  /\$$\ $$ |\$  /$$ |$$ |  $$ |$$\   $$ |
$$ /  $$ |$$ | \_/ $$ |$$ |  $$ |\$$$$$$  |
\__|  \__|\__|     \__|\__|  \__| \______/


                                        ★
        ★                              /|\\
       /|\\                           /_|_\\
      /_|_\\              ★          /\\o/o\\
      /\\o/\\            /|\\        /o\\.o/\\o\\
     /o\\./\\          /_|_\\      /\\.o\\o/o\\.\\
    /\\.o\\o/\\        /\\o/\\     /o\\o/\\.\\o/o\\
   /___||___\\      /o\\./o\\   /\\./o\\o/o\\.\\o\\
       ||         /\\.o\\o/\\  /o\\.\\o/o\\.\\o/o\\
       ||        /o\\./\\o/\\ /\\o/o\\.\\o/o\\.\\o\\
                /__/___\\__\\/__/___________\\__\\
                       |||           |||
                       |||           |||
`;

const snowflakes = '❄ ❅ ❆ ❄ ❅ ❆ ❄ ❅ ❆ ❄ ❅ ❆';

const xmasGradient = gradient(['#ff0000', '#00ff00', '#ff0000']);
const goldGradient = gradient(['#ffd700', '#ffec8b', '#ffd700']);

const message = `
${chalk.cyan(snowflakes)}

${xmasGradient(xmasTree)}
${goldGradient('✨ MERRY CHRISTMAS & HAPPY NEW YEAR! ✨')}

${chalk.green('May your holidays be filled with joy, love, and lots of code! 🎁')}

${chalk.cyan(snowflakes)}
`;

console.log(message);
