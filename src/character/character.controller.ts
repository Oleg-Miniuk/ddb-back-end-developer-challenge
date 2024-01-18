import { Controller, Get, Param } from '@nestjs/common';
import { CharacterService } from './character.service';
// import {
//   DealDamageDto,
//   HealDto,
//   AddTemporaryHpDto,
// } from './DTOs/character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get(':id')
  async getCharacter(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  // @Post(':id/deal-damage')
  // async dealDamage(
  //   @Param('id') id: string,
  //   @Body() dealDamageDto: DealDamageDto,
  // ) {
  //   return this.characterService.dealDamage(id, dealDamageDto);
  // }

  // @Post(':id/heal')
  // async heal(@Param('id') id: string, @Body() healDto: HealDto) {
  //   return this.characterService.heal(id, healDto);
  // }

  // @Post(':id/add-temporary-hp')
  // async addTemporaryHP(
  //   @Param('id') id: string,
  //   @Body() addTemporaryHpDto: AddTemporaryHpDto,
  // ) {
  //   return this.characterService.addTemporaryHP(id, addTemporaryHpDto);
  // }
}
