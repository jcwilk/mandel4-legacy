import * as PIXI from "pixi.js";

export class FractalBuffer {
    texture1: PIXI.RenderTexture;
    texture2: PIXI.RenderTexture;
    mandelUniforms: { texIn: PIXI.RenderTexture; mandelRes: number };
    quad: PIXI.Mesh;

    constructor(mandelRes: number) {
        this.mandelUniforms = {
            texIn: PIXI.RenderTexture.create({ width: mandelRes, height: mandelRes }),
            mandelRes: mandelRes,
        };
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
        this.texture1 = this.mandelUniforms.texIn;
        this.texture2 = PIXI.RenderTexture.create({ width: mandelRes, height: mandelRes });
        const mandelShader = PIXI.MeshMaterial.from(mandelVertexSrc, mandelFragmentSrc, this.mandelUniforms);
        this.quad = new PIXI.Mesh(geometry, mandelShader as PIXI.MeshMaterial);
    }

    update(renderer: PIXI.Renderer) {
        renderer.render(this.quad, this.texture2);
        [this.texture1, this.texture2] = [this.texture2, this.texture1];
        this.mandelUniforms.texIn = this.texture1;
    }
}
