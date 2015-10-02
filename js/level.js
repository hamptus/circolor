var SETTINGS = SETTINGS || {debug: false, showFps: false};

var colors = [
    0x1abc9c, 0x2ecc71, 0x3498db, 0x9b59b6, 0x34495e,
    0xf1c40f, 0xe67e22
];
var blobSize = 25;
var circObj = new Phaser.Circle(0, 0, blobSize);
var blobShadow = new Phaser.Circle(0, 1.25, blobSize + 2.5);

function getColor() {
    return game.rnd.pick(colors);
}

function Level(game) {}

Level.prototype = {
    preload: function(game) {
        if (SETTINGS.showFps){
            game.time.advancedTiming = true;
        }
    },
    create: function(game) {
        // var topBackground = new Phaser.Rectangle();

        this.setupPhysics(game);

        var targetCollisionGroup = game.physics.p2.createCollisionGroup();
        var blobCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();

        blob = this.setupBlob(game);

        // // Set up collisions

        this.targets = this.setupTargets(game);

        for (i = 0; i < this.targets.length; ++i) {
            this.targets[i].sprite.body.setCollisionGroup(targetCollisionGroup);
            this.targets[i].sprite.body.collides([blobCollisionGroup]);
        }

        // set up collisions;

        blob.body.setCollisionGroup(blobCollisionGroup);
        blob.body.collides(targetCollisionGroup);

        var checkBlob = this.blobOnBottom;
        // Movement
        cursors.left.onHoldCallback = function() {
            if (blob.body.x > blob.width / 2 && checkBlob()) {
                blob.body.moveLeft(300);
            } else {
                blob.body.velocity.x = 0;
            }
        };

        cursors.left.onUp.add(function () {
            blob.body.velocity.x = 0;
        }, this);

        cursors.right.onHoldCallback = function() {
            if (blob.body.x < game.world.bounds.right - (blob.width / 2) && checkBlob()) {
                blob.body.moveRight(300);
            } else {
                blob.body.velocity.x = 0;
            }
        };

        cursors.right.onUp.add(function () {
            blob.body.velocity.x = 0;
        }, this);

        this.setupInput();

        blob.events.onKilled.add(function() {
            if (blob.targetsHit.length === 0) {
                LIVES -= 1;
                counter.text = "Lives: " + LIVES;
            } else {

                // FIXME: Add COMBO score if multiple targets are hit at the same time with COMBO text on screen
                var tempScore = (BASESCORE * this.levelNumber) * blob.targetsHit.length;
                this.points += tempScore;
                SCORE += tempScore;

                score.text = "Score: " + SCORE;
                if (game.storage.highScore < SCORE) {
                    this.updateHighScore(game, SCORE);
                }
                score.x = game.world.bounds.left + 5;
            }

            this.updateTargetHealth();
            this.checkShotCount(game);

            game.time.events.add(Phaser.Timer.HALF / 2, function (b) {

                var circle = blob.children[1];
                circle.clear();
                circle.beginFill(getColor());
                circle.drawCircle(0, 0, blobSize);

                var shadow = blob.children[0];
                shadow.clear();
                shadow.beginFill(0xbdc3c7);
                shadow.alpha = 0.8;
                shadow.drawShape(blobShadow);

                blob.scale.set(1);
                blob.reset(blob.blobX, game.world.bounds.bottom - blobSize);
            }, this);
        }, this);

        // Add additional text

        counter_style = {font: "32px Arial", fill: "rgba(10, 10, 10, 0.7)", align: "left" };
        counter = game.add.text(game.world.bounds.right - 120, game.world.bounds.top + 15, "Lives: " + LIVES, counter_style);

        score_style = {font: "32px Arial", fill: "rgba(10, 10, 10, 0.7)", align: "left" };
        score = game.add.text(game.world.bounds.left + 5, game.world.bounds.top + 15, "Score: " + SCORE, score_style);

        style = { font: "65px Arial", fill: "rgb(40, 100, 200)", align: "center" };
        text = game.add.text(game.world.centerX, game.world.centerY - 200, this.title, style);

        text.anchor.set(0.5);

        // set up movement controll
        game.input.addMoveCallback(function () {
            if (this.blobOnBottom()){
                blob.body.x = game.input.x;
            }
        }, this);

        game.time.events.add(Phaser.Timer.SECOND * 2, function(){
            text.visible = false;
        }, this);

        game.time.events.add(Phaser.Timer.HALF, function() {
            this.ready = true;
        }, this);

        // Set up target health
        this.updateTargetHealth();

    },
    updateTargetHealth: function() {
        this.targetHealth = 0;
        for (i = 0; i < this.targets.length; i++) {
            this.targetHealth += this.targets[i].sprite.health;
        }
    },
    setupInput: function() {
        spacebar.onDown.add(this.shoot, this);
    },
    blobOnBottom: function() {
        var height = parseInt(blob.body.y + blobSize, 10);
        var bottom = parseInt(game.world.bounds.bottom, 10);

        return height === bottom;

    },
    shoot: function() {
        if (this.blobOnBottom() && this.ready){
            blob.targetsHit = [];

            if (isNaN(blob.body.x)) {
                blob.blobX = game.world.centerX;
            } else {
                blob.blobX = blob.body.x;
            }
            blob.body.velocity.y = -game.world.bounds.bottom * 2;
        }

    },
    render: function(game){
        blob.body.debug = SETTINGS.debug;
        if (SETTINGS.showFps) {
           game.debug.text(game.time.fps || '--', game.world.centerX, game.world.bounds.top, "#000000");
        }
    },
    update: function(game) {
        if (this.hasOwnProperty("preUpdate")){
            this.preUpdate();
        }

        if(game.input.activePointer.justReleased() && this.ready) {
            this.shoot();
        }
    },
    setupTargets: function(game) {
        //
    },
    setupBlob: function(game) {
        var blob = game.add.sprite(game.world.centerX, game.world.bounds.bottom - blobSize);
        blob.anchor.set(0.5);

        var circle = game.add.graphics();

        circle.beginFill(getColor(), 1);
        circle.drawShape(circObj);

        var shadow = game.add.graphics();
        shadow.beginFill(0xbdc3c7);
        shadow.alpha = 0.5;
        shadow.drawShape(blobShadow);
        blob.addChild(shadow);
        blob.addChild(circle);

        game.physics.p2.enable(blob);

        // blob.anchor.set(0.5);
        blob.body.setCircle(circObj._radius);

        blob.checkWorldBounds = true;
        blob.outOfBoundsKill = true;
        blob.body.collideWorldBounds = false;

        blob.targetsHit = [];

        return blob;
    },
    setupPhysics: function(game) {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);

        game.physics.p2.setBoundsToWorld(true, true, false, true, false);
    },
    checkShotCount: function(game) {
        if (this.targetHealth === 0){
            text.setText("Winner!");
            text.visible = true;
            this.ready = false;

            if (this.addBonus) {
                var bonus = (this.levelNumber * LIVES) * BONUS;

                SCORE += bonus;
                if (game.storage.highScore < SCORE) {
                    this.updateHighScore(game, SCORE);
                }
                score.text ="Score: " + SCORE;
                if (game.storage.highScore < SCORE) {
                    this.updateHighScore(game, SCORE);
                }
                this.addBonus = false;
            }

            game.time.events.add(Phaser.Timer.SECOND * 2, function (b) {
                game.state.start(this.nextLevel);
            }, this);
        } else if (LIVES <= 0) {
            text.setText("Loser!");
            text.visible = true;
            this.ready = false;

            game.time.events.add(Phaser.Timer.SECOND * 2, function (b) {
                game.state.start("Menu");
            }, this);
        }
    },
    updateHighScore: function(game, highScore) {
        NEWHIGHSCORE = true;
        game.storage.highScore = highScore;
        localStorage.setItem("Circolor", JSON.stringify(game.storage));
    },
    nextLevel: "Menu",
    shots: 0,
    points: 0,
    levelNumber: 0,
    addBonus: true,
    targetHealth: 0
};