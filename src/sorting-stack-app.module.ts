import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameController } from './game/game.controller';
import { StackController } from './game/stack/stack.controller';
import { ItemController } from './game/stack/item/item.controller';
import { GameService } from './game/game.service';
import { StackService } from './game/stack/stack.service';
import { PlayerService } from './game/player/player.service';
import { PlayerController } from './game/player/player.controller';
import { ItemService } from './game/stack/item/item.service';

@Module({
  imports: [],
  controllers: [AppController, GameController, StackController, ItemController, PlayerController],
  providers: [AppService, GameService, StackService, PlayerService, ItemService],
})
export class SortingStackAppModule {}
