export class AddTemporaryHpDto {
  readonly characterId: string;
  readonly temporaryHpAmount: number;
}

// export class CreateCharacterDto {
//   readonly name: string;
//   readonly hitPoints: number;
//   readonly maxHitPoints: number;
//   readonly temporaryHitPoints: number;
//   readonly resistances: string[];
//   readonly immunities: string[];
// }

export class DealDamageDto {
  readonly characterId: string;
  readonly damageAmount: number;
  readonly damageType: string; // Type of damage (e.g., 'fire', 'bludgeoning')
}

export class HealDto {
  readonly characterId: string;
  readonly healAmount: number;
}
