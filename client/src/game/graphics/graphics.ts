export class Graphics {

    ctx;

    constructor(canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d');
    }

}