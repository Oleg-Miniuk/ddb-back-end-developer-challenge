import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CharacterService } from './character.service';
import { DealDamageDto, HealDto, AddTemporaryHpDto } from './DTOs/hp.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get(':id')
  async getCharacter(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  @Post('deal-damage')
  async dealDamage(@Body() dealDamageDto: DealDamageDto) {
    return this.characterService.dealDamage(dealDamageDto);
  }

  @Post('heal')
  async heal(@Body() healDto: HealDto) {
    return this.characterService.heal(healDto);
  }

  @Post('add-temporary-hp')
  async addTemporaryHP(@Body() addTemporaryHpDto: AddTemporaryHpDto) {
    return this.characterService.addTemporaryHP(addTemporaryHpDto);
  }
}
