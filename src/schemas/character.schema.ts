import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CharacterDocument = HydratedDocument<Character>;

@Schema()
export class Character {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  hitPoints: number;

  @Prop({ required: true })
  maxHitPoints: number;

  @Prop({ required: true })
  temporaryHitPoints: number;

  @Prop({ default: [] })
  resistances: string[];

  @Prop({ default: [] })
  immunities: string[];
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
