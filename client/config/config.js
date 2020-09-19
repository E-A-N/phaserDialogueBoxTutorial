const config = {};
config.default = {};
config.default.gameSpecs = {
    width: 375,
    height: 812,
    renderType: Phaser.AUTO,
    parentID : "gameContainer"
};

config.default.graphics = {
    font: {
        key: "carrierCommand",
        image: "assets/font/carrierCommand.png",
        map: "assets/font/carrierCommand.xml"
    } 
}

config.default.audio = {
    root: "assets/audio/",
    settings: {
        volume: 0.5
    },
};

config.default.audio.ui = {
    keystroke1 : {
        src: "assets/audio/softClack.mp3",
        key: "keystroke1"
    },
    keystroke2 : {
        src: "assets/audio/typeWriterKeyStroke.mp3",
        key: "keystroke2"
    },
    confirm1 : {
        src: "assets/audio/strangeConfirm.mp3",
        key: "confirm1"
    },
    confirm2 : {
        src: "assets/audio/teleport.mp3",
        key: "confirm2"
    },
    select1 : {
        src: "assets/audio/ting.mp3",
        key: "select1"
    },
    denied1 : {
        src: "assets/audio/denied.mp3",
        key: "denied1"
    }
};

config.default.dialogue = {
    messages :{
        test: "Hey! This is a test message! :D"
    }
};


config.loadState = {
    style: {
        font: "30px Courier",
        fill: "#fff"
    },
    label: {
        text : {
            x: 200,
            y: 150,
            print: "loading..."
        }
    }
};
config.bootState = {};
config.menuState = {
    logo : {
        x: 25,
        y: 50,
        spriteKey: "menuLogo",
        spriteSrc: "assets/img/antPixelLogo.png"
    }
};

config.exampleState = {
    guiBlock: {
        spriteKey: "guiBlock",
        spriteSrc: "assets/img/whiteGUI.png"
    },
    ean:{
        spriteKey: "eanPlusPlus",
        spriteSrc: "assets/img/eanPlusPlus.jpg"
    },
    bruce:{
        spriteKey: "bruce",
        spriteSrc: "assets/img/bruce.jpg"
    }
};


config.default.stateManager = {
    bootState: "boot",
    loadState: "load",
    menuState: "menu",
    exampleState: "example"
}

config.default.dialogue.topBoxSettings = {
    background: config.exampleState.guiBlock.spriteKey,
    fontFamily: config.default.graphics.font.key,
    fontSize: 10,
    fontColor: "777777",
    typeDelay: 0.03,
    width: config.default.gameSpecs.width,
    height: 200,
    wordWrap: true,
    messageYOffset: 20,
    messageXOffset: 30,
    messageWidthOffset: 95,
    y: 0
}

config.default.dialogue.bottomBoxSettings = {
    background: config.exampleState.guiBlock.spriteKey,
    fontFamily: config.default.graphics.font.key,
    fontSize: 10,
    fontColor: "777777",
    typeDelay: 0.03,
    width: config.default.gameSpecs.width,
    height: 200,
    wordWrap: true,
    messageYOffset: 20,
    messageXOffset: -95,
    messageWidthOffset: 95,
    y: 250
}

let isNodeJsCompatible = typeof module !== "undefined"
if (isNodeJsCompatible)  {
    module.exports = config;
}
