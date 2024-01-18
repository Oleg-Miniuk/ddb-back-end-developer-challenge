import * as mongoose from 'mongoose';
import { readFileSync } from 'fs';

import { CharacterModel } from '../src/character/entities/character.entity';

// TODO: move to .env
const mongoUri = 'mongodb://localhost:27017/DDB';

const jsonFilePath = './data_samples/briv.json';

async function loadData() {
  await mongoose.connect(mongoUri);

  const jsonData = readFileSync(jsonFilePath, 'utf-8');
  const characterData = JSON.parse(jsonData);

  const character = new CharacterModel(characterData);
  await character.save();

  await mongoose.disconnect();

  console.log('Data is uploaded');
}

loadData().catch((err) => {
  mongoose.disconnect();
  console.error('Error while trying to upload the data:', err);
  process.exit(1);
});
