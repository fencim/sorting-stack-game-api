import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { StackService } from './stack.service';

@Controller('game/:gameid/stack')
export class StackController {
    constructor(private readonly stackService: StackService) { }
    @ApiOperation({
        summary: "Get all stacks in specified game"
    })
    @Get()
    findAll(@Param('gameid') gameid:number):number[][] {
        return this.stackService.findAll(gameid);
    }
    @ApiOperation({
        summary: "update(ovewrite) all stacks in specified game"
    })
    @ApiBody({ schema: {
        type: 'array',
        items: { type: 'array', items: { type: 'number'}}
    }})
    @Put()
    update(@Param('gameid') gameid:number, @Param('id') id:number, @Body() stacks: number[][]):number[][] {
        return this.stackService.update(gameid, id, stacks);
    }
    @ApiOperation({
        summary: "delete a stack from the specified game"
    })
    @Delete(':id')
    deleteOne(@Param('gameid') gameid:number, @Param('id') id: number): number[] {
        return this.stackService.deleteOne(gameid, id);
    }

    @ApiOperation({
        summary: "add a stack to the specified game"
    })
    @ApiBody({ schema: {
        type: 'array',
        items: {type: 'number'}
    }})
    @Post()
    create(@Param('gameid') gameid:number, @Body() stack: number[]):number {
        return this.stackService.create(gameid, stack);
    }
    
    
}
