var Circolor = Circolor || {};
Circolor.Preloader = function(game) {};

Circolor.Preloader.prototype = {
    preload: function(game) {
        game.load.atlas("sprites", "img/sprites.png", "json/sprites.json");
    },
    create: function(game) {
        // Set up controls
        cursors = game.input.keyboard.createCursorKeys();
        spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },
    update: function(game) {
        game.state.start("Menu");
    }
};
