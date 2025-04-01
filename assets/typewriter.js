const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('Привіт, моя Аделіно 💖💖')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Натисни кнопочку, і я напишу, як сильно кохаю тебе🌸')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Навіть коли ти далеко — я з тобою 💫🌷')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Ти найкраще, що зі мною сталося 💞')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Просто натисни кнопку — і я поруч ❤️')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Люблю тебе, моя дівчинко 🥺✨')
    .pauseFor(3000)
    .start();