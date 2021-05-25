import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Game } from 'src/interfaces/game.interface';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) { }
    @Post()
    async create(@Body() newGame: Game) {
        return this.gameService.create(newGame);
    }
    @Get(':id')
    findOne(@Param('id') id: number): Game {
        return this.gameService.findOne(id);
    }

    @Get()
    findAll():Game[] {
        return this.gameService.findAll();
    }

}
