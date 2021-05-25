import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { StackService } from './stack.service';

@Controller('game/:gameid/stack')
export class StackController {
    constructor(private readonly stackService: StackService) { }
    @Get()
    findAll(@Param('gameid') gameid:number):number[][] {
        return this.stackService.findAll(gameid);
    }

    @Get(':id')
    findOne(@Param('gameid') gameid:number, @Param('id') id: number):number[] {
        return this.stackService.findOne(gameid, id);
    }

    @Delete(':id')
    deleteOne(@Param('gameid') gameid:number, @Param('id') id: number): number[] {
        return this.stackService.deleteOne(gameid, id);
    }
    @ApiBody({ schema: {
        type: 'array',
        items: {type: 'number'}
    }})
    @Post()
    create(@Param('gameid') gameid:number, @Body() stack: number[]):number {
        return this.stackService.create(gameid, stack);
    }
    @ApiBody({ schema: {
        type: 'array',
        items: {type: 'number'}
    }})
    @Put(':id')
    update(@Param('gameid') gameid:number, @Param('id') id:number, @Body() stack: number[]):number[][] {
        return this.stackService.update(gameid, id, stack);
    }
}
