
var targetSize = "medium";

function Target(game, options) {
    this.game = game;
    this.options = options;
}

Target.prototype.create = function() {
    // Add the sprite

    this.sprite = this.game.add.sprite(
        this.options.x, this.options.y
    );

    this.sprite.anchor.set(0.5);

    if (typeof(this.options.size) === "undefined" || this.options.size === null) {
        this.options.size = targetSize;
    }

    var circObj = new Phaser.Circle(0, 0, this.getSize(this.options.size));
    var shadObj = new Phaser.Circle(0, 2, this.getSize(this.options.size) + 4);
    var beObj = new Phaser.Circle(0, 0, this.getSize(this.options.size) / 3);

    this.game.physics.p2.enable(this.sprite);
        // Don't let the target move when hit
    this.sprite.body.kinematic = true;
    this.sprite.body.data.gravityScale = 0;
    this.sprite.health = this.getHealth(this.options.size);
    this.justHit = false;
    this.startingRadius = circObj._radius;

    this.sprite.body.setCircle(circObj._radius, 0, 0);

    this.sprite.body.debug = SETTINGS.debug;

    var ring = game.add.graphics();
    // ring.lineStyle(2, 0x000000, 0.25);
    var shadow = game.add.graphics();
    shadow.beginFill(0xbdc3c7);
    shadow.alpha = 0.2;
    shadow.drawShape(shadObj);

    this.sprite.addChild(shadow);

    ring.beginFill(0xffffff);
    ring.drawShape(circObj);

    this.sprite.addChild(ring);

    this.sprite.options = this.options;
    this.sprite.body.onBeginContact.add(
        function (blob) {

            if (this.sprite.health > 0) {
                blob.sprite.targetsHit.push(this);
            }

            // Change blob velocity, add tween, and kill the sprite
            blob.sprite.body.velocity.y = 0;
            blob.sprite.body.velocity.x = 0;
            var tw = game.add.tween(blob.sprite.scale);
            tw.to({x: 0, y: 0}, 100, Phaser.Easing.Sinusoidal.Out, true);
            tw.onComplete.add(blob.sprite.kill);

            // Check if this target was already hit during this shot
            if (this.justHit === true) {
                return;
            }
            this.justHit = true;

            var ring;

             if (this.sprite.health > 0){

                ring = game.add.graphics();
                ring.lineStyle(this.getLineStyle(this.options.size), blob.sprite.children[1].fillColor);
                if (this.sprite.health === 1){
                    ring.beginFill(blob.sprite.children[1].fillColor);
                }
                ring.drawCircle(0, 0, this.getSize(this.sprite.options.size) * this.getMulti(this.options.size, this.sprite.health));
                this.sprite.addChild(ring);

                this.sprite.health -= 1;

             }
        },
        this
    );

    this.sprite.body.onEndContact.add(
        function (blob) {
            this.justHit = false;
        },
        this
    );
};

Target.prototype.getSize = function (size) {
    return SETTINGS.targetSizes[size]["size"];
};

Target.prototype.getHealth = function(size) {
    return SETTINGS.targetSizes[size]["health"];
};

Target.prototype.getMulti = function(size, health) {
    return SETTINGS.targetSizes[size]["healthMulti"][health];
};

Target.prototype.getLineStyle = function(size) {
    return this.getSize(this.sprite.options.size) / SETTINGS.targetSizes[size]["lineStyle"];
};

Target.prototype.Tweens = {};

Target.prototype.Tweens.sideToSide = function(target, game, start, speed) {
    game.add.tween(target.sprite.body).from({x: start}, speed, Phaser.Easing.Sinusoidal.InOut, true).repeat(Number.MAX_VALUE).yoyo(true);
};

Target.prototype.Tweens.circle = function(target, game, diameter, speed, reverse) {
    var startX = target.sprite.x;
    var startY = target.sprite.y + diameter;


    if (reverse) {

        game.add.tween(target.sprite.body).to(
            {x: startX + diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
            {x: startX}, speed, Phaser.Easing.Sinusoidal.In).to(
            {x: startX - diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
            {x: startX}, speed, Phaser.Easing.Sinusoidal.In).loop().start();

        game.add.tween(target.sprite.body).to(
            {y: startY}, speed, Phaser.Easing.Sinusoidal.In).to(
            {y: startY + diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
            {y: startY}, speed, Phaser.Easing.Sinusoidal.In).to(
            {y: startY - diameter}, speed, Phaser.Easing.Sinusoidal.Out).loop().start();

    } else {

        game.add.tween(target.sprite.body).to(
            {x: startX - diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
            {x: startX}, speed, Phaser.Easing.Sinusoidal.In).to(
            {x: startX + diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
            {x: startX}, speed, Phaser.Easing.Sinusoidal.In).loop().start();

        game.add.tween(target.sprite.body).to(
            {y: startY}, speed, Phaser.Easing.Sinusoidal.In).to(
            {y: startY + diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
            {y: startY}, speed, Phaser.Easing.Sinusoidal.In).to(
            {y: startY -diameter}, speed, Phaser.Easing.Sinusoidal.Out).loop().start();
    }

};

Target.prototype.Tweens.upDown = function(target, game, start, speed) {
    game.add.tween(target.sprite.body).from({y: start}, speed, Phaser.Easing.Sinusoidal.InOut, true).repeat(Number.MAX_VALUE).yoyo(true);
};

