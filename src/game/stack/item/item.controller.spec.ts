import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from '../../game.service';
import { StackService } from '../stack.service';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

describe('ItemController', () => {
  let controller: ItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [GameService, StackService, ItemService]
    }).compile();

    controller = module.get<ItemController>(ItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
