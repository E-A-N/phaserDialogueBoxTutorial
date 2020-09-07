let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        console.log("example state has been activated");
        let boxSettings = config.default.dialogue.settings;


        //let antData =  [config.menuState.logo.x, config.menuState.logo.y, config.menuState.logo.spriteKey];

        let antData =  [0, 0, config.menuState.logo.spriteKey];
        let diaImageData = {
            images: [antData],
            hasNewImages: true,
            clearCurrentImages: false
        } 


        let dia = PhaserDialogue();
        dia.init(game, boxSettings);
        dia.displayMessage("Hello World!", diaImageData, true)
           .displayMessage("This is the next one bb!", {clearCurrentImages: true})
           .displayMessage("Type writing the next message just to make sure!", null, true)

        // boxSettings.typeDelay = 0.2
        // let d2 = PhaserDialogue();
        // d2.init(game, boxSettings);
        // d2.container.y = 0;
        // d2.displayMessage("This should be from a bit higher", null, true);

    }
};