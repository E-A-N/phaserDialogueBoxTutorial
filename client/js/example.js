let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        exampleState.initParticleSystem();
        exampleState.controls = game.input.keyboard.createCursorKeys();
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



exampleState.particleBurst = (pointer) => {
    exampleState.emitter.x = pointer.x;
    exampleState.emitter.y = pointer.y;
    exampleState.emitter.start(true, 1500, null, 5);

}

exampleState.initParticleSystem = () => {
    let emitter = game.add.emitter(0 ,0, 100);
    emitter.makeParticles(config.menuState.logo.spriteKey);
    emitter.gravity = 300;
    exampleState.emitter = emitter;
    game.input.onDown.add(exampleState.particleBurst, exampleState);

    return emitter;
}

exampleState.update = () => {
    let cursors = exampleState.controls;
    if (cursors.left.isDown){
        console.log("you\'re now pressing left!")
    }
    else if (cursors.up.isDown) {
        console.log("you\'re now pressing up!")
    }
    else if (cursors.right.isDown) {
        console.log("you\'re now pressing right!")
    }
    else if (cursors.down.isDown) {
        console.log("you\'re now pressing down!")
    }
}
