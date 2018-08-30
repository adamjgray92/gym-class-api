import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDB from '../db';

import gymClass from '../controller/GymClass';

let router = express();

// connect to db
initializeDB(db => {
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)
  router.use('/classes', gymClass({ config, db }));
});

export default router;