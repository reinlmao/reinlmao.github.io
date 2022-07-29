var app = new PIXI.Application(640, 360);
document.body.appendChild(app.view);

var iterations = 11;
var length = 500.0;

for (var i = 0; i < iterations; i++) {
    var increment = i * (length / iterations);
    var circle = new PIXI.Graphics();
    circle.beginFill(0x5cafe2);
    circle.drawCircle(0, 0, 2);
    circle.x = 60 + (increment);
    circle.y = 60 + (Math.sin(increment) * 10);
    app.stage.addChild(circle);
}

var second_iterations = 100

for (var i = 0; i < second_iterations; i++) {
    var increment = i * (length / second_iterations);
    var circle = new PIXI.Graphics();
    circle.beginFill(0x5cafe2);
    circle.drawCircle(0, 0, 2);
    circle.x = 60 + (increment);
    circle.y = 300 + (Math.sin(increment) * 10);
    app.stage.addChild(circle);
}
