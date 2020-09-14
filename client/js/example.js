let exampleState = {

    create: () => {
        game.stage.setBackgroundColor('#777777');
        game.physics.startSystem(Phaser.Physics.ARCADE);

        exampleState.initParticleSystem();
        exampleState.initDialogueSystem();
        exampleState.controls = game.input.keyboard.createCursorKeys();
        exampleState.action = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        exampleState.ant = game.add.image(0, 0, config.menuState.logo.spriteKey)
    }
};



exampleState.particleBurst = (pointer) => {
    exampleState.emitter.x = pointer.x;
    exampleState.emitter.y = pointer.y;
    exampleState.emitter.start(true, 1500, null, 2);

}

exampleState.initParticleSystem = () => {
    let emitter = game.add.emitter(0 ,0, 100);
    emitter.makeParticles(config.menuState.logo.spriteKey);
    emitter.gravity = 300;
    exampleState.emitter = emitter;
    //game.input.onDown.add(exampleState.particleBurst, exampleState);

    return emitter;
}

exampleState.initDialogueSystem = () => {
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

exampleState.update = () => {
    let cursors = exampleState.controls;
    if (cursors.left.isDown){
        exampleState.emitter.x -=1
    }
    else if (cursors.up.isDown) {
        exampleState.emitter.y -=1
    }
    else if (cursors.right.isDown) {
        exampleState.emitter.x +=1
    }
    else if (cursors.down.isDown) {
        exampleState.emitter.y +=1
    }

    if (exampleState.action.isDown){
        exampleState.emitter.start(true, 1500, null, 2);
    }
    exampleState.ant.x = exampleState.emitter.x;
    exampleState.ant.y = exampleState.emitter.y;
}
