import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICharacter } from './entities/character.entity';
import {
  DealDamageDto,
  HealDto,
  // AddTemporaryHpDto,
} from './DTOs/character.dto';

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

  async dealDamage(dealDamageDto: DealDamageDto): Promise<ICharacter> {
    const { characterId, damageAmount, damageType } = dealDamageDto;

    const character = await this.characterModel.findById(characterId);

    let deltaDamageAmount = damageAmount;

    if (!character) {
      throw new NotFoundException(`Character with ID ${characterId} not found`);
    }

    // Check for immunities
    if (
      character.defenses.some(
        (defense) =>
          defense.type === damageType && defense.defense === 'immunity',
      )
    ) {
      return character;
    }

    // Apply resistance
    if (
      character.defenses.some(
        (defense) =>
          defense.type === damageType && defense.defense === 'resistance',
      )
    ) {
      deltaDamageAmount = Math.ceil(damageAmount / 2);
    }

    // Apply damage to temporary HP first
    if (character.temporaryHitPoints > 0) {
      if (character.temporaryHitPoints >= deltaDamageAmount) {
        character.temporaryHitPoints =
          character.temporaryHitPoints - deltaDamageAmount;
        deltaDamageAmount = 0;
      } else {
        deltaDamageAmount = deltaDamageAmount - character.temporaryHitPoints;
        character.temporaryHitPoints = 0;
      }
    }

    // Apply any remaining damage to regular HP
    character.hitPoints = Math.max(character.hitPoints - deltaDamageAmount, 0);
    await character.save();

    return character;
  }

  async heal(healDto: HealDto): Promise<ICharacter> {
    const { characterId, healAmount } = healDto;

    const character = await this.characterModel.findById(characterId);
    if (!character) {
      throw new NotFoundException(`Character with ID ${characterId} not found`);
    }

    character.hitPoints = character.hitPoints + healAmount;
    await character.save();

    return character;
  }

  // async addTemporaryHP(id: string, tempHpAmount: number): Promise<CharacterDocument> {
  //   const character = await this.characterModel.findById(id);
  //   if (!character) {
  //     throw new NotFoundException(`Character with ID ${id} not found`);
  //   }

  //   character.temporaryHitPoints = Math.max(character.temporaryHitPoints, tempHpAmount);
  //   await character.save();

  //   return character;
  // }
}
