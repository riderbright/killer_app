var canvas;
var myAudio
var context;
var bgImage;
var bgRange;
var bgReady;
var bgCloud;
var redShipReady;
var keysDown;


window.onload = function () {


    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = 2000;
    canvas.height = 200;
    console.log(context);

    //document.body.appendChild(canvas);
    document.getElementById("header").appendChild(canvas);

    bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;

    };
    bgImage.src = "sprites/canvas_4.png";


    var SpaceShip = function (x, y, speed, src, gameMove) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.src = src;
        //this.src = valueAtIndexOf(i)
        this.gameMove = gameMove;
        this.image = new Image();
        this.image.src = src;
        this.image.onload = function () {
            redShipReady = true;
            console.log("red ready");
        };

    };



    //use speed * modifier


    var bgKillers = new SpaceShip(0, 0, 0, "sprites/real_killerz_white.png", 10);
    var bgKillersTwo = new SpaceShip(2000, 0, 0, "sprites/real_killerz_white.png", 10);
    var bgCloud = new SpaceShip(1400, 0, 0, "sprites/cloud_9.png", 10);
    var bgCloudZero = new SpaceShip(1400, 0, 0, "sprites/cloud_3.png", 10);
    var bgCloudNine = new SpaceShip(1400, 0, 0, "sprites/cloud_9.png", 10);
    var bgNebula = new SpaceShip(1400, 0, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaOne = new SpaceShip(1400, 0, 0, "sprites/cloud_gas.png", 10);
    var bgNebulaTwo = new SpaceShip(1400, 0, 0, "sprites/cloud_gas.png", 10);

    keysDown = {}

    document.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true

    }, false);

    document.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];

    }, false);


    var update = function (modifier) {

        if (bgCloud.gameMove === 10) {
            bgCloud.x -= 1.8;
            bgCloudNine.x -= 2.4;
            bgKillers.x -= 1;
            bgKillersTwo.x -= 1;
            bgNebulaTwo.x -= 4;
            bgNebulaOne.x -= 3;
            bgNebula.x -= 2;
            bgCloudZero.x -= 2.6;

        }
        if (bgCloud.x < -2000) {
            bgCloud.x = 1400;
        }
        if (bgCloud.x < -2000) {
            bgCloud.x = 2000;
        }
        if (bgCloudNine.x < -1875) {
            bgCloudNine.x = 1300;
        }
        if (bgKillers.x < -1600) {
            bgKillers.x = 2000;
        }
        if (bgKillersTwo.x < -1600) {
            bgKillersTwo.x = 2000;
        }
        if (bgNebulaOne.x < -2002) {
            bgNebulaOne.x = 2000;
        }
        if (bgNebula.x < -2002) {
            bgNebula.x = 2000;
        }
        if (bgNebulaTwo.x < -2002) {
            bgNebulaTwo.x = 2000;
        }

    };


    var drawGame = function () {

        if (bgReady) {
            context.drawImage(bgImage, 0, 0);

        }
        if (redShipReady) {
            context.drawImage(bgCloud.image, bgCloud.x, bgCloud.y);
            context.drawImage(bgCloudNine.image, bgCloudNine.x, bgCloudNine.y);
            context.drawImage(bgKillers.image, bgKillers.x, bgKillers.y);
            context.drawImage(bgKillersTwo.image, bgKillersTwo.x, bgKillersTwo.y);
            context.drawImage(bgNebula.image, bgNebula.x, bgNebula.y);
            context.drawImage(bgCloudZero.image, bgCloudZero.x, bgCloudZero.y);
            context.drawImage(bgNebulaOne.image, bgNebulaOne.x, bgNebulaOne.y);
            context.drawImage(bgNebulaTwo.image, bgNebulaTwo.x, bgNebulaTwo.y);
        
        };
    }
    var tickTock = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / .09);
        drawGame();
        then = now;
        requestAnimationFrame(tickTock);
    };

    var w = window;
    requestAnimationFrame =
        w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        w.msRequestAnimationFrame ||
        w.mozRequestAnimationFrame;

    var then = Date.now();
    update();
    tickTock();


};