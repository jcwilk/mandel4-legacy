import * as PIXI from "pixi.js";
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

import "./style.css";

const app = new PIXI.Application({
    //backgroundColor: 0xd3d3d3,
    width: window.innerWidth,
    height: window.innerHeight,
});

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

const container = new PIXI.Container();
container.filterArea = new PIXI.Rectangle(0, 0, 80, 80);
app.stage.addChild(container);

window.onload = async (): Promise<void> => {
    await loadGameAssets();

    document.body.appendChild(app.view);

    setupMandelRecursion();
    setupMandelDrawing();
    setupControls();
    setupResizing();
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

function setupResizing(): void {
    const resize = () => {
        // Get the parent
        // const parent = app.view.parentNode;
        // ^-- in previous versions of pixi.js this led to `parent.clientWidth` and `parent.clientHeight` which were
        // for some reason recommended to be used rather than window.innerWidth etc. Switching to just window.innerWidth/innerHeight for now
        // but if there's scaling issues look into the "proper" way to do this

        // Resize the renderer
        app.renderer.resize(window.innerWidth, window.innerHeight);

        container.filterArea.width = Math.ceil(window.innerWidth);
        container.filterArea.height = Math.ceil(window.innerHeight);

        const minScreenSize = 70;

        // Scale the renderer to fit minScreenSize x minScreenSize plus extra on the bottom or right
        const narrowest = Math.min(window.innerWidth, window.innerHeight);
        const widest = Math.max(window.innerWidth, window.innerHeight);
        app.stage.scale.set(narrowest / minScreenSize);
        const maxScreenSize = (minScreenSize * widest) / narrowest;

        if (isPortrait()) {
            controls.plus.sprite.position.set(minScreenSize - 8, maxScreenSize - 8);
            controls.minus.sprite.position.set(minScreenSize - 20, maxScreenSize - 8);
            centerArrowsAt(12, maxScreenSize - 12);
        } else {
            controls.plus.sprite.position.set(maxScreenSize - 8, 8);
            controls.minus.sprite.position.set(maxScreenSize - 8, 20);
            centerArrowsAt(maxScreenSize - 12, minScreenSize - 12);
        }

        updateScreenSize();
    };
    window.addEventListener("resize", resize);

    resize();
    ///
}

function updateScreenSize(): void {
    if (isPortrait()) {
        mandelUniforms.screenWidth = screenSize;
        mandelUniforms.screenHeight = (screenSize * window.innerHeight) / window.innerWidth;
    } else {
        mandelUniforms.screenWidth = (screenSize * window.innerWidth) / window.innerHeight;
        mandelUniforms.screenHeight = screenSize;
    }
}

function isPortrait(): boolean {
    return window.innerWidth < window.innerHeight;
}

let screenSize = 2;
const mandelRes = 4096;
const zoomRatio = 0.025;
const panRatio = 0.015;
const mandelUniforms = {
    texIn: PIXI.RenderTexture.create({ width: mandelRes, height: mandelRes }),
    mandelRes: mandelRes,
    screenWidth: 2,
    screenHeight: 1,
    screenX: 0,
    screenY: 0,
};
function setupMandelRecursion(): void {
    const mandelVertexSrc = `
        precision mediump float;

        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;
        uniform int mandelRes;

        varying vec2 vUvs;

        void main() {
            vUvs = aUvs;
            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
        }`;
    const mandelFragmentSrc = `
    precision mediump float;

    varying vec2 vUvs;
    uniform sampler2D texIn;
    uniform int mandelRes;

    void main()
    {
        vec4 data = texture2D(texIn, vUvs);
        float x = data.x*2.;
        float y = data.y*2.;
        int i = int(data.z*256.);
        float signs = data.a;
        vec2 c = (vUvs-vec2(0.5))*4.;
        
        if (i == 0) {
            x = 0.;
            y = 0.;
            signs = 0.;
        }

        if (signs >= .5) x = -x;
        if (mod(signs,.5) > 0.) y = -y;

        if (abs(x) < 2. && abs(y) < 2.) {
            float zx = x*x - y*y + c.x;
            y = (x+x)*y + c.y;
            x = zx;
            i+= 1;
        } else {
            x = 2.;
            y = 2.;
        }
        signs = 0.;
        if (x < 0.) signs+=.5;
        if (y < 0.) signs+=.25;
        gl_FragColor = vec4(abs(x)/2.,abs(y)/2.,float(i)/256.,signs);
        // TODO - mandelbrot goes here
    }`;
    const geometry = new PIXI.Geometry()
        .addAttribute(
            "aVertexPosition", // the attribute name
            [
                0,
                0, // x, y
                mandelRes,
                0, // x, y
                mandelRes,
                mandelRes,
                0,
                mandelRes,
            ], // x, y
            2
        ) // the size of the attribute
        .addAttribute(
            "aUvs", // the attribute name
            [
                0,
                0, // u, v
                1,
                0, // u, v
                1,
                1,
                0,
                1,
            ], // u, v
            2
        ) // the size of the attribute
        .addIndex([0, 1, 2, 0, 2, 3]);
    let mandelTexture1 = mandelUniforms.texIn;
    let mandelTexture2 = PIXI.RenderTexture.create({ width: mandelRes, height: mandelRes });
    const mandelShader = PIXI.MeshMaterial.from(mandelVertexSrc, mandelFragmentSrc, mandelUniforms);
    const mandelQuad = new PIXI.Mesh(geometry, mandelShader as PIXI.MeshMaterial);

    //app.stage.addChild(mandelQuad);

    app.ticker.add(() => {
        app.renderer.render(mandelQuad, mandelTexture2);
        [mandelTexture1, mandelTexture2] = [mandelTexture2, mandelTexture1];
        mandelUniforms.texIn = mandelTexture1;
        //mandelQuad.rotation += delta / 100;
    });
}

function setupMandelDrawing(): void {
    const mandelDrawFragmentSrc = `
        precision mediump float;

        varying vec2 vTextureCoord;
        varying vec4 vColor;
        uniform sampler2D uSampler;
        uniform sampler2D texIn;
        uniform int mandelRes;

        uniform float screenWidth;
        uniform float screenHeight;
        uniform float screenX;
        uniform float screenY;

        void main()
        {
            float x = .5 + screenX + screenWidth * (vTextureCoord.x - 0.5);
            float y = .5 + screenY + screenHeight * (vTextureCoord.y - 0.5);
            vec4 data = texture2D(texIn, vec2(x,y));
            gl_FragColor = vec4(vec3(data.z),1.);
        }`;

    const filter = new PIXI.Filter(undefined, mandelDrawFragmentSrc, mandelUniforms);
    container.filters = [filter];

    app.ticker.add((delta) => {
        if (controls.plus.isDown) {
            screenSize /= zoomRatio * delta + 1;
            updateScreenSize();
        }
        if (controls.minus.isDown) {
            screenSize *= zoomRatio * delta + 1;
            updateScreenSize();
        }
        if (controls.up.isDown) {
            filter.uniforms.screenY -= screenSize * panRatio * delta;
        }
        if (controls.down.isDown) {
            filter.uniforms.screenY += screenSize * panRatio * delta;
        }
        if (controls.left.isDown) {
            filter.uniforms.screenX -= screenSize * panRatio * delta;
        }
        if (controls.right.isDown) {
            filter.uniforms.screenX += screenSize * panRatio * delta;
        }
    });
}
