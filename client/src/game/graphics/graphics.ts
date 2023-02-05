import { concat } from '../../services/functionnalConcurrency';
import { socket } from '../../services/socket';
import { COLORS } from './colors';
import { Player } from './game/player';

export class Graphics {

    // Constant
    PLAYER_INFO: string = "playerInfo";

    // FPS
    fps = 1000.0 / 60.0;

    // Graphical elements
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;

    // Loading booleans
    mapLoaded: boolean = false;

    // Game attributes
    map: Map;
    player: Player;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (this.canvas.getContext) {
            // Setup canvas' context
            this.ctx = this.canvas.getContext('2d');
            this.width = 200;
            this.height = 200;

            // When map is received from server, init the game
            socket.on("map", (m: Map) => {
                this.map = m;
                this.mapLoaded = true;
                const initGame = concat(
                    // 1 - Create player (saved in localStorage or new one)
                    () => {
                        const locStoPlayer = window.localStorage.getItem(this.PLAYER_INFO);
                        if (locStoPlayer) {
                            const temp: Player = JSON.parse(locStoPlayer);
                            this.player = new Player(temp.name, temp.pos);
                        } else {
                            this.player = new Player("Unnamed", [0.0, 0.0]);
                        }
                    },
                    () => console.log(this.map),
                    // 2 - Start rendering loop
                    () => {
                        setInterval(() => {
                            this.render();
                        }, this.fps);
                    }
                );
            });

            // Ask server for map
            socket.emit("getMap", {});
        } else {
            console.error('Canvas not supported');
        }
    }

    // Draw game every fps ms
    render(): void {
        this.drawBackground();
        this.drawProps();
    }

    // Draws the background
    drawBackground(): void {
        this.ctx.fillStyle = COLORS.background;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    // Draws all close props
    drawProps(): void {
        this.map.props.forEach((prop: Prop) => {
            if (this.isInScreen(prop.pos)) {
                this.drawProp(prop.name, this.plot(prop.pos));
            }
        });
    }

    drawProp(name: string, pos: Pos): void {

    }

    isInScreen(propPos: Pos): boolean {
        return true;
    }

    // Given an object and player's position, return where to draw element
    plot(propPos: Pos): Pos {
        return [500, 600];
    }

    // When window's size change, update canvas size
    resize(w: number, h: number): void {
        if (this.canvas) {
            this.width = w;
            this.height = h;
            this.canvas.width = w;
            this.canvas.height = h;
        }
    }
}

export interface Map {
    name: string;
    props: Prop[];
}

export interface Prop {
    name: string;
    pos: Pos;
    ressourceLevel: number;
}

export type Pos = number[];