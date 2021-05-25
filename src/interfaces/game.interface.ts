import { Player } from "./player.interface";

export interface Game {
    id?: number;
    level: number;
    solved?: false;
    players?: Player[];
    stacks?: number[][];
    popInfo?: {
        item: number;
        stack: number;
    }
}
