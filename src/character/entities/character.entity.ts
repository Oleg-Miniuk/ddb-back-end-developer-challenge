import * as mongoose from 'mongoose';

// Mongoose Schemas
const statModifierSchema = new mongoose.Schema({
  affectedObject: String,
  affectedValue: String,
  value: Number,
});

const itemSchema = new mongoose.Schema({
  name: String,
  modifier: statModifierSchema,
});

const defenseSchema = new mongoose.Schema({
  type: String,
  defense: String,
});

const classSchema = new mongoose.Schema({
  name: String,
  hitDiceValue: Number,
  classLevel: Number,
});

const statsSchema = new mongoose.Schema({
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
});

export const CharacterSchema = new mongoose.Schema({
  name: String,
  level: Number,
  hitPoints: Number,
  temporaryHitPoints: Number,
  classes: [classSchema],
  stats: statsSchema,
  items: [itemSchema],
  defenses: [defenseSchema],
});

export const CharacterModel = mongoose.model('Character', CharacterSchema);

// TS interfaces
interface StatModifier {
  affectedObject: string;
  affectedValue: string;
  value: number;
}

interface Item {
  name: string;
  modifier: StatModifier;
}

interface Defense {
  type: string;
  defense: string;
}

interface Class {
  name: string;
  hitDiceValue: number;
  classLevel: number;
}

interface Stats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface ICharacter extends mongoose.Document {
  name: string;
  level: number;
  hitPoints: number;
  temporaryHitPoints: number;
  classes: Class[];
  stats: Stats;
  items: Item[];
  defenses: Defense[];
}
