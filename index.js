#!/usr/bin/env node

const gradient = require('gradient-string');
const chalk = require('chalk');

const xmasTree = `
░  ░░░░  ░░        ░░       ░░░       ░░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒
▓        ▓▓      ▓▓▓▓       ▓▓▓       ▓▓▓▓▓    ▓▓▓
█  █  █  ██  ████████  ███  ███  ███  ██████  ████
█  ████  ██        ██  ████  ██  ████  █████  ████

░  ░░░░  ░░  ░░░░  ░░░      ░░░░      ░░
▒▒  ▒▒  ▒▒▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒
▓▓▓    ▓▓▓▓        ▓▓  ▓▓▓▓  ▓▓▓      ▓▓
██  ██  ███  █  █  ██        ████████  █
█  ████  ██  ████  ██  ████  ███      ██


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

const cheerfulSentences = [
  "You're more amazing than a perfectly debugged codebase! 🐛✨",
  "Santa checked his list twice, and you're on the NICE side of production! 🎅",
  "May your bugs be few and your coffee be strong! ☕",
  "You deserve more presents than there are npm packages! 📦",
  "Your smile could light up a Christmas tree AND a server room! 💡",
  "Wishing you zero merge conflicts in the new year! 🔀",
  "You're the star on top of everyone's tree! ⭐",
  "May your code compile on the first try, just like grandma's cookies! 🍪",
  "You're so bright, even Rudolph is jealous! 🦌",
  "Here's to a year of 200 OK responses! 🎉",
  "You're more reliable than localhost! 🏠",
  "May your holidays be as sweet as syntactic sugar! 🍬",
  "You're the gift that keeps on giving, like a well-maintained open source project! 🎁",
  "Jingle all the way to a successful deployment! 🔔",
  "You light up the room like RGB keyboard backlighting! 🌈",
  "May your stack traces always lead to quick fixes! 📚",
  "You're cooler than the other side of the server pillow! ❄️",
  "Wishing you logs full of success messages! 📝",
  "You're the reason the nice list exists! 📋",
  "May your holiday queries return all the joy! 🎊",
  "You've got more charm than a fully-typed TypeScript project! 💎",
  "Here's to async/awaiting all your dreams to come true! 💫",
  "You're more precious than a working production environment on a Friday! 🏆",
  "May your New Year be as optimized as your algorithms! ⚡",
  "You're like hot cocoa for the soul! ☕🤎",
  "Wishing you branches full of gifts, not merge conflicts! 🌿",
  "You could make even a 500 error look festive! 🎄",
  "May your holiday cache be full of warm memories! 💾",
  "You're the commit message everyone loves to read! 💝",
  "Here's to a year of shipping features, not bugs! 🚀",
  "You're more uplifting than a successful npm install! 📈",
  "May your fireplace be warm and your servers be cool! 🔥❄️",
  "You're the semicolon that makes everything work! ;",
  "Wishing you a life with no null pointer exceptions! 🎯",
  "You spread joy faster than a recursive function! 🔄",
  "May your holidays have zero loading spinners! ⏳",
  "You're more valuable than a working CI/CD pipeline! 🔧",
  "Here's to catching feelings, not exceptions! 💕",
  "You're the documentation everyone wishes they had! 📖",
  "May your eggnog be strong and your passwords stronger! 🥛🔐",
  "You make every day feel like a successful demo! 🎬",
  "Wishing you containers full of holiday cheer! 🐳",
  "You're the pull request that gets approved immediately! ✅",
  "May your terminal always show green checkmarks! ✓",
  "Here's to deploying happiness everywhere you go! 🌍",
  "You're more essential than version control! 🗂️",
  "May your holidays scale infinitely! 📊",
  "You're the feature everyone's been waiting for! 🌟",
  "Wishing you a year of clean code and cleaner conscience! 🧹💚",
  "You and your AI pair programmer make the ultimate duo! 🤖💜",
  "May your prompts be clear and your completions be perfect! ✨🤖",
  "You're vibing so hard, even Claude is impressed! 🎧💻",
  "Wishing you AI-assisted code that actually works on the first try! 🪄",
  "You're the human in the loop that makes AI shine! 🌟🤝",
  "May your context window always fit your entire codebase! 📚🤖",
  "You're giving main character energy in your AI prompts! 🎬✨",
  "Here's to vibe coding your way to production! 🎶🚀",
  "Your natural language is basically a programming language now! 🗣️💻",
  "May your AI never hallucinate your dependencies! 🦄📦",
  "You're so good at prompting, you could teach a masterclass! 🎓🤖",
  "Wishing you tab-completions that read your mind! ⌨️🧠",
  "You + AI = unstoppable shipping machine! 🚂💨",
  "May your copilot always suggest the right code! ✈️👨‍✈️",
  "You're fluent in both Python AND talking to robots! 🐍🤖",
  "Here's to building apps by just describing them! 🏗️✨",
  "Your vibe is immaculate and so is your generated code! 💅💻",
  "May your AI assistant always understand the assignment! 📝🤖",
  "You're proof that the future of coding is conversational! 💬🚀",
  "Wishing you endless inspiration and infinite tokens! 🎨♾️",
];

const randomCheer = cheerfulSentences[Math.floor(Math.random() * cheerfulSentences.length)];

const xmasGradient = gradient(['#ff0000', '#00ff00', '#ff0000']);
const goldGradient = gradient(['#ffd700', '#ffec8b', '#ffd700']);
const pinkGradient = gradient(['#ff69b4', '#ff1493', '#ff69b4']);

const message = `
${chalk.cyan(snowflakes)}

${xmasGradient(xmasTree)}
${goldGradient('✨ MERRY CHRISTMAS & HAPPY NEW YEAR! ✨')}

${chalk.green('May your holidays be filled with joy, love, and lots of code! 🎁')}

${pinkGradient(randomCheer)}

${chalk.cyan(snowflakes)}
`;

console.log(message);
