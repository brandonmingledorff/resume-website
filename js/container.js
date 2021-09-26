const app = new PIXI.Application({
	autoResize: true,
    resolution: devicePixelRatio,
    backgroundColor: 0xcccccc
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from('assets/img/bunny.png');

// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 50;
    bunny.y = Math.floor(i / 5) * 50;
    container.addChild(bunny);
}

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
});

window.addEventListener('resize', resize);

// Resize function window
function resize() {
	// Resize the renderer
	app.renderer.resize(window.innerWidth, window.innerHeight);
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;
}

resize();
