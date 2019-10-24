const presets = require("./presets");
const settings = require("./settings");

module.exports = {
    title: 'Tail my box',
    description: `Design straight dovetailed boxes`,
    keyWords: ['gatsbyjs', 'react', 'design'],
    authorName: 'Cédric COULIOU',
    author: `@sinsedrix`,
    siteUrl: 'https://design.tool2team.org/tail-my-box',
    pathPrefix: 'tail-my-box',
    rootUrl: 'https://tool2team.org/',
    siteCover: './images/cover.jpeg',
    googleAnalyticsId: 'UA-000000000-1',
    background_color: '#eeffff',
    theme_color: '#25303B',
    display: 'minimal-ui',
    icon: 'src/assets/logo-w.png',
    presets: presets,
    settings: settings,
}