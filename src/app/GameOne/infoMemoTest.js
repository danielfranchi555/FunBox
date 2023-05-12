 const images = ['https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
     'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
     'https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor',
     'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor',
     'https://icongr.am/devicon/java-original.svg?size=128&color=currentColor',
     'https://icongr.am/devicon/typescript-original.svg?size=128&tolor=currentColor',
     'https://icongr.am/devicon/css3-original.svg?size=108&color=currentColor',
     'https://icongr.am/devicon/firefox-original.svg?size=108&color=currentColor',
     'https://icongr.am/devicon/git-original.svg?size=108&color=currentColor',
     "https://icongr.am/devicon/nodejs-original.svg?size=108&color=currentColor",
 ].flatMap(image => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5)


 export default {
     images
 }