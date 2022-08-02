import * as PIXI from "../../node_modules/@pixi";

const app = new PIXI.Application;
const graphics = new PIXI.Graphics();

graphics.drawCircle(100, 100, 100);
app.stage.addChild(gr);
