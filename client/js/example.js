let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        console.log("example state has been activated");
        let boxSettings = config.default.dialogue.settings;

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
            "This is the Phaser Dialogue Box basic tutorial!",
            "Personally, I love Phaser! This is partly why I started an open source gamedev group and began work on this tool!",
            "If you want to see how this was created, visit this branch on github...:",
            "Best of luck to you!"
        ]

        let messageData = {
            message: messages.shift(),
            imageData: diaImageData
        }

        let dia = PhaserDialogue();
        dia.init(game, boxSettings);
        dia.displayMessage(messageData, () => {
            dia.typewrite = true;
            messages.forEach((messageText) => {
                dia.queMessage({message: messageText})
            });
        });
        
           


    }
};