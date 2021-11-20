// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notes, Comments, News } = initSchema(schema);

export {
  Notes,
  Comments,
  News
};