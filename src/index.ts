import * as PIXI from "pixi.js";
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

import "./style.css";

const app = new PIXI.Application({
    backgroundColor: 0xd3d3d3,
    width: window.innerWidth,
    height: window.innerHeight,
});

const stage = app.stage;

interface ControlContainer {
    [index: string]: ControlState;
}
interface ControlState {
    sprite: PIXI.Sprite;
    isDown: boolean;
}
const controls: ControlContainer = {};

// TODO: This might as well be an array of strings... is there a non-awkward way to use enums as indices?
enum Control {
    plus = "plus",
    minus = "minus",
    up = "up",
    down = "down",
    left = "left",
    right = "right",
}

function centerArrowsAt(x: number, y: number): void {
    controls.up.sprite.position.set(x, y - 8);
    controls.down.sprite.position.set(x, y + 8);
    controls.left.sprite.position.set(x - 8, y);
    controls.right.sprite.position.set(x + 8, y);
}

window.onload = async (): Promise<void> => {
    await loadGameAssets();

    document.body.appendChild(app.view);

    setupControls();
    setupResizing();

    const birdFromSprite = getBird();
    birdFromSprite.anchor.set(0.5, 0.5);
    birdFromSprite.position.set(35);

    stage.addChild(birdFromSprite);
};

async function loadGameAssets(): Promise<void> {
    return new Promise((res, rej) => {
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", "./assets/simpleSpriteSheet.json");
        loader.add("buttons", "./assets/buttons.json");

        loader.onComplete.once(() => {
            res();
        });

        loader.onError.once(() => {
            rej();
        });

        loader.load();
    });
}

const setupResizing = () => {
    const minScreenSize = 70;
    //const screenSize = 2;

    const resize = () => {
        // Get the parent
        // const parent = app.view.parentNode;
        // ^-- in previous versions of pixi.js this led to `parent.clientWidth` and `parent.clientHeight` which were
        // for some reason recommended to be used rather than window.innerWidth etc. Switching to just window.innerWidth/innerHeight for now
        // but if there's scaling issues look into the "proper" way to do this

        // Resize the renderer
        app.renderer.resize(window.innerWidth, window.innerHeight);

        // Scale the renderer to fit 128x128 plus extra on the bottom or right
        const narrowest = Math.min(window.innerWidth, window.innerHeight);
        const widest = Math.max(window.innerWidth, window.innerHeight);
        app.stage.scale.set(narrowest / minScreenSize);
        const maxScreenSize = (minScreenSize * widest) / narrowest;

        if (window.innerWidth < window.innerHeight) {
            // portrait
            // const screenWidth = screenSize;
            // const screenHeight = (screenSize * window.innerHeight) / window.innerWidth;
            controls.plus.sprite.position.set(minScreenSize - 8, maxScreenSize - 8);
            controls.minus.sprite.position.set(minScreenSize - 20, maxScreenSize - 8);
            centerArrowsAt(12, maxScreenSize - 12);
        } else {
            // landscape
            // var screenWidth = (screenSize * parent.clientWidth) / parent.clientHeight;
            // var screenHeight = screenSize;
            controls.plus.sprite.position.set(maxScreenSize - 8, 8);
            controls.minus.sprite.position.set(maxScreenSize - 8, 20);
            centerArrowsAt(maxScreenSize - 12, minScreenSize - 12);
        }
        // TODO: adjust filter stuff here
        //filter.uniforms.screenWidth = screenWidth;
        //filter.uniforms.screenHeight = screenHeight;
        //container.filterArea.width = Math.ceil(parent.clientWidth);
        //container.filterArea.height = Math.ceil(parent.clientHeight);
    };
    window.addEventListener("resize", resize);

    resize();
};

function setupControls(): void {
    // const baseTexture = new PIXI.BaseTexture(buttonsSpritesheetData.meta.image, null, 1);
    // const spritesheet = new PIXI.Spritesheet(baseTexture, buttonsSpritesheetData);

    // spritesheet.parse(function (textures) {
    // // finished preparing spritesheet textures
    // });

    for (const name of Object.values(Control)) {
        controls[name] = { sprite: new PIXI.Sprite(PIXI.Texture.from(name)), isDown: false };
        app.stage.addChild(controls[name].sprite);
        controls[name].sprite.interactive = true;
        controls[name].sprite.buttonMode = true;

        controls[name].sprite
            .on("pointerdown", function () {
                controls[name].isDown = true;
            })
            .on("pointerup", function () {
                controls[name].isDown = false;
            })
            .on("pointerupoutside", function () {
                controls[name].isDown = false;
            });
    }
}

function getBird(): PIXI.AnimatedSprite {
    const bird = new PIXI.AnimatedSprite([
        PIXI.Texture.from("birdUp.png"),
        PIXI.Texture.from("birdMiddle.png"),
        PIXI.Texture.from("birdDown.png"),
    ]);

    bird.loop = true;
    bird.animationSpeed = 0.1;
    bird.play();
    bird.scale.set(3);

    return bird;
}
