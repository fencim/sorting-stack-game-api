import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { Game } from 'src/interfaces/game.interface';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) { }
    @ApiBody({
        schema: {
            type: "object",
            required: ['level'],
            properties: {
                level: {type: 'number'}
            }
        }
    })
    @ApiOperation({
        summary: "Create new Game"
    })
    @Post()
    async create(@Body() newGame: Game):Promise<Game> {
        return this.gameService.create(newGame);
    }
    @ApiOperation({
        summary: "Get information of game with id {id}"
    })
    @Get(':id')
    findOne(@Param('id') id: number): Game {
        return this.gameService.findOne(id);
    }
    
    @ApiOperation({
        summary: "Update information of game with id {id}"
    })
    @ApiBody({
        schema: {
            type: "object",
            properties: {
                solved: {type: 'boolean', default: false},
                popInfo: {
                    type: 'object',
                    properties: { 
                        item: {type:'number', default: undefined}, 
                        stack: {type:'number', default: undefined}
                    }
                }
            }
        }
    })
    @Put(':id')
    update(@Param('id') id: number, @Body() game: Game): Game {
        return this.gameService.findOne(id);
    }
    @ApiOperation({
        summary: "Get all running games"
    })
    @Get()
    findAll():Game[] {
        return this.gameService.findAll().map(g => {
            return { ...g, players: undefined, stacks: undefined }
        });
    }
}
