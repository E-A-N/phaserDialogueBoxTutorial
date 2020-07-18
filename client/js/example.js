let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        console.log("example state has been activated");

        let dia = PhaserDialogue();
        dia.init(game, config.default.dialogue.settings);
        dia.displayMessage("Hello World!", null, true);
    },

};
