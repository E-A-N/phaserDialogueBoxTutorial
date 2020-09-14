let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        console.log("example state has been activated");
        let boxSettings = config.default.dialogue.settings;
        let typeSound = game.add.audio(config.default.audio.ui.keystroke1.key);
        let backgroundMusic = game.add.audio(config.default.audio.ui.backgroundMusic1.key);
        let eanImage =  {
            sprite: [0, 0, config.exampleState.ean.spriteKey],
            width: 100,
            height: 100,
            caption: "Ean"
        }

        let diaImageData = {
            images: [eanImage],
            hasNewImages: true,
            clearCurrentImages: false
        } 

        let messages = [
            "Hi!",
            "My name is Cyborg Ean!!",
            "This is the Phaser Dialogue Box JavaSCript example!!",
            "Personally, I love Phaser! This is partly why I started an open source gamedev group and began work on this awesome tool!",
            "It is my understanding that you wish to learn the ways of javascript and phaser too perhaps?",
            "Either way, follow me, and I will show the way!!",
            "So...",
            "Who am I?",
            "A little about me...",
            "I love thai food...",
            "I love fitness...",
            "I love community service...", 
            "I love teaching computer science to children...",
            "and I really LOVE thai food!! :)",
            "This is just an example dialogue box but soon it will be ready for things like simplifying JRPGs in pure javascript...:",
            "...Or even a Pokemon game engine!",
            "These things will be happening in the near future!!",
            "Much love to you...",
            "Please be careful in this pandemic!"
        ];

        let messageData = {
            message: messages.shift(),
            imageData: diaImageData
        }

        backgroundMusic.play();
        let dia = PhaserDialogue();
        dia.init(game, boxSettings);
        dia.onClose = () => {
            backgroundMusic.stop();
        }
        dia.setOnTypeCallback(dia, (msg, chr) => {
            typeSound.play();
        });
        dia.displayMessage(messageData, () => {
            dia.typewrite = true;
            messages.forEach((messageText) => {
                dia.queMessage({message: messageText})
            });
        });
    }
};