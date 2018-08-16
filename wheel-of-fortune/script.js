/* eslint-disable no-undef */
const app = new PIXI.Application({
  width: 500,
  height: 500,
  transparent: true,
});

const sectionGraphic = new PIXI.Graphics();
const textContainer = new PIXI.Container();
const wheel = new PIXI.Container();

const radius = 250;
const numberOfSectors = 20;
const piTwo = Math.PI * 2;
const radiansPerSector = piTwo / numberOfSectors;

function createSectorText(sectionNumber) {
  const sectionText = sectionNumber + 1;
  const text = new PIXI.Text(sectionText.toString(), { fill: '#000000' });

  const rotation = sectionNumber * radiansPerSector;
  const textAnchorPercentage = (radius - 40 / 2) / radius;

  text.anchor.set(0.5, 0.5);
  text.rotation = rotation + Math.PI;

  text.position.x = 250
        + radius * textAnchorPercentage * Math.cos(rotation);

  text.position.y = 250
        + radius * textAnchorPercentage * Math.sin(rotation);

  textContainer.addChild(text);
}

for (let sector = 0; sector < numberOfSectors; sector += 1) {
  const startingAngle = sector * radiansPerSector - radiansPerSector / 2;
  const endingAngle = startingAngle + radiansPerSector;

  sectionGraphic.beginFill(`0x${Math.floor(Math.random() * 16777215).toString(16)}`);
  sectionGraphic.lineStyle(2, 0xffffff, 1);
  sectionGraphic.moveTo(0, 0);
  sectionGraphic.arc(0, 0, radius, startingAngle, endingAngle);
  sectionGraphic.lineTo(0, 0);
  createSectorText(sector);
}

const circleSprite = new PIXI.Sprite(sectionGraphic.generateCanvasTexture());

wheel.pivot.set(250, 250);
wheel.position.set(250, 250);
wheel.addChild(circleSprite, textContainer);

wheel.buttonMode = true;
wheel.interactive = true;

function finalPoisition() {
  const choosenSector = 2;
  const sectorsToMinus = numberOfSectors - choosenSector;
  const rotation = sectorsToMinus * radiansPerSector;
  return rotation;
}

wheel.on('pointertap', () => {
  wheel.rotation = 0;
  const rotation = piTwo + finalPoisition();
  const tl = new TimelineMax();
  tl.to(wheel, 7, { rotation: `+=${rotation}`, ease: Back.easeOut.config(1) });
  TweenLite.to(tl, 4, { timeScale: 0, ease: Linear.easeNone, delay: 3 });
});

app.stage.addChild(wheel);
document.body.appendChild(app.view);
/* eslint-enable no-undef */
