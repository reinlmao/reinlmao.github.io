import * as PIXI from "../node_modules/pixi.js/dist/browser/pixi.min.mjs";

const app = new PIXI.Application;
const graphics = new PIXI.Graphics();

const circle = graphics.drawCircle(100, 100, 25);
app.stage.addChild(circle);
