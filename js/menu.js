var Circolor = Circolor || {};
Circolor.Menu = function(game) {};

Circolor.Menu.prototype = {
    create: function(game) {
        playButton = game.add.button(game.world.centerX, game.world.centerY - 50, "sprites", this.start, this);
        playButton.anchor.setTo(0.5);

        playButton.onInputDown.add(this.start, game);

        playButton.frameName = "playButton.png";

        var scoreText = "HIGH SCORE";
        if (NEWHIGHSCORE) {
            scoreText = "NEW HIGH SCORE!";
        }

        var highScoreStyle = { font: "65px Arial", fill: "rgba(10, 10, 90, 0.4)", align: "center" };
        var highScoreLabel = game.add.text(game.world.centerX, game.world.centerY + 150, scoreText, highScoreStyle);
        highScoreLabel.anchor.set(0.5);

        var highScore = game.storage.highScore;
        var highScoreValue = game.add.text(game.world.centerX, game.world.centerY + 225, highScore, highScoreStyle);
        highScoreValue.anchor.set(0.5);


    },
    start: function() {
        SCORE = 0;
        NEWHIGHSCORE = false;
        LIVES = 5;
        this.state.start("Level001");
    }
};
