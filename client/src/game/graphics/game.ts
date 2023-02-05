import { socket } from '../../services/socket';
import { COLORS } from './colors';
import { Player, type Direction } from './game/player';
import { imgs } from './game/ressources/images';

export class Graphics {

    // Constant
    static PLAYER_INFO: string = "playerInfo";
    static CUBE_SIZE: number = 128;

    // FPS
    fps = 1000.0 / 60.0;

    // Graphical elements
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    width: number;
    height: number;
    halfWidth: number;
    halfHeight: number;
    halfSize: number = Graphics.CUBE_SIZE / 2; // half of cube size

    // Loading booleans
    mapLoaded: boolean = false;

    // Game attributes
    map: Map;
    player: Player;

    constructor() {

        socket.on('debug', (socket) => {
            console.log(socket);
        });

        // Handle keys
        this.handleKeys();

        // Get canvas element
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (this.canvas.getContext) {
            // Setup canvas' context
            this.ctx = this.canvas.getContext('2d');

            this.width = 200;
            this.height = 200;
            this.width = 100;
            this.height = 100;

            // When map is received from server, init the game
            socket.on("map", (m: Map) => {
                this.map = m;
                this.mapLoaded = true;

                // Create player (saved in localStorage or new one)
                const locStoPlayer = window.localStorage.getItem(Graphics.PLAYER_INFO);
                if (locStoPlayer) {
                    const temp: Player = JSON.parse(locStoPlayer);
                    this.player = new Player(temp.name, temp.pos);
                } else {
                    this.player = new Player("Unnamed", [0.0, 0.0]);
                }

                // Start updating loop
                setInterval(() => {
                    this.update();
                }, this.fps);
            });

            // Ask server for map
            socket.emit("getMap", {});
        } else {
            console.error('Canvas not supported');
        }
    }

    // Update called every fps ms that update and render the game
    update(): void {
        this.handlePlayerMove();
        this.render();
    }

    // Draw game every fps ms
    render(): void {
        this.drawBackground();
        this.drawProps();
        this.drawPlayer();
    }

    // Draws the background
    drawBackground(): void {
        this.ctx.fillStyle = COLORS.background;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    // Draws the player
    drawPlayer(): void {
        this.drawProp('player', [this.halfWidth, this.halfHeight]);
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
        const p = this.ctx.drawImage(imgs[name], pos[0], pos[1]);
    }

    isInScreen(propPos: Pos): boolean {
        // Continuer à coder ici !
        return true;
    }

    // Given an object and player's position, return where to draw element
    plot(propPos: Pos): Pos {
        return [
            this.halfWidth - this.player.pos[0] + (propPos[0] * Graphics.CUBE_SIZE),
            this.halfHeight - this.player.pos[1] + (propPos[1] * Graphics.CUBE_SIZE)
        ];
    }

    // When window's size change, update canvas size
    resize(w: number, h: number): void {
        if (this.canvas) {
            // Update canvas size
            this.canvas.width = w;
            this.canvas.height = h;

            // Update class attributes
            this.width = w;
            this.height = h;

            // update half sizes (to compute center)
            this.halfWidth = w / 2 - this.halfSize;
            this.halfHeight = h / 2 - this.halfSize;
        }
    }

    // Every update in the game, moves player
    handlePlayerMove(): void {
        const [up, right, down, left] = this.player.isMoving;
        if (up && right) {
            this.player.moves('upRight');
        } else if (up && left) {
            this.player.moves('upLeft');
        } else if (down && right) {
            this.player.moves('downRight');
        } else if (down && left) {
            this.player.moves('downLeft');
        } else {
            if (up) this.player.moves('up');
            if (right) this.player.moves('right');
            if (down) this.player.moves('down');
            if (left) this.player.moves('left');
        }
    }

    // Check if player can move in a given direction
    canMove(direciton: Direction): boolean {
        return true;
        // Continuer à coder ici !
        switch (direciton) {
            case 'up':
                break;
        }
    }

    // Handle keys down
    handleKeys(): void {
        document.onkeydown = (event) => {
            const k = event.key;
            if (k === 'ArrowUp') {
                this.player.isMoving[0] = true;
            }
            if (k === 'ArrowRight') {
                this.player.isMoving[1] = true;
            }
            if (k === 'ArrowDown') {
                this.player.isMoving[2] = true;
            }
            if (k === 'ArrowLeft') {
                this.player.isMoving[3] = true;
            }
        };
        // Handle keys up
        document.onkeyup = (event) => {
            const k = event.key;
            if (k === 'ArrowUp' && this.player.isMoving[0]) {
                this.player.isMoving[0] = false;
            }
            if (k === 'ArrowRight' && this.player.isMoving[1]) {
                this.player.isMoving[1] = false;
            }
            if (k === 'ArrowDown' && this.player.isMoving[2]) {
                this.player.isMoving[2] = false;
            }
            if (k === 'ArrowLeft' && this.player.isMoving[3]) {
                this.player.isMoving[3] = false;
            }
        };
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