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
            sprite: [275, 0, config.exampleState.john.spriteKey],
            width: 100,
            height: 100,
            caption: "John"
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
            message: "I'm Ean!",
            imageData: diaImageDataTop
        }

        let messageDataBottom = {
            message: "I'm John!",
            imageData: diaImageDataBottom
        }

        let eanDialogue = PhaserDialogue();
        eanDialogue.init(game, boxSettingsTop);
        eanDialogue.displayMessage(messageDataTop);
        eanDialogue.displayMessage({message: "???"},() => {
            eanDialogue.typewrite = true;
            eanDialogue.clearQue();
            eanDialogue.displayMessage({message: "Whats up! My name is Ean!!"});
            eanDialogue.queMessage({message: "I love to program!"});
            eanDialogue.queMessage({message: "...and I also love Thai Food!!!"}, () => {
                johnDialogue.displayMessage({message: "Nice man! I love Thai Food too!!!"});
            });
            eanDialogue.queMessage({message: "I'm about to go get down with this game jam, wanna roll?"}, () => {
                johnDialogue.displayMessage({message: "Yah let's do it!"}, () => {
                    eanDialogue.displayMessage({message: "Let's go!"});
                });
            });
        });


        let johnDialogue = PhaserDialogue();
        johnDialogue.init(game, boxSettingsBottom)
        johnDialogue.displayMessage(messageDataBottom);
        johnDialogue.typewrite = true;
        
        

        // boxSettings.typeDelay = 0.2
        // let d2 = PhaserDialogue();
        // d2.init(game, boxSettings);
        // d2.container.y = 0;
        // d2.displayMessage("This should be from a bit higher", null, true);

    }
};