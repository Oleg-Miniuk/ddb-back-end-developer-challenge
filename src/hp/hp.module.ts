import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HpService } from './hp.service';
import { HpController } from './hp.controller';
import { CharacterSchema } from '../schemas/character.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }]),
  ],
  providers: [HpService],
  controllers: [HpController],
})
export class HpModule {}
