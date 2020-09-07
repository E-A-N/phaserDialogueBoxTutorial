let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        console.log("example state has been activated");
        let boxSettings = config.default.dialogue.settings;

        let antData =  {
            sprite: [0, 0, config.exampleState.ean.spriteKey],
            width: 100,
            height: 100,
            caption: "Ean"
        }

        let diaImageData = {
            images: [antData],
            hasNewImages: true,
            clearCurrentImages: false
        } 

        let messageData = {
            message: "This is new message data!",
            imageData: diaImageData
        }

        let dia = PhaserDialogue();
        dia.init(game, boxSettings);
        dia.displayMessage(messageData, () => {
            dia.typewrite = true;
        })
        dia.queMessage({
            message: "we must continue this fight!"
        })
        dia.queMessage({message: "honestly, thank you for playing!"})
           
        // boxSettings.typeDelay = 0.2
        // let d2 = PhaserDialogue();
        // d2.init(game, boxSettings);
        // d2.container.y = 0;
        // d2.displayMessage("This should be from a bit higher", null, true);

    }
};