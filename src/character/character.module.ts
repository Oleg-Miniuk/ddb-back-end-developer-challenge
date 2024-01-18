import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { CharacterSchema } from './entities/character.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }]),
  ],
  providers: [CharacterService],
  controllers: [CharacterController],
})
export class CharacterModule {}
