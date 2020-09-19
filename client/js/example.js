let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        console.log("example state has been activated");
        let boxSettingsTop = config.default.dialogue.topBoxSettings;
        let boxSettingsBottom = config.default.dialogue.bottomBoxSettings;


        let antDataTop =  {
            sprite: [0, 0, config.exampleState.ean.spriteKey],
            width: 100,
            height: 100,
            caption: "Ean"
        }

        let antDataBottom =  {
            sprite: [275, 0, config.exampleState.bruce.spriteKey],
            width: 100,
            height: 100,
            caption: "Bruce"
        }

        let diaImageDataTop = {
            images: [antDataTop],
            hasNewImages: true,
            clearCurrentImages: false
        }

        let diaImageDataBottom = {
            images: [antDataBottom],
            hasNewImages: true,
            clearCurrentImages: false
        } 

        let messageDataTop = {
            message: "This is new message data!",
            imageData: diaImageDataTop
        }

        let messageDataBottom = {
            message: "Testing if this works!",
            imageData: diaImageDataBottom
        }

        let dia = PhaserDialogue();
        dia.init(game, boxSettingsTop);
        dia.displayMessage(messageDataTop, () => {
            dia.typewrite = true;
        })
        dia.queMessage({
            message: "we must continue this fight!"
        })
        dia.queMessage({message: "honestly, thank you for playing!"})



        let dia2 = PhaserDialogue();
        dia2.init(game, boxSettingsBottom)
        dia2.typewrite = true;
        dia2.displayMessage(messageDataBottom);

        
        

        // boxSettings.typeDelay = 0.2
        // let d2 = PhaserDialogue();
        // d2.init(game, boxSettings);
        // d2.container.y = 0;
        // d2.displayMessage("This should be from a bit higher", null, true);

    }
};