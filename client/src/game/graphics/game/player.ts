export class Player {

    private static DEFAULT_MOVE_SPEED: number = 5.0;
    private static INVERSE_SQRT_2: number = 0.7071;

    name: string;
    pos: number[];

    // Player moving in direction up, right, bottom and left
    isMoving: boolean[] = [false, false, false, false];

    moveSpeed: number;

    constructor(name: string, pos: number[]) {
        this.name = name;
        this.pos = pos;
        this.moveSpeed = Player.DEFAULT_MOVE_SPEED;
    }

    moves(direction: Direction) {
        switch (direction) {
            case 'up': this.pos[1] -= this.moveSpeed; break;
            case 'right': this.pos[0] += this.moveSpeed; break;
            case 'down': this.pos[1] += this.moveSpeed; break;
            case 'left': this.pos[0] -= this.moveSpeed; break;
            case 'upRight': {
                this.pos[0] += Player.INVERSE_SQRT_2 * this.moveSpeed;
                this.pos[1] -= Player.INVERSE_SQRT_2 * this.moveSpeed;
                break;
            }
            case 'upLeft': {
                this.pos[0] -= Player.INVERSE_SQRT_2 * this.moveSpeed;
                this.pos[1] -= Player.INVERSE_SQRT_2 * this.moveSpeed;
                break;
            }
            case 'downRight': {
                this.pos[0] += Player.INVERSE_SQRT_2 * this.moveSpeed;
                this.pos[1] += Player.INVERSE_SQRT_2 * this.moveSpeed;
                break;
            }
            case 'downLeft': {
                this.pos[0] -= Player.INVERSE_SQRT_2 * this.moveSpeed;
                this.pos[1] += Player.INVERSE_SQRT_2 * this.moveSpeed;
                break;
            }
        }
    }
}

export type Direction = 'up' | 'right' | 'down' | 'left' | 'upRight' | 'upLeft' | 'downRight' | 'downLeft';