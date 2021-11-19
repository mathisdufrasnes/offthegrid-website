// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments, News } = initSchema(schema);

export {
  Comments,
  News
};