import { Injectable } from '@nestjs/common';
import { GameService } from '../game.service';

@Injectable()
export class StackService {
    constructor(private readonly gameService: GameService) { }
    findAll(gameId: number): number [][] {
        return this.gameService.findOne(gameId).stacks;
    }
    findOne(gameId: number, index: number): number[] {
        let stacks = this.gameService.findOne(gameId).stacks;
        return this.gameService.findOne(gameId).stacks[index] || [];
    }
    deleteOne(gameId: number, index: number): number[] {
        let stacks = this.gameService.findOne(gameId).stacks;
        return this.gameService.findOne(gameId).stacks[index] || [];
    }
    create(gameId: number, stack: number[]): number {
        let stacks = this.gameService.findOne(gameId).stacks;
        return stacks.push(stack || []);
    }
    update(gameid: number, id: number, updated: number[][]): number[][] {
        let stacks = this.gameService.findOne(gameid).stacks;
        stacks.splice(id, stacks.length, ...updated);
        return stacks;
    }
}
