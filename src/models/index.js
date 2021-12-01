// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Language = {
  "EN": "EN",
  "FR": "FR"
};

const { Comments, News } = initSchema(schema);

export {
  Comments,
  News,
  Language
};