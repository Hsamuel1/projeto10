var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

function checkwin() {
if (Sofia.isTouching(Cup)) {
  stroke("red");
  textSize(17);
  text("Você Venceu!!!", 130, 140);
}

}
var Aréadespawn = createSprite(50, 50);
var Sofia = createSprite(50, 50, 20, 20);
var Cup = createSprite(350, 350, 25, 25);


































































































function draw() {
Sofia.shapeColor = "yellow";
Cup.shapeColor = "cyan";
Aréadespawn.shapeColor = "red";
createEdgeSprites();
Sofia.bounce(topEdge);
Sofia.bounce(bottomEdge);
Sofia.bounce(rightEdge);
Sofia.bounce(leftEdge);
Sofiamecheno();
Colisão();

background("pink");
checkwin();
textSize(20);
stroke("cyan");
text("Copo", 320, 380);
textSize(20);
stroke("yellow");
text("Sofia", 100, 20);
drawSprites();
}
function Sofiamecheno() {
  if (keyDown("down")) {
    Sofia.y = Sofia.y+5;
  }
  if (keyDown("right")) {
    Sofia.x = Sofia.x+5;
  }
  if (keyDown("up")) {
    Sofia.y = Sofia.y-5;
  }
  if (keyDown("left")) {
    Sofia.x = Sofia.x-5;
  }

  
}
function Colisão() {
  if (Sofia.isTouching(parede1)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede2)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede3)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede4)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede5)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede6)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede7)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede8)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede9)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede10)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede11)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede12)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede13)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede14)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede15)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede16)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede17)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede18)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede19)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede20)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
  if (Sofia.isTouching(parede21)) {
    Sofia.x = 50;
    Sofia.y = 50;
  }
}

var parede1 = createSprite(300, 10, 20, 80);
var parede2 = createSprite(100, 100, 500, 20);
var parede3 = createSprite(200, 300, 120, 20);
var parede4 = createSprite(150, 300, 20, 100);
var parede5 = createSprite(300, 200, 15, 100);
var parede6 = createSprite(300, 200, 200, 15);
var parede7 = createSprite(0, 400, 900, 20);
var parede8 = createSprite(200, 300, 20, 140);
var parede9 = createSprite(200, 0, 20, 130);
var parede10 = createSprite(250, 100, 20, 130);
var parede11 = createSprite(100, 200, 100, 15);
var parede12 = createSprite(170, 200, 100, 20);
var parede13 = createSprite(300, 400, 20, 200);
var parede14 = createSprite(120, 100, 20, 100);
var parede15 = createSprite(250, 300, 20, 100);
var parede16 = createSprite(350, 100, 20, 40);
var parede17 = createSprite(50, 250, 20, 150);
var parede18 = createSprite(180, 180, 20, 40);
var parede19 = createSprite(330, 310, 40, 20);
var parede20 = createSprite(100, 350, 20, 100);
var parede21 = createSprite(350, 280, 20, 90);
var parede22 = createSprite(100, 225, 20, 90);























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
