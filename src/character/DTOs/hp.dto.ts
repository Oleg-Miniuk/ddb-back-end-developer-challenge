import { IsEnum } from 'class-validator';

export class AddTemporaryHpDto {
  readonly characterId: string;
  readonly temporaryHpAmount: number;
}

export enum DamageType {
  Bludgeoning = 'bludgeoning',
  Piercing = 'piercing',
  Slashing = 'slashing',
  Fire = 'fire',
  Cold = 'cold',
  Acid = 'acid',
  Thunder = 'thunder',
  Lightning = 'lightning',
  Poison = 'poison',
  Radiant = 'radiant',
  Necrotic = 'necrotic',
  Psychic = 'psychic',
  Force = 'force',
}

export class DealDamageDto {
  readonly characterId: string;
  readonly damageAmount: number;

  @IsEnum(DamageType, {
    message:
      'damageType should be one of the following: fire, bludgeoning, ...',
  })
  readonly damageType: DamageType;
}

export class HealDto {
  readonly characterId: string;
  readonly healAmount: number;
}
