import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { ItemService } from './item.service';

@Controller('game/:gameid/stack/:stackindex/item')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }
    @ApiOperation({
        summary: "Get all items in the specified stack"
    })
    @Get()
    findAll(@Param('gameid') gameid:number, stackindex):number[] {
        return this.itemService.findAll(gameid, stackindex);
    }
    @ApiOperation({
        summary: "Get item with index {id} in the specified stack"
    })
    @Get(':id')
    findOne(@Param('gameid') gameid:number, @Param('stackindex') stackindex: number, @Param('id') id: number):number {
        return this.itemService.findOne(gameid, stackindex, id);
    }
    @ApiOperation({
        summary: "Delete item with index {id} in the specified stack"
    })
    @Delete(':id')
    deleteOne(@Param('gameid') gameid:number, @Param('stackindex') stackindex: number, @Param('id') id: number): number[] {
        return this.itemService.deleteOne(gameid, stackindex, id);
    }
    @ApiOperation({
        summary: "Add given item in the specified stack"
    })
    @ApiBody({ schema: {
        type: 'number'
    }})
    @Post()
    create(@Param('gameid') gameid:number, stackindex, @Body() item: number):number[] {
        return this.itemService.create(gameid, stackindex, item);
    }
}
