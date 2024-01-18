import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICharacter } from './entities/character.entity';
// import {
//   DealDamageDto,
//   HealDto,
//   AddTemporaryHpDto,
// } from './DTOs/character.dto';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel('Character')
    private readonly characterModel: Model<ICharacter>,
  ) {}

  async findOne(id: string): Promise<ICharacter> {
    const character = await this.characterModel.findById(id).exec();
    if (!character) {
      throw new NotFoundException(`Character with ID ${id} not found`);
    }
    return character;
  }
}
