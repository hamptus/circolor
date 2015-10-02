var Circolor = Circolor || {};

// LEVEL 1 //
Circolor.Level001 = Object.create(Level.prototype);
Circolor.Level001.nextLevel = "Level002";
Circolor.Level001.title = "Level 1";
Circolor.Level001.levelNumber = 1;

Circolor.Level001.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.centerY - game.top,
        size: "medium"
    });

    target.create();

    target.Tweens.sideToSide(target, game, game.world.bounds.left, 2500);
    return [target];
};

// LEVEL 2 //

Circolor.Level002 = Object.create(Level.prototype);
Circolor.Level002.nextLevel = "Level003";
Circolor.Level002.title = "Level 2";
Circolor.Level002.levelNumber = 2;

Circolor.Level002.setupTargets = function(game) {

    var target = new Target(game, {
        x: game.world.bounds.left,
        y: game.world.centerY - 50,
        size: "large"
    });

    target.create();
    target.Tweens.sideToSide(target, game, game.world.bounds.right, 2000);

    var target2 = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.centerY - 50,
        size: "large"
    });

    target2.create();

    target2.Tweens.sideToSide(target2, game, game.world.bounds.left, 2000);

    return [target, target2];
};

// Level 3 //

Circolor.Level003 = Object.create(Level.prototype);
Circolor.Level003.title = "Level 3";
Circolor.Level003.nextLevel = "Level004";
Circolor.Level003.levelNumber = 3;

Circolor.Level003.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.centerY - 50,
        size: "large"
    });

    target.create();

    target.Tweens.sideToSide(target, game, game.world.bounds.left, 2200);
    target.Tweens.upDown(target, game, game.world.bounds.top + 100, 2200);

    var target2 = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.bounds.top + 100,
        size: "large"
    });

    target2.create();

    target2.Tweens.sideToSide(target2, game, game.world.bounds.left, 2000);
    target2.Tweens.upDown(target2, game, game.world.centerY - 50, 2000);

    return [target, target2];
};

// LEVEL 4  //
Circolor.Level004 = Object.create(Level.prototype);
Circolor.Level004.title = "Level 4";
Circolor.Level004.nextLevel = "Level005";
Circolor.Level004.levelNumber = 4;

Circolor.Level004.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.bounds.left + 100,
        y: game.world.centerY / 2,
        size: "medium"
    });
    target.create();
    target.Tweens.circle(target, game, 100, 1000, false);

    var target2 = new Target(game, {
        x: game.world.bounds.right - 100,
        y: game.world.centerY / 2,
        size: "medium"
    });
    target2.create();
    target2.Tweens.circle(target2, game, 100, 1000, true);

    var target3 = new Target(game, {
        x: game.world.centerX,
        y: game.world.centerY / 3,
        size: "large"
    });

    target3.create();
    target3.Tweens.circle(target3, game, 200, 1000, false);

    var target4 = new Target(game, {
        x: game.world.centerX,
        y: game.world.centerY / 3,
        size: "large"
    });

    target4.create();
    target4.Tweens.circle(target4, game, 200, 1000, true);

    return [target, target2, target3, target4];
};

// LEVEL 5  //
Circolor.Level005 = Object.create(Level.prototype);
Circolor.Level005.title = "Level 5";
Circolor.Level005.nextLevel = "Level006";
Circolor.Level005.levelNumber = 5;

Circolor.Level005.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.centerX - 35,
        y: game.world.bounds.top + 275,
        size: "large"
    });
    target.create();
    target.Tweens.sideToSide(target, game, game.world.bounds.left, 850);

    var target2 = new Target(game, {
        x: game.world.centerX + 35,
        y: game.world.bounds.top + 275,
        size: "large"
    });
    target2.create();
    target2.Tweens.sideToSide(target2, game, game.world.bounds.right, 850);

    var target3 = new Target(game, {
        x: game.world.centerX - 30,
        y: game.world.centerY + 90,
        size: "small"
    });
    target3.create();
    target3.Tweens.sideToSide(target3, game, game.world.bounds.left + 50, 1050);

    var target4 = new Target(game, {
        x: game.world.centerX + 30,
        y: game.world.centerY + 90,
        size: "small"
    });
    target4.create();
    target4.Tweens.sideToSide(target4, game, game.world.bounds.right - 50, 1050);

    var target5 = new Target(game, {
        x: game.world.centerX,
        y: game.world.bounds.top + 150,
        size: "jumbo"
    });
    target5.create();

    return [target, target2, target3, target4, target5];
};

// LEVEL 6  //
Circolor.Level006 = Object.create(Level.prototype);
Circolor.Level006.title = "Level 6";
Circolor.Level006.nextLevel = "Level007";
Circolor.Level006.levelNumber = 6;

Circolor.Level006.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.bounds.left + 35,
        y: game.world.bounds.top + 90,
        size: "small"
    });

    target.create();
    game.add.tween(target.sprite.body).to(
        {y: game.world.centerY}, 300, Phaser.Easing.Sinusoidal.InOut).to(
        {x: game.world.bounds.right - 35}, 3000, Phaser.Easing.Circular.InOut).to(
        {y: game.world.bounds.top + 90}, 300, Phaser.Easing.Sinusoidal.InOut).to(
        {x: game.world.bounds.left+ 35}, 3000, Phaser.Easing.Circular.InOut).loop().start();

    var target2 = new Target(game, {
        x: game.world.bounds.left + 35,
        y: game.world.centerY,
        size: "xlarge"
    });

    target2.create();
    target2.Tweens.sideToSide(target2, game, game.world.bounds.right - 50, 2000);

    var target3 = new Target(game, {
        x: game.world.centerX,
        y: game.world.bounds.top + 100,
        size: "medium"
    });

    target3.create();

    game.add.tween(target3.sprite.body).to(
        {x: game.world.bounds.left + 50, y: game.world.centerY + 100}, 1000, Phaser.Easing.Sinusoidal.Out).to(
        {x: game.world.bounds.right - 50}, 1500, Phaser.Easing.Sinusoidal.Out).to(
        {x: game.world.centerX, y: game.world.bounds.top + 100}, 1000, Phaser.Easing.Sinusoidal.Out).loop().start();

    return [target, target2, target3];
};

// LEVEL 7  //
Circolor.Level007 = Object.create(Level.prototype);
Circolor.Level007.title = "Level 7";
Circolor.Level007.nextLevel = "Level008";
Circolor.Level007.levelNumber = 7;

Circolor.Level007.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.centerX ,
        y: game.world.centerY,
        size: "xsmall"
    });

    target.create();

    var diameter = 200;
    var speed = 1500;

    var startX = target.sprite.x;
    var startY = target.sprite.y - diameter;

    var multi = 10;

    var rad = target.sprite.body.data.shapes[0].radius;

    game.add.tween(target.sprite.body).to(
        {x: startX + diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
        {x: startX}, speed, Phaser.Easing.Sinusoidal.In).to(
        {x: startX - diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
        {x: startX}, speed, Phaser.Easing.Sinusoidal.In).loop().start();

    game.add.tween(target.sprite.body).to(
        {y: startY}, speed, Phaser.Easing.Sinusoidal.In).to(
        {y: startY + diameter}, speed, Phaser.Easing.Sinusoidal.Out).to(
        {y: startY}, speed, Phaser.Easing.Sinusoidal.In).to(
        {y: startY + diameter}, speed, Phaser.Easing.Sinusoidal.Out).loop().start();

    /*game.add.tween(target.sprite.scale).to(
        {y: multi, x: multi}, speed, Phaser.Easing.Linear.None, true).repeat(Number.MAX_VALUE).yoyo(true);*/


    // game.add.tween(target.sprite.body.data.shapes[0]).to(
    //     {radius: rad * multi}, speed, Phaser.Easing.Linear.None, true).repeat(Number.MAX_VALUE).yoyo(true);

    var target2 = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.centerY,
        size: "small"
    });

    target2.create();

    target2.Tweens.sideToSide(target2, game, game.world.bounds.left, 2500);

    var target3 = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.bounds.top + 150,
        size: "small"
    });

    target3.create();
    target3.Tweens.sideToSide(target3, game, game.world.bounds.left, 3000);

    var target4 = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.centerY + 150,
        size: "medium"
    });

    target4.create();
    target4.Tweens.sideToSide(target4, game, game.world.bounds.left, 1000);

    return [target, target2, target3, target4];
};

// Circolor.Level007.preUpdate = function(game) {
//     targ.sprite.body.debugBody.draw();
// };

// LEVEL 8  //
Circolor.Level008 = Object.create(Level.prototype);
Circolor.Level008.title = "Level 8";
Circolor.Level008.nextLevel = "Level009";
Circolor.Level008.levelNumber = 8;

Circolor.Level008.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.bounds.left + 150,
        y: 200,
        size: "small"
    });
    target.create();
    target.Tweens.circle(target, game, 50, 500, false);

    var target2 = new Target(game, {
        x: game.world.bounds.left + 150,
        y: 150,
        size: "small"
    });
    target2.create();
    target2.Tweens.circle(target2, game, 100, 1000, true);

    var target3 = new Target(game, {
        x: game.world.bounds.right - 300,
        y: 350,
        size: "small"
    });
    target3.create();
    target3.Tweens.circle(target3, game, 50, 500, false);

    var target4 = new Target(game, {
        x: game.world.bounds.right - 200,
        y: 250,
        size: "xsmall"
    });
    target4.create();
    target4.Tweens.circle(target4, game, 100, 1000, true);

    var target5 = new Target(game, {
        x: game.world.bounds.right - 274,
        y: 100,
        size: "medium"
    });
    target5.create();
    target5.Tweens.circle(target5, game, 150, 1000, true);

    var target6 = new Target(game, {
        x: game.world.bounds.left + 274,
        y: 100,
        size: "large"
    });
    target6.create();
    target6.Tweens.circle(target6, game, 70, 1000, false);

    return [target, target2, target3, target4, target5, target6];
};

// LEVEL 9  //
Circolor.Level009 = Object.create(Level.prototype);
Circolor.Level009.title = "Level 9";
Circolor.Level009.nextLevel = "Level010";
Circolor.Level009.levelNumber = 9;
Circolor.Level009.shots = 9;

Circolor.Level009.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.centerX,
        y: 120,
        size: "small"
    });

    target.create();
    var easing = Phaser.Easing.Bounce.Out;
    var speed = 1100;
    game.add.tween(target.sprite.body).to(
        {x: game.world.bounds.left + 150, y: 170}, speed, easing).to(
        {x: game.world.bounds.right - 50, y: 230}, speed, easing).to(
        {x: game.world.bounds.left + 45, y: 280}, speed, easing).to(
        {x: game.world.bounds.right - 130, y: 330}, speed, easing).to(
        {x: game.world.bounds.left + 130, y: 380}, speed, easing).to(
        {x: game.world.bounds.right - 50, y: 430}, speed, easing).to(
        {x: game.world.bounds.left + 230, y: 380}, speed, easing).to(
        {x: game.world.bounds.right - 230, y: 330}, speed, easing).to(
        {x: game.world.bounds.left + 90, y: 280}, speed, easing).to(
        {x: game.world.bounds.right - 90, y: 230}, speed, easing).to(
        {x: game.world.bounds.left + 50, y: 170}, speed, easing).to(
        {x: game.world.centerX, y: 120}, speed, easing).loop().start();

    return [target];
};


// LEVEL 10  //
Circolor.Level010 = Object.create(Level.prototype);
Circolor.Level010.title = "Level 10";
Circolor.Level010.nextLevel = "Level011";
Circolor.Level010.levelNumber = 10;
// Circolor.Level0010.shots = 9;

Circolor.Level010.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.centerX + 150,
        y: 120,
        size: "small"
    });

    target.create();

    var easing = Phaser.Easing.Sinusoidal.InOut;
    var speed = 1000;

    game.add.tween(target.sprite.body).to(
        {x: game.world.centerX - 150}, speed, easing, true).to(
        {x: game.world.centerX + 150, y: game.world.centerY}, speed, easing, true).to(
        {x: game.world.centerX - 150}, speed, easing, true).to(
        {x: game.world.centerX + 150, y: 120}, speed, easing, true).loop();

    var target2 = new Target(game, {
        x: game.world.centerX - 150,
        y: game.world.centerY,
        size: "small"
    });

    target2.create();

    game.add.tween(target2.sprite.body).to(
        {x: game.world.centerX + 150}, speed, easing, true).to(
        {x: game.world.centerX - 150, y: 120}, speed, easing, true).to(
        {x: game.world.centerX + 150}, speed, easing, true).to(
        {x: game.world.centerX - 150, y: game.world.centerY}, speed, easing, true).loop();

    var target3 = new Target(game, {
        x: game.world.centerX - 150,
        y: 120,
        size: "small"
    });

    target3.create();

    game.add.tween(target3.sprite.body).to(
        {x: game.world.centerX + 150}, speed, easing, true).to(
        {x: game.world.centerX - 150, y: game.world.centerY}, speed, easing, true).to(
        {x: game.world.centerX + 150}, speed, easing, true).to(
        {x: game.world.centerX - 150, y: 120}, speed, easing, true).loop();

    var target4 = new Target(game, {
        x: game.world.centerX + 150,
        y: game.world.centerY,
        size: "small"
    });

    target4.create();

    game.add.tween(target4.sprite.body).to(
        {x: game.world.centerX - 150}, speed, easing, true).to(
        {x: game.world.centerX + 150, y: 120}, speed, easing, true).to(
        {x: game.world.centerX - 150}, speed, easing, true).to(
        {x: game.world.centerX + 150, y: game.world.centerY}, speed, easing, true).loop();

    return [target, target2, target3, target4];
};


// LEVEL 11  //
Circolor.Level011 = Object.create(Level.prototype);
Circolor.Level011.title = "Level 11";
Circolor.Level011.nextLevel = "Level012";
Circolor.Level011.levelNumber = 11;
// Circolor.Level0010.shots = 9;

Circolor.Level011.setupTargets = function(game) {
    var easing = Phaser.Easing.Sinusoidal.InOut;
    var speed = 750;
    var target;

    var returnTargets = [];

     // First three targets

    target = new Target(game, {
        x: game.world.centerX - 100,
        y: game.world.centerY - 150,
        size: "medium"
    });
     target.create();

    game.add.tween(target.sprite.body).to(
        {x: game.world.centerX + 100}, speed, easing, true).repeat(Number.MAX_VALUE).yoyo(true);

    returnTargets.push(target);

    target = new Target(game, {
        x: game.world.bounds.left,
        y: game.world.centerY - 150,
        size: "medium"
    });
    target.create();

    game.add.tween(target.sprite.body).to(
        {x: game.world.bounds.left + 350}, speed, easing, true).repeat(Number.MAX_VALUE).yoyo(true);

    returnTargets.push(target);

    target = new Target(game, {
        x: game.world.bounds.right - 350,
        y: game.world.centerY - 150,
        size: "medium"
    });
    target.create();

    game.add.tween(target.sprite.body).to(
        {x: game.world.bounds.right - 50}, speed, easing, true).repeat(Number.MAX_VALUE).yoyo(true);


    returnTargets.push(target);

    // Next two targets
    target = new Target(game, {
        x: game.world.bounds.left + 80,
        y: game.world.centerY - 50,
        size: "small"
    });
    target.create();

    game.add.tween(target.sprite.body).to(
        {x: game.world.centerX}, speed, easing, true).repeat(Number.MAX_VALUE).yoyo(true);

    returnTargets.push(target);

    target = new Target(game, {
        x: game.world.centerX,
        y: game.world.centerY - 50,
        size: "small"
    });
    target.create();

    game.add.tween(target.sprite.body).to(
        {x: game.world.bounds.right - 80}, speed, easing, true).repeat(Number.MAX_VALUE).yoyo(true);

    returnTargets.push(target);

    // Last target

    target = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.centerY + 50,
        size: "large"
    });
    target.create();

    target.Tweens.sideToSide(target, game, game.world.bounds.left, 2500);

    returnTargets.push(target);

    return returnTargets;
};

// LEVEL 12 //
Circolor.Level012 = Object.create(Level.prototype);
Circolor.Level012.title = "Level 12";
Circolor.Level012.levelNumber = 12;
// Circolor.Level0012.nextLevel = "Level002";

Circolor.Level012.setupTargets = function(game) {
    var target = new Target(game, {
        x: game.world.bounds.right,
        y: game.world.centerY,
        size: "large"
    });

    target.create();

    target.Tweens.sideToSide(target, game, game.world.bounds.left, 2000);
    game.add.tween(target.sprite.body).to({y: game.world.centerY - 200}, 2500, Phaser.Easing.Elastic.InOut, true).repeat(Number.MAX_VALUE).yoyo(true);

    var target2 = new Target(game, {
        x: game.world.bounds.left,
        y: game.world.centerY - 200,
        size: "large"
    });

    target2.create();

    target2.Tweens.sideToSide(target2, game, game.world.bounds.right, 2000);
    game.add.tween(target2.sprite.body).to({y: game.world.centerY}, 2500, Phaser.Easing.Elastic.InOut, true).repeat(Number.MAX_VALUE).yoyo(true);

    var target3 = new Target(game, {
        x: game.world.centerX,
        y: game.world.centerY - 150,
        size: "small"
    });

    target3.create();
    target3.Tweens.circle(target3, game, 50, 400, true);

    return [target, target2, target3];
};
