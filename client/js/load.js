const loadState = {};

loadState.loadAudio = () => {
    let sfxUI = Object.keys(config.default.audio.ui);

    sfxUI.forEach((sfx) => {
        let sound = config.default.audio.ui[sfx];
        game.load.audio(sound.key, sound.src);
    });
}

loadState.preload = () => {

    /*
    Load all game assets
    Place your load bar, some messages.
    In this case of loading, only text is placed...
    */

    let loadingLabel = game.add.text(
        config.loadState.label.x,
        config.loadState.label.y,
        config.loadState.label.print,
        config.loadState.style
    );

    //Load your images, spritesheets, bitmaps...
    game.load.image(config.menuState.logo.spriteKey, config.menuState.logo.spriteSrc);
    game.load.image(config.exampleState.guiBlock.spriteKey, config.exampleState.guiBlock.spriteSrc);
    game.load.image(config.exampleState.ean.spriteKey, config.exampleState.ean.spriteSrc);

    
    //Load your sounds, efx, music...
    //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');
    loadState.loadAudio();
    
    //Load your data, JSON, Querys...
    //Example: game.load.json('version', 'http://phaser.io/version.json');
    let mainFont = [
        config.default.graphics.font.key,
        config.default.graphics.font.image,
        config.default.graphics.font.map
    ];
    game.load.bitmapFont(...mainFont);
};

loadState.create = ()  => {

    game.stage.setBackgroundColor('#000');
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.state.start('menu');
};

