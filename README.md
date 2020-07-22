<div align="center"><img src="https://e-a-n.github.io/antPixelGraphics/images/fullLogo497X392.png"></div>

## How to download and install the example
- Install git
    - Here's an installion guide for [git](https://www.atlassian.com/git/tutorials/install-git)
- Install github (optional)
    - Here's a link to installing  the desktop version of [github](https://desktop.github.com/)
- Install nodeJs
    - This will automatically install npm which is used to run the game
    - Linux/Ubuntu/Debian command to install nodeJs is `sudo apt-get install nodejs npm`
    - Here's a guide for the [Windows Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-windows)
    - Here's a guide for the [Mac Installation of NodeJs](http://blog.teamtreehouse.com/install-node-js-npm-mac)
- Inside commandline navigate to "eansPhaserBoilerPlate" folder
    - This should be achieved by entering `cd apGameJamTemplate`
- In command line run `npm install`
    - Our backend uses nodejs so this will install the resources our projects needs to run independently

## How to run the game
- On the command line navigate to "apGameJamTemplate" folder (if you're not already there)
    - This should be achieved by entering `cd apGameJamTemplate`
- On command line run `npm start`
    - This script actually starts up our server (which means our game is running)
- Open up a web browser and go to this address `http://localhost:7777`
    - `http://127.0.0.1:7777` also works because these are representations of the "home" address
- From here you'll be able to play the game!

## Link to lastest stable build of game goes here:
`https://gameName.io`

# Phaser 2 Dialogue Box

### How to use

***Initalize the variable that will contain the dialogue and make sure a bitmap Font is loaded! This tool only supports bitmap fonts!***
```javascript
let dialogueBox;
let preload = () => {
    game.load.bitmapFont("carrierCommand", "assets/font/carrierCommand.png", "assets/font/carrierCommand.xml");
};
```
<br>

***Create a config and  call the Dialogue.init method inside `create` passing in the game and config variables***
```javascript
let create = () => {
    let config = {
        spriteKey: "atlasKey",
        background: "backgroundSpriteKey",
        closeButton: "closeButtonSpriteKey",
        fontFamily: "carrierCommand",
        fontSize: 12,
        typeDelay: .03,
        width: 500,
        height: 200,
        wordWrap: true
    }
    let dialogueBox = Dialogue.init(game, config);    
}
```
<br><br>
***Here's how to display single messages***
```javascript
//set the second parameter to true if you want the message to be type written!
dialogueBox.displayMessage("You have started a new game!", true); //true is default value

//display the entire message instantly
dialogueBox.displayMessage("Welcome, new player!", false);
```
<br><br>

***To display a chain of messages just method chain the `displayMessages` function in subsequent fashion***
```javascript
dialogueBox
    .displayMessage("Welcome, the world of Dialogue!", true)
    .displayMessage("You are about embark on a new Adventure!", true)
    .displayMessage("This is a place where dreams come true!", true);
```
<br><br>

***The `displayMessage` method also takes in a callback***
```javascript
dialogueBox
    .displayMessage("Welcome, the world of Dialogue!", true, (dialogueSprite, messageText) => {
        console.log("You can refer to the dialogue box and text for effects on the go!", dialgueSprite, messageText);
    })
    .displayMessage("You are about embark on a new Adventure!", true, () => {
        inspiringAudio.play();
    })
    .displayMessage("This is a place where dreams come true!", true);
```
<br><br>

***The Dialogue interface has callbacks that function as pseudo events***
```javascript
dialogueBox
    .setOnTypeCallBack((dialogueSprite, char) => {
        //This function will occur for each letter in the current message
        robotVoice.play();
    })
    .setOnCloseCallBack(() => {
        //Once all of the message are displayed, go to next the next level!
        game.state.start("nextStage");
    })
    .displayMessage("Did it not occur to you, that I am a robot?", true, () => {
        shockingMusic.play();
    })
    .setOnTypeCallBack((dialogueSprite, char) => {
        humanVoice.play();
    })
    .displayMessage("This...This is impossible!!", true)
    .setOnTypeCallBack((dialogueSprite, char) => {
        robotVoice.play();
    })
    .displayMessage("Anything is possible, human.", true);
```
