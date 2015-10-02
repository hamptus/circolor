// Global Variables

var NEWHIGHSCORE = false;
var BASESCORE = 10;
var BONUS = 25;
var SCORE = 0;

var Circolor = Circolor || {};
Circolor.Boot = function(game) {};

Circolor.Boot.prototype = {
    init: function() {
        this.stage.backgroundColor = SETTINGS.backgroundColor;
        // center the game
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
    },
    create: function(game) {
        var storage = localStorage.getItem("Circolor") || '{"highScore": 0}';
        game.storage = JSON.parse(storage);
        // set game world bounds and scaling
        game.world.setBounds(0, 0, game.world.width, 850);
        game.top = SETTINGS.gameTop;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setMinMax(320, 480, 1280, 1920);
        game.scale.setScreenSize(true);
        game.scale.refresh();

        game.scale.enterLandscape.add(function () {
            game.scale.refresh();
        });

        game.scale.enterPortrait.add(function () {
            game.scale.refresh();
        });

    },
    update: function(game) {
        game.state.start("Preloader");
    }
};
