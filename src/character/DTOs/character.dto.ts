export class AddTemporaryHpDto {
  readonly amount: number;
}

export class CreateCharacterDto {
  readonly name: string;
  readonly hitPoints: number;
  readonly maxHitPoints: number;
  readonly temporaryHitPoints: number;
  readonly resistances: string[];
  readonly immunities: string[];
}

export class DealDamageDto {
  readonly amount: number;
  readonly type: string; // Type of damage (e.g., 'fire', 'bludgeoning')
}

export class HealDto {
  readonly amount: number;
}
