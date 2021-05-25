import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
    update(gameid: number, id: number, stackindex: number, item: number): number[][] {
        throw new Error('Method not implemented.');
    }
    create(gameid: number, stackindex: any, item: number): number[] {
        throw new Error('Method not implemented.');
    }
    deleteOne(gameid: number, stackindex: number, id: number): number[] {
        throw new Error('Method not implemented.');
    }
    findOne(gameid: number, stackindex: number, id: number): number {
        throw new Error('Method not implemented.');
    }
    findAll(gameid: number, stackindex: any): number[] {
        throw new Error('Method not implemented.');
    }
}
