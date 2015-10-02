var Circolor = Circolor || {};
Circolor.Game = function(game) {};

Circolor.Game.prototype = {
    create: function(game) {

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.gravity.y = 500;
        game.physics.p2.restitution = 0;

        game.physics.p2.setBoundsToWorld(true, true, false, true, false);
        var targetCollisionGroup = game.physics.p2.createCollisionGroup();
        var blobCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();

        target = game.add.sprite(game.world.centerX, game.world.centerY / 5, "sprites");
        game.physics.p2.enable(target);
        // Don't let the target move when hit
        target.body.kinematic = true;
        target.body.data.gravityScale = 0;
        target.health = 3;

        target.anchor.setTo(0.5, 0.5);
        target.animations.add("circle001", ["circle001.png"], 0, false);
        target.animations.add('circle002', ["circle006.png"], 0, false);
        target.animations.add('circle003', ["circle007.png"], 0, false);
        target.animations.add('circle005', ["circle005.png"], 0, false);
        target.body.setCircle(target.width * 2);

        blob = game.add.sprite(game.world.centerX, game.world.height - 200, "sprites");
        game.physics.p2.enable(blob);
        blob.anchor.setTo(0.5, 0.5);
        blob.animations.add("blob", ["blob002.png"], 0, false);
        blob.body.setCircle(blob.width / 2);
        blob.checkWorldBounds = true;
        blob.outOfBoundsKill = true;

        blob.events.onKilled.add(this.nextSlice, game);

        // Set up controls
        cursors = game.input.keyboard.createCursorKeys();

        spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // // Set up collisions

        target.body.setCollisionGroup(targetCollisionGroup);
        target.body.collides([blobCollisionGroup]);

        blob.body.setCollisionGroup(blobCollisionGroup);
        blob.body.collides(targetCollisionGroup, function(blob, target){
            target.sprite.health -= 1;
            if (target.sprite.health === 2) {
                target.sprite.animations.play("circle002");
            } else if (target.sprite.health === 1) {
                target.sprite.animations.play("circle003");
            } else if (target.sprite.health === 0) {
                target.sprite.animations.play("circle005");
            }
            blob.sprite.kill();
            if (target.sprite.health === 0){
                console.log("you win");
            }
        }, game);

        game.input.touch.onTouchEnd = this.shoot;

        // // Handle movement
        target.body.direction = "L";
        target.animations.play("circle001");
        blob.animations.play("blob");

        spacebar.onDown.add(this.shoot, game);

    },
    shoot: function() {
        if (blob.y + 1 > (game.world.height - blob.height / 2)) {
            blob.body.velocity.y = -game.height * 2;
        }
    },
    nextSlice: function() {
        game.time.events.add(Phaser.Timer.HALF / 2, function (b) {
            blob.reset(game.world.centerX, game.world.bounds.bottom - blob.height / 2);
        }, this);
    },
    checkTargets: function() {
        if (target.health === 0){
            console.log("you win");
            game.time.events.add(Phaser.Timer.HALF / 2, function (b) {
                target.animations.play("circle001");
            }, this);
        }
    },
    render: function(game){
        if (SETTINGS.debug) {
           target.body.debug = true;
           blob.body.debug = true;
        }
    },
    update: function(game) {

        target.body.velocity.y = 0;
        blob.body.velocity.x = 0;

        if (target.health === 0){
            console.log("you win");
            game.time.events.add(Phaser.Timer.HALF, function (b) {
                target.animations.play("circle001");
                target.health = 3;
            }, this);
        }

        if (target.body.direction === "L") {
            if (target.body.x <= 0 + (target.width / 2)) {
                target.body.direction = "R";
            } else {
                target.body.velocity.x = -300;
            }
        }

        if (target.body.direction === "R") {
            if (target.body.x >= game.world.width - (target.width / 2)) {
                target.body.direction = "L";
            } else {
                target.body.velocity.x = 300;
            }
        }

        if (cursors.left.isDown) {
            blob.body.velocity.x = -400;
        } else if (cursors.right.isDown) {
            blob.body.velocity.x = 400;
        }

    }
};
