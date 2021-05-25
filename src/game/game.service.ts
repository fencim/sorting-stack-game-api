import { Injectable } from '@nestjs/common';
import { Game } from 'src/interfaces/game.interface';

@Injectable()
export class GameService {
    private readonly games: Game[] = [];

    create(game: Game): Game {
        game.id = this.games.length;
        game.solved = false;
        game.stacks = game.stacks || [];
        this.games.push(game);
        return game;
    }
    findOne(id: number) : Game {
        return this.games.find((g => g.id == id));
    }
    findAll(): Game[] {
        return this.games;
    }
}
