// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ClassesEnum = {
  "CSS360": "CSS360",
  "CSS342": "CSS342"
};

const MajorsEnum = {
  "CSSE": "CSSE",
  "IMD": "IMD",
  "MATH": "MATH"
};

const { MeetsModel, UsersModel } = initSchema(schema);

export {
  MeetsModel,
  UsersModel,
  ClassesEnum,
  MajorsEnum
};