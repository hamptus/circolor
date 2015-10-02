var Circolor = Circolor || {};

Circolor.Worlds = function(game) {};

Circolor.Worlds.prototype = {
    create: function(game) {

        this.createButton(game, 1);
        this.createButton(game, 2);
        this.createButton(game, 3);
        this.createButton(game, 4);
        this.createButton(game, 5);
        this.createButton(game, 6);

    },
    createButton: function(game, buttonNumber) {
        var labelStyle = {font: "32px Arial", fill: "rgba(0, 0, 0, 0.7)", align: "left" };
        var ring = game.add.graphics();
        ring.beginFill(0x000000, 0.05);
        ring.lineStyle(2, 0x000000, 0.25);
        ring.drawCircle(0, 0, 50);

        var button = game.add.button(game.world.bounds.left + 100 * buttonNumber, game.world.bounds.top + 100, null, function() {
            this.state.start("Level00" + buttonNumber);
        }, this);

        var label = new Phaser.Text(game, -10, -12, buttonNumber, labelStyle);

        button.addChild(ring);
        button.addChild(label);

    }
};